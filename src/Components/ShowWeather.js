import React from "react";

const DefaultLayout = ({ color, children }) => {
  return (
    <div className="showWeather">
      <header>
        <h3>---Here is the weather info---</h3>
      </header>
      <div style={{ backgroundColor: color }}>{children}</div>
      <footer>
        <p>---provided by openWeather--</p>
      </footer>
    </div>
  );
};

const bgColor = (temperature) => {
  console.log(temperature);
  if (temperature < 20) {
    return "#bbeafa";
  }
  if (temperature < 30) {
    return "#fcfa5b";
  }
  if (temperature >= 30) {
    return "#ff512f";
  }
  return "white";
};

// TODO: how to destructure the weatherData more elegant
const PreShowWeather = ({ weatherData }) => {
  console.log(weatherData);
  //   console.log(weatherData.data.data);

  const weatherInfo = weatherData.data ? weatherData.data : null;

  const country = weatherInfo.sys.country ? weatherInfo.sys.country : null;
  const city = weatherInfo.name ? weatherInfo.name : null;
  const description = weatherInfo.weather
    ? weatherInfo.weather[0].description
    : null;
  const temperature = weatherInfo.main.temp ? weatherInfo.main.temp : null;
  const pressure = weatherInfo.main.pressure
    ? (weatherInfo.main.pressure / 1000).toFixed(2)
    : null;
  const visibility = weatherInfo.visibility
    ? (weatherInfo.visibility / 1000).toFixed(2)
    : null;
  const humidity = weatherInfo.main.humidity ? weatherInfo.main.humidity : null;
  const clouds = weatherInfo.clouds.all ? weatherInfo.clouds.all : null;

  return (
    <React.Fragment>
      <h4 className="weather_heading">
        Location: {city}, {country}
      </h4>
      <p className="weatherData">Weather: {description}</p>
      <p className="temp">Temperature: {temperature}</p>
      <p className="weatherData">Pressure: {pressure}</p>
      <p className="weatherData">Visibility: {visibility}</p>
      <p className="weatherData">Humidity: {humidity}</p>
      <p className="weatherData">Clouds: {clouds}</p>
    </React.Fragment>
  );
};

const ShowWeather = (weatherData) => {
  console.log(weatherData.data); //这里不能直接用cod因为第一次加载的时候没有城市名字，也没有可以请求到的cod
  if (!weatherData.data || weatherData.data.cod !== 200) {
    return <div>Waiting to load weather</div>;
  }
  return (
    <React.Fragment>
      <DefaultLayout color={bgColor(weatherData.data.main.temp)}>
        <PreShowWeather weatherData={weatherData}></PreShowWeather>
      </DefaultLayout>
    </React.Fragment>
  );
};

export default ShowWeather;
