import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "React or Next",
    answerA: "React",
    answerB: "Next",
    votesA: 9,
    votesB: 10,
  },
]);

export default PollStore;

// store for sharing data
