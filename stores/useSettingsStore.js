export const useSettingsStore = defineStore("settings", () => {
  const steps = ref(0);

  return {
    steps,
  };
});
