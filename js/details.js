let products = JSON.parse(localStorage.getItem("products"));
let productid = localStorage.getItem("productid");
let productdetails = products.find((item) => item.id == productid);
let productdom = document.querySelector(".item-details");

productdom.innerHTML = ` <img src="${productdetails.imageurl}" alt="">
<h2>${productdetails.price}</h2>
`;
