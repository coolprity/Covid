import { useState } from 'react';

const Data = ({apidata,setCurrState,currState }) => {
const stateValue = (e) => {
    setCurrState(e.target.value);
    // console.log(e.target.value);
  }
  
  const [currDist, setCurrDist] = useState('');

  const HandleDistChange = (e) => {
    setCurrDist(e.target.value);
    console.log(e.target.value);
  }

  //console.log(apidata, apidata[currState]?.districts[currDist]?.total?.vaccinated2);
  //console.log(Object.keys(apidata[currState]?.districts[currDist]?.total?.vaccinated2))
  console.log(apidata,"apidata")
  
  
  return (
    <>
      <div class='main-container'>
        <div>
          <select onChange={stateValue} >
          <option> -----------Please Select-----------</option>
            
            {Object.keys(apidata).map(curr => {
              
              return (
                  <option value={curr} >{curr}</option>
               )
            })}
              
          </select>
      <select onChange={HandleDistChange}>
            <option>-----------Please select-----------</option>
            
            {apidata[currState] && Object.keys(apidata[currState]?.districts)?.map(el => {
              return <option value={el}>{el}</option>
            })}
      </select>
      <div class='content'>
            <div class='box'>
              <h2>vaccination1</h2>
              <p>{apidata[currState] && apidata[currDist] && Object.keys(apidata[currState]?.districts[currDist]?.total)?.vaccinated2}</p>
              


            </div>
            <div class='box'>
              <h2>vaccinated2</h2>
              

              
            </div>
        <div class='box'><h2>Total Population</h2></div>
        <div class='box'><h2>Total vaccination</h2></div>
            
        <div class='box'><h2>Total Death</h2></div>
        <div class='box'><h2>Confirmed Case</h2></div>
        <div class='box'><h2>Total Recovered </h2></div>
    </div>
        </div>
  </div>

    
  </>
  )
}

export default Data