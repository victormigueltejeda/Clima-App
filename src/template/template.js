import getData from "../util/getData.js";

const Template = async (value) => {
  const data = await getData(value);
  const view = `
  <div class="cart">
    <p class= "cart__parrafo">
      ${data.name}
      <span class="cart__parrafo--country" >${data.sys.country}</span>
    </p>
    <h2 class="cart__titulo--temp">${Math.round(
      data.main.temp
    )}<span>°C</span></h2>
    <img src="https://openweathermap.org/img/wn/${
      data.weather[0].icon
    }@2x.png" alt="">
    <p>${data.weather[0].description}</p>
  </div>
  `;
  return view;
};

export default Template;
