export const useSettingsStore = defineStore("settings", () => {
  const steps = ref(1);
  const svgBackground = ref("#000000");

  const setSteps = () => {
    if (steps.value <= 0) {
      steps.value = 0.5;
    }
  };

  return {
    steps,
    svgBackground,
    setSteps,
  };
});
