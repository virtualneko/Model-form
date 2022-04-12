import { Link } from "react-router-dom";

const Datalist = ({data}) => {

    return ( 
        <div className="text-center item-center m-20">
            <h1 className="text-4xl font-bold m-20">History</h1>
            <hr/>
            {data.map((data) => (
                <div className="m-10 hover:shadow-md hover:bg-slate-50 rounded-lg" key={data.id}>
                    <Link to={`/data/${data.id}`}>
                    <h2 className="text-3xl font-bold">{data.title}</h2>
                    <p>Decision: {data.decision}</p>
                    </Link> 
                </div>
            ))}
            
        </div>
     );
}
 
export default Datalist;