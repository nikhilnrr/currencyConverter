import {useState, currency, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import CurrencyInput from './components/Currencyinput';

const API_KEY = "d34d28eb114daf94d917ed075fc093f50"
const CURRENCY_API = `http://data.fixer.io/api/latest?access_key=d34d28eb114daf94d917ed075fc093f5`

function App() {
  const [amountOne, setAmountOne] = useState(1);
  const [amountTwo, setAmountTwo] = useState(2);
  const [currencyOne, setCurrencyOne] = useState("USD")
  const [currencyTwo, setCurrencyTwo] = useState("INR")

  const [currencyRates, setCurrencyRates] = useState([]);

  useEffect(() => {
    console.log(CURRENCY_API)
    axios.get(CURRENCY_API)
    .then((response) => setCurrencyRates(response.data.rates))
    .catch((err)=> {
      console.log(err);
      setCurrencyRates(null);
    });
    }, []);

    const handleAmountOneChange = (amountOne) => {
      setAmountTwo(amountOne * currencyRates[currencyTwo] / currencyRates[currencyOne])
      setAmountOne(amountOne);
    }
    
    const handleAmountTwoChange = (amountOne) => {
      setAmountOne(amountOne * currencyRates[currencyOne] / currencyRates[currencyTwo])
      setAmountTwo(amountTwo);
    }
    return (
    <div>
      <h1>Currency Converter</h1>
      <CurrencyInput value={amountOne} currency = {currencyOne} currencies={Object.keys(currencyRates)}/> {/*Array ma convert garna keys use garne */}
      <CurrencyInput value={amountTwo} currency = {currencyTwo} currencies={Object.keys(currencyRates)}/>
    </div>
    
      );
}

export default App;
