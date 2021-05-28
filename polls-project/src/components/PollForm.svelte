<script>
  let fields = { question: "", answerA: "", answerB: "" };

  const submitHandler = () => {
    console.log(fields);
  };
</script>

<form on:submit|preventDefault={submitHandler}>
  <div class="form_field">
    <label for="question">Question</label>
    <input type="text" id="question" bind:value={fields.question} />
  </div>
  <div class="form_field">
    <label for="answer-a">Answer A</label>
    <input type="text" id="answer-a" bind:value={fields.answerA} />
  </div>
  <div class="form_field">
    <label for="answer-b">Answer B</label>
    <input type="text" id="answer-b" value={fields.answerB} />
  </div>
  <button>Add Poll</button>
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
</style>
