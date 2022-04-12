import { useState} from "react";
import Getapi from "./getapi";
import {useNavigate} from 'react-router-dom';
const Modelchooser = () => { 
const [num,SetNum]= useState("2")
const {data, error, ispendeing} = Getapi('https://api.up2tom.com/v3/models')
const navigate = useNavigate();


const handleSubmit = event => { 
    event.preventDefault();
    navigate('/model'+num);
   
}
;


return ( 
    <div className="mt-60 text-grey-700 m-20 text-center">
        
        { error && <div>{ error }</div>}
        { ispendeing && <div>Loading...</div>}
        <form onSubmit={handleSubmit}>
            <label className=" font-bold h-20 pl-3 pr-6 text-4xl  appearance-none focus:shadow-outline  my-40 ">Choose a model</label>
            <select className="w-full my-20 h-20 pl-3 pr-6 text-4xl placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline text-center hover:bg-gray-200" onChange={(e) => {SetNum(e.target.value)} } defaultValue="default" required>
            <option value="default" disabled  >-- Select a Model --</option>
                <option  value="2">{data?.data[2].attributes.name} model</option>
                <option value="1">{data?.data[1].attributes.name} model</option>
                <option value="3">{data?.data[3].attributes.name} model</option>
                <option value="0">{data?.data[0].attributes.name} model</option>
            </select>
            
            <button type="submit" className="w-50 h-20 px-6  text-5xl text-indigo-100 transition-colors duration-150 bg-cyan-500 rounded-lg focus:shadow-outline hover:bg-sky-800">Go!</button>
        </form>
    </div>
 );
}
 
export default Modelchooser;