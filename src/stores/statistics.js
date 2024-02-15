import { defineStore } from "pinia";

export const useStatisticsStore = defineStore("statistics", {
  state: () => {
    const bestPerformances = JSON.parse(localStorage.getItem("bestPerformances")) || [];

    return {
      correctKeystrokes: 0,
      wrongKeystrokes: 0,
      wrongWords: 0,
      time: 0,
      bestPerformances,
    };
  },
  getters: {
    result() {
      return {
        wpm: (this.correctKeystrokes / 5 - this.wrongWords) / (this.time / 60) || 0,
        accuracy: (this.correctKeystrokes / (this.correctKeystrokes + this.wrongKeystrokes)) * 100 || 0,
        correctKeystrokes: this.correctKeystrokes,
        wrongKeystrokes: this.wrongKeystrokes,
        time: this.time,
      };
    },
  },
  actions: {
    setTime(time) {
      this.time = time;
    },
    increaseCorrectKeystrokes() {
      this.correctKeystrokes++;
    },
    increaseWrongKeystrokes() {
      this.wrongKeystrokes++;
    },
    increaseWrongWords() {
      this.wrongWords++;
    },
    reset() {
      this.correctKeystrokes = 0;
      this.wrongKeystrokes = 0;
      this.time = 0;
      this.wrongWords = 0;
    },
    save() {
      let bestPerformances = JSON.parse(localStorage.getItem("bestPerformances")) || [];
      bestPerformances.push(this.result);

      const sortedPerformances = bestPerformances.sort(
        (a, b) => Number(b.wpm) > Number(a.wpm)
      );

      bestPerformances = sortedPerformances.slice(0, 5);
      localStorage.setItem("bestPerformances", JSON.stringify(bestPerformances));
    },
  },
});
