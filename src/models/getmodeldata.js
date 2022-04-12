import Getapi from "../getapi";
import {useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

const GetModeldata = (num) => {
    const {data, error, ispendeing} = Getapi('https://api.up2tom.com/v3/models');
    const navigate = useNavigate();
    const [postData, setPostData] = useState({data: {type: "model", attributes: {input: {}}}})
    const title = data?.data[num].attributes.name
    const [decis, setDecis] = useState('');
    const [conf, setConf] = useState('');
    
    const back = event=> {
        navigate('/');
    }
    useEffect(()=>{ 
        console.log(decis)
        console.log(conf)
    },[decis])
    const postdata = event => {
        fetch('https://api.up2tom.com/v3/decision/'+data?.data[num].id, {
            method:'POST',
            headers:{ 'Authorization': 'Token 9307bfd5fa011428ff198bb37547f979'
                ,"Content-Type": "application/json"},
            body : JSON.stringify(postData)
        })
        .then((response) => {
            if (response.ok){
            return response.json()}
            else {alert('Read the rules to see if you are violating any of them, then try again');
            //navigate('/');
           throw new Error('Something went wrong');
            }
        })
        .then(response => {
            setDecis(response?.data.attributes.decision)
            setConf(response?.data.attributes["meets-confidence"])
            saveData(response?.data.attributes.decision, response?.data.attributes["meets-confidence"])
        },
         )
    }
    const saveData = (decision,confidence) =>{
        const saveData = {postData, decision ,confidence, title};
        
        

        fetch('http://localhost:8000/data', {
            method:'POST',
            headers:{ "Content-Type": "application/json"},
            body : JSON.stringify(saveData)
        }).then(() =>{
            console.log('new data saved');
        })
    }

    const submitHandler = event => {
        event.preventDefault();
        postdata();
        
    }

    const handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        const tempData = {...postData};
        tempData.data.attributes.input[name] = value;
        setPostData(tempData);
      }


    return ( 
        <div className="bg-white">
        { error && <div>{ error }</div>}
        { ispendeing && <div>Loading...</div>}
        
        <form onSubmit={submitHandler} className="space-y-6 text-gray-700 item-center text-center p-50 mx-50">
              <h2 className="text-4xl font-bold">{data?.data[num].attributes.name}</h2>

              <div className="relative z-0 mb-6 w-full group p-50 mx-50">
              <label className="block mb-2 text-2xl font-medium text-gray-900 dark:text-black" >{data?.data[num].attributes.metadata.prediction.question}</label>
              <select name={data?.data[num].attributes.metadata.prediction.name} onChange={handleInputChange} required className=" text-center bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 pl-20 mx-40 dark:bg-sky-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
              <option></option>
              {data?.data[num].attributes.metadata.prediction.domain.values.map(v => <option key={v} value={v} >{v}</option>)}
              </select>
              </div>
              {data?.data[num].attributes.metadata.attributes.map(a => (
                  <div key={a.name}>
                      <label className="block mb-2 text-2xl font-medium text-gray-900 dark:text-black">{a.question}</label>
                      {a.type === "Continuous" ?
                        <input type="number" name = {a.name} onChange={handleInputChange} required className="  text-center bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 mx-40 dark:bg-sky-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "/>
                      :
                      (a.type === "Nominal"?
                        <select name={a.name} onChange={handleInputChange} required className=" text-center bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 mx-40 dark:bg-sky-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "> 
                            <option></option>
                            {a.domain.values.map(v => <option key={v} value={v} >{v}</option>)}
                        </select>
                    :<span>{a.type}</span> )}
                  </div>))
              }
            <div className=" bg-gray-200">
                <p className="text-3xl font-bold">Decision: {decis}</p>
                <p className="text-3xl font-bold">Meets confidence: {(conf?.toString())}</p>
            </div>
            <button onClick={back} className="mx-30 p-10  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg pl-10 py-2.5 mr-2 mb-2 dark:bg-sky-400 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-blue-800">Back</button>
            <button type="submit" className=" mx-40 p-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg py-2.5 mr-2 mb-2 dark:bg-sky-400 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-blue-800">
                Submit
            </button>
        </form>
        
        </div>
        
     );
}
 
 
export default GetModeldata;