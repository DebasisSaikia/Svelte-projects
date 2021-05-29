<script>
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher();
  import Button from "../shared/Button.svelte";
  import PollStore from "../stores/PollStore";

  let fields = { question: "", answerA: "", answerB: "" };
  let errors = { question: "", answerA: "", answerB: "" };
  let valid = false;

  const submitHandler = () => {
    valid = true;
    if (fields.question.trim().length < 5) {
      valid = false;
      errors.question = "At least 5 characters long";
    } else {
      errors.question = "";
    }
    if (fields.answerA.trim().length < 1) {
      valid = false;
      errors.answerA = "At least 1 characters long";
    } else {
      errors.answerA = "";
    }
    if (fields.answerB.trim().length < 1) {
      valid = false;
      errors.answerB = "At least 1 characters long";
    } else {
      errors.answerB = "";
    }

    if (valid) {
      let poll = { ...fields, voteA: 0, voteB: 0, id: Math.random() };
      PollStore.update((currentPolls) => {
        return [poll, ...currentPolls];
      });
      dispatch("add");
    }
  };
</script>

<form on:submit|preventDefault={submitHandler}>
  <div class="form_field">
    <label for="question">Question</label>
    <input type="text" id="question" bind:value={fields.question} />
    <div class="errors">{errors.question}</div>
  </div>
  <div class="form_field">
    <label for="answer-a">Answer A</label>
    <input type="text" id="answer-a" bind:value={fields.answerA} />
    <div class="errors">{errors.answerA}</div>
  </div>
  <div class="form_field">
    <label for="answer-b">Answer B</label>
    <input type="text" id="answer-b" bind:value={fields.answerB} />
    <div class="errors">{errors.answerB}</div>
  </div>
  <Button type="secondary" flat={true}>Add Poll</Button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form_field {
    margin: 18px auto;
  }
  input {
    width: 100%;
    border-radius: 6px;
  }
  label {
    margin: 10px auto;
    text-align: left;
  }
  .errors {
    font-weight: 500;
    font-size: 12px;
    color: red;
  }
</style>
