import { useEffect, useState } from "react";


function useData(currency) {
    
    const [data,setData] = useState({});
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`;        

    useEffect(() => {
        fetch(url).then((res) => {
            return res.json();
        }).then((res) => {
            setData(res[currency]);            
        });

    }, [currency]);

    return data;
   
}

export default useData;