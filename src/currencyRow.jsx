import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const CurrencyRow = ({ currencyOptions, selectedCurrency, onChangeCurrency, amount, onChangeAmount }) => {
    console.log(typeof (selectedCurrency))
    return (
        <>
            <input className='input' type="number" value={amount} onChange={onChangeAmount} />
            <select multiple={true} value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => (
                    <option key={uuidv4()} value={option}>{option}</option>
                ))}
            </select>
        </>
    )
}

export default CurrencyRow;