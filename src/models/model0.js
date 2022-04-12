import GetModeldata from "./getmodeldata";

const Model0 = () => {
    const num = 0;

    return ( 
        <div>
            <div className="bg-gray-200 space-y-6 text-gray-700 item-center text-center p-50 mx-50">
                <h3 className="text-4xl font-bold underline">rules:</h3>
                <div className="font-medium text-2xl p-5">
                <p>1. the the temperature must be in the range of -10.0-45.0</p>
                <p>2. age must be in the range of 1-90</p>
                <p>3. if gender is male the pregnancy must be NA</p>
                <p>4. if gender is female the pregnancy must be yes or no</p>
                <p>5. max number of drinks consumed per day and today has to be in the range of 0-20</p>
                </div>
            </div>
            {GetModeldata(num)}
        </div>
       
        
     );
}
export default Model0;