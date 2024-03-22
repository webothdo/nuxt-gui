export const useSettingsStore = defineStore("settings", () => {
  const steps = ref(0);
  const svgBackground = ref("#000000");

  return {
    steps,
    svgBackground,
  };
});
