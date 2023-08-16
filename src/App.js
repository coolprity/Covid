
import './App.css';
import { useState, useEffect } from 'react'
import Data from './Data.js';


const Api = 'https://data.covid19india.org/v4/min/data.min.json';
function App() {
  const [apiData, setApiData] = useState([]);
  const [curState, setCurState] = useState('');
   

  
  useEffect(() => {
    FetchApi();
  }, []);

  
  const FetchApi=async() => {
    const data = await fetch(Api);
    const res = await data.json();
    // console.log(Object.values(res).districts);
    // console.log(Object.entries(res));
    
    // console.log(res.UP.districts.Agra.delta.vaccinated1);
    setApiData(res)
    // console.log(Object.keys(res))
  }

  

  return (
    <div>
      <Data apidata={apiData} setCurrState={setCurState } currState={curState} />
    </div>
  );
}

export default App;
