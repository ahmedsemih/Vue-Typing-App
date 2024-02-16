<script setup>
import {
  onBeforeMount,
  onMounted,
  onUnmounted,
  ref,
  watch,
  watchEffect,
} from "vue";

import WordBlock from "./WordBlock.vue";
import AreaWrapper from "./AreaWrapper.vue";
import RestartButton from "./RestartButton.vue";
import getRandomWords from "@/utils/getRandomWords";
import { useCountdownStore } from "@/stores/countdown";
import { useStatisticsStore } from "@/stores/statistics";

const statistics = useStatisticsStore();
const countdown = useCountdownStore();
const inputRef = ref(null);
const typingAreaRef = ref(null);

const cursor = ref(0);
const words = ref([]);
const endOfRows = ref([]);
const userInput = ref("");
const currentRow = ref(0);
const currentWord = ref(0);
const isWritable = ref(true);
const userInputArray = ref([]);

const MARGIN_WIDTH = 16;
const LETTER_WIDTH = 14.4;

const setWords = async () => {
  const randomWords = await getRandomWords();
  words.value.push(...randomWords);

  endOfRows.value = [];
  let length = 0;
  words.value.forEach((word, index) => {
    length += word.length * LETTER_WIDTH + MARGIN_WIDTH;

    if (length > 1000) {
      endOfRows.value.push(index - 1);
      length = 0;
      length += word.length * LETTER_WIDTH + MARGIN_WIDTH;
    }
  });
};

const handleClickArea = () => {
  inputRef.value.focus();
  isWritable.value = true;
};

const handleClickOutside = () => {
  countdown.stop();
};

const handleKeyPress = (e) => {
  if ((userInput.value === "" && currentWord.value === 0) || countdown.isPaused)
    countdown.start();

  if (e.key === "Backspace") handleBackspacePress();
  else handleOtherPress(e.key);
};

const handleBackspacePress = () => {
  if (userInput.value.length === 0) {
    if (currentWord.value === 0) return;

    if (currentWord.value - 1 === endOfRows.value[currentRow.value - 1]) {
      currentRow.value--;
      scrollByRow(currentRow.value);
    }

    currentWord.value--;
    cursor.value = words.value[currentWord.value].length;
    userInput.value = userInputArray.value[currentWord.value];
    userInputArray.value.pop();
  } else {
    userInput.value = userInput.value.slice(0, -1);
    cursor.value--;
  }
};

const handleOtherPress = (key) => {
  if (userInput.value.length === words.value[currentWord.value].length) {
    if (currentWord.value === endOfRows.value[currentRow.value]) {
      currentRow.value++;
      scrollByRow(currentRow.value - 1);
    }

    currentWord.value++;
    cursor.value = 0;
    userInputArray.value.push(userInput.value);
    userInput.value = "";
  } else {
    if (key === words.value[currentWord.value][cursor.value])
      statistics.increaseCorrectKeystrokes();
    else 
      statistics.increaseWrongKeystrokes();

    cursor.value++;
    userInput.value += key;
  }
};

const scrollByRow = (row) => {
  typingAreaRef.value.style = `translate: 0px -${row * 3}rem;`;
};

const restart = () => {
  countdown.reset();
  statistics.reset();

  words.value = [];
  cursor.value = 0;
  currentRow.value = 0;
  currentWord.value = 0;
  userInput.value = "";
  userInputArray.value = [];
  inputRef.value.focus();
  isWritable.value = true;
  
  setWords();
  statistics.setTime(countdown.initialTime);
};

const setStatistics = () => {
  if (countdown.time > 0) return;

  userInputArray.value.forEach((word, index) => {
    if (word !== userInputArray.value[index]) 
    statistics.increaseWrongWords();
  });

  statistics.save();
  countdown.reset();
};

onBeforeMount(() => setWords());
onMounted(() => {
  inputRef.value.focus();
  statistics.setTime(countdown.initialTime);
});
onUnmounted(() => setStatistics());

watch(() => countdown.initialTime, () => restart());
watchEffect(() => isWritable.value = !countdown.isPaused);
watchEffect(() => currentWord.value === words.value.length - 20 && setWords());
</script>

<template>
  <AreaWrapper :isWritable="isWritable">
    <div
      ref="typingAreaRef"
      v-click-outside="handleClickOutside"
      @click="handleClickArea"
      class="typing-area"
      :class="{ blur: !isWritable }"
    >
      <WordBlock
        v-for="(word, wordIndex) in words"
        :key="wordIndex"
        :word="word"
        :wordIndex="wordIndex"
        :userInput="userInput"
        :userInputArray="userInputArray"
        :currentWord="currentWord"
        :cursor="cursor"
      />
    </div>
  </AreaWrapper>
  <RestartButton @click-restart="restart" />
  <input
    ref="inputRef"
    class="invisible-input"
    type="text"
    @keydown="handleKeyPress"
  />
</template>

<style scoped>
.blur {
  filter: blur(4px);
  opacity: 0.4;
}

.typing-area {
  display: flex;
  flex-wrap: wrap;
  color: var(--text-color);
  border-radius: 0.5rem;
  font-size: 1.5rem;
  line-height: 3rem;
  translate: 0px;
  transition: all 200ms;
  cursor: pointer;
}

.invisible-input {
  background: none;
  border: none;
  outline: none;
  color: transparent;
  height: 0px;
}
</style>
