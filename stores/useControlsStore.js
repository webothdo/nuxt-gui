import randomId from "~/utils/randomId";
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

  const objectValue = ref([
    {
      id: 22,
      type: "rect",
      control: [
        {
          label: "x",
          value: 102,
          type: "number",
        },
        {
          label: "y",
          value: 50,
          type: "number",
        },
        {
          label: "width",
          value: 45,
          type: "number",
        },
        {
          label: "height",
          value: 45,
          type: "number",
        },
        {
          label: "color",
          value: "#fafafa",
          type: "color",
        },
      ],
      state: {
        isActive: false,
        activeClass: "outline outline-fuchsia-500",
      },
    },
    {
      id: 245,
      type: "circle",
      control: [
        {
          label: "cx",
          value: 103,
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
          value: "#15D515",
          type: "color",
        },
      ],
      state: {
        isActive: false,
        activeClass: "outline outline-fuchsia-500",
      },
    },
  ]);

  const createCircle = () => {
    let rando = randomId();
    objectValue.value.push({
      id: rando,
      type: "circle",
      control: [
        {
          label: "cx",
          value: 103,
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
          value: "#15D515",
          type: "color",
        },
      ],
    });
  };

  const createRect = () => {
    let rando = randomId();
    objectValue.value.push({
      id: rando,
      type: "rect",
      control: [
        {
          label: "x",
          value: 102,
          type: "number",
        },
        {
          label: "y",
          value: 50,
          type: "number",
        },
        {
          label: "width",
          value: 45,
          type: "number",
        },
        {
          label: "height",
          value: 45,
          type: "number",
        },
        {
          label: "color",
          value: "#fafafa",
          type: "color",
        },
      ],
    });
  };

  const updateObjectValue = (value, payload) => {
    // const findItem = objectValue.value.findIndex((item) => item.id === value);
    // console.log(findItem);
    // if (findItem) {
    //   objectValue.value[findItem].control = payload;
    //   console.log(objectValue.value);
    // findItem.control = payload;
    // console.log("findItem", objectValue.value);
    // payload.map((el) => {
    //   const findControl = objectValue.value.findIndex((arr) => arr.control);
    //   console.log("findControll", findControl);
    // });
    // }
    // if (findItem) {
    //   findItem.control = value.control.map((control) => {
    //     const findControl = findItem.control.find(
    //       (item) => item.label === control.label
    //     );
    //     if (findControl) {
    //       return { ...findControl, value: control.value };
    //     }
    //     return control;
    //   });
    // }
  };

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
    objectValue,
    createCircle,
    createRect,
    rectValue,
  };
});

// const showControls = ref(false);
// const showSettings = ref(false);
// const showAbout = ref(false);
