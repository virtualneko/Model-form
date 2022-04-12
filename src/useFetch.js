import { useState, useEffect } from 'react';

const useFetch = (url)=>{
    const[data, setData] = useState(null);
   const [ispendeing, setIsPneding] = useState(true);
   const [error, setError] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})
        .then(res => {
            if(!res.ok){
                throw Error('could not fetch the data for that element');
            }
            return res.json();
        })
        .then(data => {
             setData(data);
             setIsPneding(false);
             setError(null);
        })
        .catch(err =>{
            if (err.name === "AbortError"){
                console.log('fetch aborted')
            } else{
             setError(err.message);
             setIsPneding(false);
            }
        })
        
        return() => abortCont.abort();
    }, [url]);
    return {data, ispendeing, error}
}

export default useFetch;