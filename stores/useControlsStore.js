export const useControlsStore = defineStore("controls", () => {
  const circleControl = ref([
    {
      label: "cx",
      value: 50,
      type: "number",
    },
    {
      label: "cy",
      value: 50,
      type: "number",
    },
    {
      label: "radius",
      value: 45,
      type: "number",
    },
    {
      label: "color",
      value: "#fafafa",
      type: "color",
    },
  ]);

  const updateControls = (value) => {};

  return {
    circleControl,
    updateControls,
  };
});

// const showControls = ref(false);
// const showSettings = ref(false);
// const showAbout = ref(false);
