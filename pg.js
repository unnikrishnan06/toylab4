// constructor  
function ToyCar(model, color, price) {
    this.model = model;
    this.color = color;
    this.price = price;
}

// car object
let datsun = new ToyCar(
    "1972 Datsun 240Z",
    "Dark Blue",
    39.99
);
// Function 
function showCarInfo() {
    let box = document.getElementById("output");

    box.textContent =
        "Model: " + datsun.model + "\n" +
        "Color: " + datsun.color + "\n" +
        "Price: $" + datsun.price;
}
