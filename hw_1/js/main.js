products = [
    {
        name: "Oranges",
        price: "3$",
        id: 123
    },
    {
        name: "Cucumbers",
        price: "2$",
        id: 134
    },
    {
        name: "Tomatoes",
        price: "1,7$",
        id: 231
    },
    {
        name: "Celery",
        price: "2,3$",
        id: 135
    },
    {
        name: "Strawberry",
        price: "3,1$",
        id: 423
    },
    {
        name: "Asparagus",
        price: "3,4$",
        id: 563
    },
    {
        name: "Apples",
        price: "0,5$",
        id: 231
    },
    {
        name: "Bananas",
        price: "1$",
        id: 309
    },
    {
        name: "Cabbage",
        price: "2,1$",
        id: 311
    },
]

var wrapper = document.createElement("div");
wrapper.className = ("wrap");

for (var i = 0; i < products.length; i++) {
    creator(products[i]);
};

var container = document.getElementById("container");
container.appendChild(wrapper);

function creator(product) {
    var newDiv = document.createElement("div");
    newDiv.className = ("element");
    newDiv.id = product.id;

    var newName = document.createElement("h2");
    var newPrice = document.createElement("p");
    var newLink = document.createElement("a");
    newName.innerText = product.name;
    newPrice.innerText = product.price;
    newLink.innerText = "More";
    newLink.setAttribute('href', '#' + product.id);

    newDiv.appendChild(newName);
    newDiv.appendChild(newPrice);
    newDiv.appendChild(newLink);
    wrapper.appendChild(newDiv);
    newLink.addEventListener("click", function (e) {
        alert(e.target.hash);

    });
}
