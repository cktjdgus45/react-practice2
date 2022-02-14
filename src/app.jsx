import React, { useEffect, useState } from 'react';
import CurrencyRow from './currencyRow';
import './app.css';

const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest';


function App() {
  const [currencyOptions, setcurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState([]);
  const [toCurrency, setToCurrency] = useState([]);
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?access_key=${process.env.REACT_APP_API_KEY}& base = ${fromCurrency}
      & symbols =${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency])

  useEffect(() => {
    fetch(`${BASE_URL}?access_key=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0];
        setcurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency])
      });
  }, [])

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }
  function handleTomountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow
        selectedCurrency={fromCurrency}
        currencyOptions={currencyOptions}
        onChangeCurrency={e => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
      />
      <div className='equal'>=</div>
      <CurrencyRow
        selectedCurrency={toCurrency}
        currencyOptions={currencyOptions}
        onChangeCurrency={e => setToCurrency(e.target.value)}
        onChangeAmount={handleTomountChange}
        amount={toAmount}
      />
    </>
  );
}

export default App;
