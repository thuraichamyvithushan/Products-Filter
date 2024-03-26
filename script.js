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
        image: "https://www.dior.com/couture/ecommerce/media/catalog/product/0/c/1687798340_351J33A3332_X1700_E01_ZHC.jpg",
      },
      {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "https://lifemobile.lk/wp-content/uploads/2023/08/green-Lion-1.jpg",
      },
      {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "29",
        image: "https://i.pinimg.com/originals/34/8d/3d/348d3d5cc199ce303ed440332570fe43.jpg",
      },
      {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "https://m.media-amazon.com/images/I/71EaM-f+LHL._AC_UY1100_.jpg",
      },
      {
        productName: "Stylish Pink Trousers",
        category: "Bottomwear",
        price: "89",
        image: "https://allyfashion.com/cdn/shop/products/bt8533-47p_hot_pink_2.jpg?v=1682983783",
      },
      {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjyCAHNW1Ysg62NLgflbFCUlJ00Vab9syvtTpoNW0ebQ&s",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "https://target.scene7.com/is/image/Target/GUEST_ebc08b59-4b23-4088-9d60-2fc65026e1a0?wid=488&hei=488&fmt=pjpeg",
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