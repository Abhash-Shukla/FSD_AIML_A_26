const data = [
  { Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiV33zdCSmHIj-run6wLo1AEn8aFfr_Zb399mT4M4sOw&s=10", price: "435/-" },
  { Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiV33zdCSmHIj-run6wLo1AEn8aFfr_Zb399mT4M4sOw&s=10", price: "560/-" }
];

function Book(props) {
  const image = React.createElement("img", {
    src: props.Image,
    width: "50px",
    height: "50px"
  });

  const h2 = React.createElement("h2", null, props.price);

  const child = React.createElement("div", { className: "card" }, [image, h2]);
  return child;
}

const booklist = React.createElement(
  "div",
  { className: "booklist" },
  data.map(b => Book(b)) 
);
const parent = document.getElementById("root");
ReactDOM.render(booklist, parent);
