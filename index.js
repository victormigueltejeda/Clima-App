import Template from "./src/template/template.js";

const input = document.querySelector("#input");
input.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    return climInfo();
  }
});

const button = document.querySelector("#button");
button.addEventListener("click", climInfo);

const cart = document.querySelector("#cart");

async function climInfo() {
  cart.innerHTML = await Template(input.value);
}
