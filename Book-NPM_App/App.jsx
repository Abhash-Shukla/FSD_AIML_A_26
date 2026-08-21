import Book from "./Book";
const bookdata = [
  { image: "https://d2sofvawe08yqg.cloudfront.net/reactjs-documentation-pdf/s_hero?1620645510&1620645510", price: 456 },
  { image: "https://reactz2h.com/img/cover.png", price: 567 },
  { image: "https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UF1000,1000_QL80_.jpg", price: 435 },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCCl-sC_AoERgzmULcAXFcD5ZBXvqYoLcUhO8RmGGLfmL499cVwYgeSf0&s=10", price: 345 }
];
function App() {
  return (
    <div className="app">
      {bookdata.map((b, index) => (
        <Book key={index} image={b.image} price={b.price} />
      ))}
    </div>
  );
}
export default App;