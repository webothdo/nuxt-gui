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
              x={props.model.cx}
              y="50"
              fill={props.model.color}
            />
          )}
          {props.model.type === "circle" && (
            <circle
              onClick={() => {
                return clickMe(props.model.type, props.model.id);
              }}
              r="20"
              cx={props.model.cx}
              cy="50"
              fill={props.model.color}
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
