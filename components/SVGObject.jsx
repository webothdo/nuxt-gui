export default defineComponent({
  props: {
    model: Object,
  },
  render: (props) => {
    return (
      <>
        {props.model.type === "rect" && (
          <rect
            width="20"
            height="10"
            x={props.model.cx}
            y="50"
            fill={props.model.color}
          />
        )}
        {props.model.type === "circle" && (
          <circle r="20" cx={props.model.cx} cy="50" fill={props.model.color} />
        )}
      </>
    );
  },
});
