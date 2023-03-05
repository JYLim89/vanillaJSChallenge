const weather = document.querySelector('.weather__weather');
const temperature = document.querySelector('.weater__temperature');
const city = document.querySelector('.weather__city')
const API_KEY = "9117a74a303e46f1920a37b2531c1db1";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    let urlParams = new URL(location.href).searchParams;
    let name = urlParams.get('name');

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        weather.innerText = `Climate: ${data.weather[0].main}`;
        temperature.innerText = `Temp: ${data.main.temp} °C`;
        greetingUser.innerText = `Hi!! ${name} You are in ${data.name}`;
      });
  }
  function onGeoError() {
    alert("Can't find you. No weather for you.");
  }
  
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
