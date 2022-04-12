import { useNavigate, useParams } from "react-router-dom";
import useFetch from './useFetch';

const HistoryDetails = () => {
    const {id} = useParams();
    const{data, error, isPending} = useFetch('http://localhost:8000/data/'+id);
    const navigate = useNavigate();
    
    const handleClick = () =>{
        fetch('http://localhost:8000/data/'+data.id, {
            method:'DELETE'
        }).then(() => {
            navigate('/history');
        })
    };
    
    const handleback = () =>{
            navigate('/history');
    };     
    
    
    
    return ( 
        <div className="ml-96">
        <div className="text-center item-center m-20 w-1/2">
        { isPending && <div>Loading...</div>}
        { error && <div>{error}</div>}
        {data && (
            <article className="border-double border-4 border-sky-500 rounded-lg">
                <h2 className="text-5xl font-bold m-15">{data.title}</h2>
                <hr/>
                <div className="text-2xl mb-10">
                    {Object.keys(data?.postData.data.attributes.input).map((item, i) => (
                        <p className="m-5 " key={i}>
                            <span className="input-label">INPUTVAR{i} answer: {data?.postData.data.attributes.input[item]}</span>
                        </p>
                    ))}
                    <p>decision: {data?.decision}</p>
                    <p>Meets confidence: {data?.confidence.toString()}</p>
                </div>
                <button onClick={handleback} className="mx-30 p-10  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg pl-10 py-2.5 mr-2 mb-2 dark:bg-sky-400 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-blue-800">Back</button>
                <button onClick={handleClick} className="mx-30 p-10  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg pl-10 py-2.5 mr-2 mb-2 dark:bg-sky-400 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-blue-800">delete</button>
            </article>
        )}
    </div>
    </div>
    );
}
 
export default HistoryDetails;