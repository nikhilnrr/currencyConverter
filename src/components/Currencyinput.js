const CurrencyInput = ({amount, currency, currencies}) => {
    return(
        <div>
        <input value = {amount}/>
            <select value = {currency}>
                {currencies.map(currency =>(
                    <option value={currency}>{currency}</option>
                ))}
            </select>
        </div>
    )
}

export default CurrencyInput