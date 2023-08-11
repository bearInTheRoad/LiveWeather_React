import React from "react";

const InputCity = ({ onInputHandler, onSubmitHandler, inputCity }) => {
  //   console.log(onInputHandler);
  return (
    <div className="input">
      <input
        onChange={onInputHandler}
        type="text"
        value={inputCity}
        placeholder="Input a city name"
      ></input>
      <button type="submit" className="input_btn" onClick={onSubmitHandler}>
        Submit
      </button>
    </div>
  );
};

export default InputCity;
