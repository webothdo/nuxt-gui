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

  const updateCircleValue = (value) => {
    circleValue.value = value;
    console.log("circleValue", circleValue.value);
  };

  const updateControls = (value) => {};

  return {
    circleValue,
    circleControl,
    updateCircleValue,
    updateControls,
  };
});

// const showControls = ref(false);
// const showSettings = ref(false);
// const showAbout = ref(false);
