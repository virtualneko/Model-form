
import GetModeldata from "./getmodeldata";

const Model1 = () => {
    const num = 1;

    return ( 
        <div>
             <div className="bg-gray-200 space-y-6 text-gray-700 item-center text-center p-50 mx-50">
                <h3 className="text-4xl font-bold underline">rules</h3>
                <div className="font-medium text-2xl p-5">
                <p>1. The inputs must be in the range of 1-4</p>
                </div>
            </div>
            {GetModeldata(num)}</div>
       
        
     );
}
export default Model1;