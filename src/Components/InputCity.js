import React from "react";

const InputCity = ({
  onInputHandler,
  onSubmitHandler,
  inputCity,
  count,
  setCount,
}) => {
  //   console.log(onInputHandler);

  const addCounter = () => {
    setCount(count + 1);
  };
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
      <button type="submit" className="input_btn" onClick={addCounter}>
        Add
      </button>
    </div>
  );
};

export default InputCity;
