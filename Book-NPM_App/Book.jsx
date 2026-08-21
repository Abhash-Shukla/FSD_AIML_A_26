function Book(props) {
  return (
    <div className="card">
      <img
        src={props.image}
        width="150px"
        height="200px"
        alt="Book"
      />
      <h2 style={{ color: "brown" }}>Price: ₹{props.price}</h2>
      <button>Add to Cart</button>
    </div>
  );
}
export default Book;