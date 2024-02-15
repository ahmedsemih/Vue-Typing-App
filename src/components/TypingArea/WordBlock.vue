<script setup>
import { useCountdownStore } from "@/stores/countdown";

const countdown = useCountdownStore();

defineProps({
  word: {
    type: String,
    required: true,
  },
  wordIndex: {
    type: Number,
    required: true,
  },
  userInput: {
    type: String,
    required: true,
  },
  userInputArray: {
    type: Array,
    required: true,
  },
  currentWord: {
    type: Number,
    required: true,
  },
  cursor: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div
    class="word"
    :class="{ wrongWord: word !== userInputArray[wordIndex] && wordIndex < currentWord }"
  >
    <span
      v-for="(letter, letterIndex) in word"
      :key="letterIndex"
      :class="{
        firstLetter: !countdown.isRunning,
        currentLetter: currentWord === wordIndex && cursor === letterIndex,
        letter:
          wordIndex > currentWord ||
          (wordIndex === currentWord && letterIndex >= cursor),
        lastLetter:
          letterIndex === word.length - 1 &&
          cursor === word.length &&
          currentWord === wordIndex,
        correct:
          (userInputArray[wordIndex] &&
            userInputArray[wordIndex][letterIndex] === letter) ||
          (wordIndex === currentWord &&
            letterIndex < cursor &&
            userInput[letterIndex] === letter),
        wrong:
          (userInputArray[wordIndex] &&
            userInputArray[wordIndex][letterIndex] !== letter) ||
          (wordIndex === currentWord &&
            letterIndex < cursor &&
            userInput[letterIndex] !== letter),
      }"
    >
      {{ letter }}
    </span>
  </div>
</template>

<style scoped>
.word {
  margin-right: 1rem;
}

.wrongWord {
  text-decoration: underline;
  text-decoration-color: red;
}
.letter {
  position: relative;
  color: var(--text-color);
}

.firstLetter::before {
  animation: blink 1s infinite;
}

.lastLetter::after {
  content: "";
  width: 2px;
  bottom: 0;
  right: -2px;
  height: 2rem;
  background-color: var(--primary-color);
  position: absolute;
}

.currentLetter::before {
  content: "";
  width: 2px;
  bottom: 0;
  left: -1px;
  height: 2rem;
  background-color: var(--primary-color);
  position: absolute;
}
.correct {
  color: var(--secondary-color);
  position: relative;
}

.wrong {
  color: red;
  position: relative;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
