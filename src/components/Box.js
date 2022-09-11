function Box(props) {
  const style = {
    backgroundColor: props.on ? "#222" : "transparent",
  };

  return (
    <div
      key={props.id}
      className="box"
      style={style}
      onClick={props.onClick}
    ></div>
  );
}

export default Box;
