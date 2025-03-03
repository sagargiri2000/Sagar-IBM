
function showData(array) {

    array.forEach((el, index) => {
  
      let productBox = document.createElement("div");
      productBox.className = "product-box";
  
      let heading = document.createElement("h3");
      heading.innerText = el.category;
  
      let img = document.createElement("img");
      img.src = el.image;
  
      let name = document.createElement("p");
      name.innerText = el.name;
  
      let price = document.createElement("p");
      price.innerText = el.price;
  
      let rating = document.createElement("p");
      rating.innerText = el.rating;
  
      let button = document.createElement("button");
      button.innerText = "Add to Cart";
      button.addEventListener("click", () => {
        addtocart(el, index);
      });
  
      productBox.append(heading, img, name, price, rating, button);
  
      document.getElementById("products").append(productBox);
    });
  }
  
  let cart = [];
  function addtocart(el, index) {
  
    cart.push(el);
    localStorage.setItem("cartData", JSON.stringify(cart));
    console.log(cart);
    getData();
  }
  
  function getData() {
    let parsedData = JSON.parse(localStorage.getItem("cartData"));
  
    console.log(parsedData);
  }
  
  showData(data);
  
  