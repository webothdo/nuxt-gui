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
    circleState: {
      isActive: false,
      activeClass: "outline outline-fuchsia-500",
    },
  });

  const rectValue = ref({
    x: {
      label: "x",
      value: 10,
      type: "number",
    },
    y: {
      label: "y",
      value: 10,
      type: "number",
    },
    width: {
      label: "width",
      value: 200,
      type: "number",
    },
    height: {
      label: "height",
      value: 100,
      type: "number",
    },
    color: {
      label: "color",
      value: "#04AA6D",
      type: "color",
    },
    rectState: {
      isActive: false,
      activeClass: "outline outline-fuchsia-500",
    },
  });

  return {
    circleValue,
    rectValue,
  };
});

// const showControls = ref(false);
// const showSettings = ref(false);
// const showAbout = ref(false);
