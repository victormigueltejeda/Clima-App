//const API = `api.openweathermap.org/data/2.5/weather?q=${value}&appid=0b3bf3fc30d258ce078d8d4d862b7f1a`;

const getData = async (value) => {
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=0b3bf3fc30d258ce078d8d4d862b7f1a&lang=es`;
  const data = await fetch(API);
  const response = await data.json();
  return response;
};

export default getData;

//async function getData(value) {
//  const response = await fetch(urlAPI);
//  const data = await response.json();
//  return console.log(data);
//}
