import { render, defineEmits } from "vue";

export default defineComponent(
  (props, ctx) => {
    // const emit = defineEmits(["clickRect", "clickCircle"]);
    const clickMe = (type, payload) => {
      if (type === "rect") {
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
    }

    return () => {
      return (
        <>
          {props.model.type === "rect" && (
            <rect
              onClick={() => {
                return clickMe(props.model.type, props.model.id);
              }}
              width="20"
              height="10"
              x={rectValues.value.cx}
              y="50"
              fill={rectValues.value.color}
            />
          )}
          {props.model.type === "circle" && (
            <circle
              onClick={() => {
                return clickMe(props.model.type, props.model.id);
              }}
              r="20"
              cx={circleValues.value.cx}
              cy="50"
              fill={circleValues.value.color}
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
