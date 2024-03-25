let products = {
    data: [
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "https://5.imimg.com/data5/IN/EK/BA/SELLER-30607000/plain-white-t-shirts-500x500.jpg",
      },
      {
        productName: "Beige Short Skirt",
        category: "Bottomwear",
        price: "49",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.asos.com%2Fcottonon%2Fcotton-on-micro-pleated-mini-skirt-in-beige%2Fprd%2F204428117&psig=AOvVaw21y2EIMsTWNDFYoUx0b1VB&ust=1711475030656000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCY-rv7j4UDFQAAAAAdAAAAABAQ",
      },
      {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.fastrack.in%2Fdw%2Fimage%2Fv2%2FBKDD_PRD%2Fon%2Fdemandware.static%2F-%2FSites-titan-master-catalog%2Fdefault%2Fdw683aef51%2Fimages%2FFastrack%2FCatalog%2F38102PP03_1.jpg%3Fsw%3D800%26sh%3D800&tbnid=8BhpavmSnu__DM&vet=12ahUKEwiM7tey-4-FAxWzhGMGHUORCQoQMygAegQIARBb..i&imgrefurl=https%3A%2F%2Fwww.fastrack.in%2Fproduct%2Ffastrack-rogue-smart-watch-unisex-with-black-colour-silicone-strap-38102pp01.html%3Flang%3Den_IN&docid=zoECitJ00trNpM&w=800&h=800&q=Sporty%20SmartWatch&ved=2ahUKEwiM7tey-4-FAxWzhGMGHUORCQoQMygAegQIARBb",
      },
      {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "29",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F34%2F8d%2F3d%2F348d3d5cc199ce303ed440332570fe43.jpg&tbnid=Lc0LPA4X-PbREM&vet=12ahUKEwjQ24un-4-FAxXc9zgGHZzlCkAQMygFegQIARBc..i&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F530932243565685872%2F&docid=ziTfLfYdOAjeHM&w=491&h=673&q=Basic%20Knitted%20Top&ved=2ahUKEwjQ24un-4-FAxXc9zgGHZzlCkAQMygFegQIARBc",
      },
      {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-cdn.ubuy.co.in%2F6538ae5305ff1732e9102635-blingsoul-genuine-black-leather-jacket.jpg&tbnid=qe5dlvQewfTAkM&vet=12ahUKEwihxK-b-4-FAxX2-zgGHQGkCkoQMygAegQIARBx..i&imgrefurl=https%3A%2F%2Fwww.ubuy.com.lk%2Fen%2Fproduct%2F2C7RPXT2-genuine-black-leather-jacket-men-lambskin-lightweight-mens-leather-jackets&docid=zvakAWzRAaYGgM&w=1158&h=1500&itg=1&q=Black%20Leather%20Jacket&ved=2ahUKEwihxK-b-4-FAxX2-zgGHQGkCkoQMygAegQIARBx",
      },
      {
        productName: "Stylish Pink Trousers",
        category: "Bottomwear",
        price: "89",
        image: "https://www.google.com/imgres?imgurl=http%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2023%2F9%2F345982954%2FXJ%2FCA%2FEV%2F964675%2F1-500x500.jpg&tbnid=tltzMD3D_OAFSM&vet=12ahUKEwiq8KqN-4-FAxU4-jgGHaDlCyQQMygDegQIARBT..i&imgrefurl=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2Fponte-roma-pink-pants-for-women-stylish-and-comfortable-wardrobe-essential-2852514370862.html&docid=0_K5MHWyJ845vM&w=375&h=500&q=Stylish%20Pink%20Trousers&ved=2ahUKEwiq8KqN-4-FAxU4-jgGHaDlCyQQMygDegQIARBT",
      },
      {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71TBbWD8AmL._AC_SL1500_.jpg&tbnid=mLJDfXRDufwXcM&vet=12ahUKEwjIv7KA-4-FAxW4hWMGHeddAJEQMygAegQIARBT..i&imgrefurl=https%3A%2F%2Fwww.ubuy.com.lk%2Fen%2Fproduct%2F21I8D7TC-blingsoul-real-lambskin-brown-leather-jacket-for-men-1100374-wick-l&docid=tbI09GNqhTVmGM&w=1203&h=1500&q=Brown%20Men%27s%20Jacket&ved=2ahUKEwjIv7KA-4-FAxW4hWMGHeddAJEQMygAegQIARBT",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.onudesignerwear.com%2Fimages%2Fcp-company-diagonal-raised-fleece-lens-sweat-pant-grey-m93-p3825-7536_zoom.jpg&tbnid=20hhn7j3TTlOGM&vet=12ahUKEwjOp8Dp-o-FAxVjzDgGHdg7DLwQMygRegUIARCCAQ..i&imgrefurl=https%3A%2F%2Fwww.onudesignerwear.com%2Fmen-c1%2Fclothing-c69%2Ftracksuit-bottoms-c23%2Fcp-company-diagonal-raised-fleece-lens-sweat-pant-grey-m93-p3825&docid=Dg9xk4BLQrO8ZM&w=2000&h=2000&q=compy%20grey%20pants&ved=2ahUKEwjOp8Dp-o-FAxVjzDgGHdg7DLwQMygRegUIARCCAQ",
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };