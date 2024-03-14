export const useSelectionsStore = defineStore("selections", () => {
  const guiControl = ref({
    type: "",
    id: "",
  });

  const guiControlUpdate = (type, id) => {
    if (guiControl.value.id === id) {
      console.log("Already selected", type, id);
      return guiControl.value;
    } else if (guiControl.value.id !== id) {
      guiControl.value = {
        type,
        id,
      };
      console.log("Selected", type, id);
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
