import { defineStore } from "pinia";

export const useCountdownStore = defineStore("countdown", {
  state: () => {
    const initialTime = Number(localStorage.getItem("initialTime")) || 60;

    return {
      initialTime,
      time: initialTime,
      isRunning: false,
      interval: null,
    };
  },
  actions: {
    setInitialTime(time) {
      this.initialTime = time;
      this.time = time;
      localStorage.setItem("initialTime", time);
    },
    start() {
      this.clearInterval();
      this.isRunning = true;
      this.interval = setInterval(this.decrementTime, 1000);
    },
    stop() {
      this.clearInterval();
      this.isRunning = false;
    },
    reset() {
      this.stop();
      this.time = this.initialTime;
    },
    decrementTime() {
      if (this.time > 0) this.time--;
      else this.stop();
    },
    clearInterval() {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }
    },
  },
  getters: {
    isPaused() {
      return this.time !== this.initialTime && !this.isRunning;
    },
  },
});
