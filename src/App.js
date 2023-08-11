import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import InputCity from "./Components/InputCity";
import ShowWeather from "./Components/ShowWeather";
import axios from "axios";
import "./styles.css";

const App = () => {
  let [inputCity, setInputCity] = useState("");
  let [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(false);
  const [count, setCount] = useState(0);

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY_WEATHER_APP}`;

  const inputHandler = (event) => {
    event.preventDefault();
    setError(false);
    setInputCity(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setError(false);
    setCityName(inputCity);
    // console.log(cityName);
  };

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        console.log(response);
        setWeatherData(response);
      })
      .catch((error) => {
        setError(error);
        setWeatherData({});
      });
  }, [URL]);

  return (
    <React.Fragment>
      <Header count={count}></Header>
      <div>{count}</div>
      <InputCity
        inputCity={inputCity}
        // cityName={cityName}
        // setCityName={setCityName}
        onInputHandler={inputHandler}
        onSubmitHandler={submitHandler}
        count={count}
        setCount={setCount}
      />
      {error ? (
        <div className="error">No Data Found</div>
      ) : (
        <ShowWeather data={weatherData} />
      )}
    </React.Fragment>
  );
};

export default App;
