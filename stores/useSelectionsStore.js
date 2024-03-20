export const useSelectionsStore = defineStore("selections", () => {
  const guiControl = ref({
    type: "",
    id: "",
  });
  const objectSelected = ref({});

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

  const getObjectSelected = (id, object) => {
    object.filter((el) => {
      if (el.id === id) {
        objectSelected.value = el;
        console.log(objectSelected.value);
      }
    });
  };

  return {
    guiControl,
    guiControlUpdate,
    objectSelected,
    getObjectSelected,
  };
});

// const showControls = ref(false);
// const showSettings = ref(false);
// const showAbout = ref(false);
