import {useEffect,useState} from "react"

function useCurrency(currency){
    const [data,setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            console.log(data);
    },[currency])
    console.log(data);
    return data
}
export default useCurrency;
 // https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json