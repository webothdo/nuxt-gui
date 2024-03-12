export const useControlsStore = defineStore("controls", () => {
  const circleValue = ref({
    cx: {
      label: "cx",
      value: 100,
      type: "number",
    },
    cy: {
      label: "cy",
      value: 50,
      type: "number",
    },
    radius: {
      label: "radius",
      value: 45,
      type: "number",
    },
    color: {
      label: "color",
      value: "#fafafa",
      type: "color",
    },
  });

  return {
    circleValue,
  };
});

// const showControls = ref(false);
// const showSettings = ref(false);
// const showAbout = ref(false);
