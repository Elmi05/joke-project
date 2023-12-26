function SingleJoke(props) {
  return (
    <div className="content">
      <h2 className="joke"> {props.data.joke}</h2>
    </div>
  );
}

export default SingleJoke;