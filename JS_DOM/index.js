const data=[
    {image: "", price:"500/-"},
    {image:"",price:"600/-"}
]
function Book(props) {
  const child = document.createElement("div");
  child.setAttribute("class", "card");

  const image = document.createElement("img");
  image.setAttribute("src","book1.avif");
  image.setAttribute("width", "75px");
  image.setAttribute("height","75px");
  image.setAttribute("style", "display:block; margin:auto;");

  const price = document.createElement("h2");
  price.innerText = "Price: 500/-";  // corrected variable name

  child.appendChild(image);
  child.appendChild(price);

  const parent = document.getElementById("root");
  parent.appendChild(child);
}
function getBook(props){
    
}