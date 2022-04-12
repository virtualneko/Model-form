import Modelchooser from "./modelchooser";
import Model0 from "./models/model0";
import Model1 from "./models/model1";
import Model2 from "./models/model2";
import Model3 from "./models/model3";
import Navbar from "./navbar";
import History from "./history";
import HistoryDetails from "./historydetails";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {

  
  return (
    
      <Router>
        <div className=" min-h-screen h-14 bg-white">
          <Navbar/>
        <Routes>
          <Route exact path="/" element={<Modelchooser />}/>
          <Route exact path="/model0" element={<Model0/>}/>
          <Route exact path="/model1" element={<Model1/>}/>
          <Route exact path="/model2" element={<Model2/>}/>
          <Route exact path="/model3" element={<Model3/>}/>
          <Route exact path="/History" element={<History/>}/>
          <Route exact path="/data/:id" element={<HistoryDetails/>}/>
        </Routes>
        </div>
      </Router>
     
     
   
  );
}

export default App;