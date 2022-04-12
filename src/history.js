import Datalist from './datalist';
import useFetch from './useFetch';

const History = () => {
    const {data, ispendeing, error} = useFetch('http://localhost:8000/data');
    
    return ( 
        <div className="item-center">
            { error && <div>{ error }</div>}
            { ispendeing && <div>Loading...</div>}
            {data &&<Datalist data={data} />}
        </div>
     );
}
 
export default History;