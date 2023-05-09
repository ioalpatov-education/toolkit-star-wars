import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { changeFilteredFacts } from "./store/slices/starWarsSlice";

const amountSchema = Yup.number().integer().min(1).max(5);

function App() {
  const [amount, setAmount] = useState(1);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const filteredFacts = useSelector((state) => state.starWars.filteredFacts);

  useEffect(() => {
    dispatch(changeFilteredFacts(amount));
  }, []);

  const changeHandler = (e) => {
    const value = e.target.value;

    try {
      amountSchema.validateSync(value);
      dispatch(changeFilteredFacts(value));
      setError(false);
    } catch (err) {
      setError(true);
      dispatch(changeFilteredFacts(0));
    }
    setAmount(value);
  };
  return (
    <div className="app">
      <header className="star-wars__header">
        <input
          onChange={changeHandler}
          type="number"
          name="amount"
          value={amount}
          id="star-wars-amount"
        />

        {error ? (
          <span className="error-text">Только цифры от 1 до 5</span>
        ) : null}
      </header>

      {!!filteredFacts.length ? (
        <ul>
          {filteredFacts.map((fact, factIdx) => {
            return <li key={factIdx}>{fact}</li>;
          })}
        </ul>
      ) : null}
    </div>
  );
}

export default App;
