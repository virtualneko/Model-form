import { useState, useEffect } from 'react';

const Postapi = (url) => {
    const[datapost, setdatapost] = useState(null);
    const [ispendeing, setIsPneding] = useState(true);
    const [error, setError] = useState(null);
 
     useEffect(()=>{
         const abortCont = new AbortController();
 
         fetch(url,{method: 'POST',headers: {  'Content-Type': 'application/json','Authorization':'token 9307bfd5fa011428ff198bb37547f979'}}, {signal: abortCont.signal})
         .then(res => {
             if(!res.ok){
                 throw Error('could not fetch the data for that element');
             }
             return res.json();
         })
         .then(datapost => {
              setdatapost(datapost);
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
     return {datapost, ispendeing, error}
    }
 
export default Postapi;