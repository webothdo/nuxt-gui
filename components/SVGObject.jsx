import { render, defineEmits } from "vue";

export default defineComponent(
  (props, ctx) => {
    // const emit = defineEmits(["clickRect", "clickCircle"]);
    const clickMe = (type, payload) => {
      if (type === "rect") {
        props.model.state.isActive = true;
        ctx.emit("clickRect", ["rect", payload]);
      } else if (type === "circle") {
        ctx.emit("clickCircle", ["circle", payload]);
      }
    };

    const rectValues = ref({});
    const circleValues = ref({});

    if (props.model.type === "rect") {
      props.model.control.forEach((element) => {
        rectValues.value[element.label] = element.value;
      });
    } else if (props.model.type === "circle") {
      props.model.control.forEach((element) => {
        circleValues.value[element.label] = element.value;
      });
      console.log(circleValues.value);
    }

    return () => {
      return (
        <>
          {props.model.type === "rect" && (
            <rect
              onClick={() => {
                return clickMe(props.model.type, props.model.id);
              }}
              x={props.model.control[0].value}
              y={props.model.control[1].value}
              width={props.model.control[2].value}
              height={props.model.control[3].value}
              fill={props.model.control[4].value}
              class={
                props.model.state.isActive ? "outline outline-lime-300" : ""
              }
            />
          )}
          {props.model.type === "circle" && (
            <circle
              onClick={() => {
                return clickMe(props.model.type, props.model.id);
              }}
              cx={props.model.control[0].value}
              cy={props.model.control[1].value}
              r={props.model.control[2].value}
              fill={props.model.control[3].value}
              class={
                props.model.state.isActive ? "outline outline-lime-300" : ""
              }
            />
          )}
        </>
      );
    };
  },
  {
    props: {
      model: Object,
    },
    emits: ["clickRect", "clickCircle"],
  }
);
