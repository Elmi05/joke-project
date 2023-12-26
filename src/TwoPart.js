function TwoPart(props) {
  return (
    <div className="content">
      <h2 className="joke"> {props.data.setup}</h2>
      <h2 className="punch-line"> {props.data.delivery}</h2>
    </div>
  );
}

export default TwoPart;
