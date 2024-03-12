export const useSelectionsStore = defineStore("selections", () => {
  const guiControl = ref("circle");

  const guiControlUpdate = (element) => {
    if (guiControl.value === element) {
      console.log("Already selected", element);
      return guiControl.value;
    } else if (guiControl.value !== element) {
      console.log("Selected", element);
      return (guiControl.value = element);
    }
  };

  return {
    guiControl,
    guiControlUpdate,
  };
});

// const showControls = ref(false);
// const showSettings = ref(false);
// const showAbout = ref(false);
