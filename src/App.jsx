import React from 'react';
import './App.css';


function App() {
  return (
    <div className="page-container">

      <div className='up-container'>

      <div className='container'>

        <h1>Football Teams</h1>

        <div className='mid-container'>
          <form className='form'>
          <input></input>
          <input></input>
          <button>Add a Team</button>
          </form>
        </div>

        <div className='bottom-container'>

          <div className='logo'>
          <img src={ require('./real.png') } />
          </div>
        
         
          <div className='mid-writing'>
            <h4>Real Madrid</h4>
            <p>Votes</p>

          </div>

          <div>
            <button className='vote'>Vote</button>
          </div>

        </div>

        

      </div>

      <div className='right-container'>
          
          <div className='right-container-first'> 
          
          <img src={ require('./real.png') } />
          <div className='right-container-first-h-p'>
          <h4>Real Madrid</h4>
          <p>Votes</p>
          </div>
          
          
          </div>

      
          <div className='right-container-second'> 
          
            <img src={ require('./real.png') } />
            <div className='right-container-first-h-p-second'>
            <h4>Real Madrid</h4>
            <p>Votes</p>

          </div>
          
          
         




          
          
          </div>

         


      </div>


      </div>

    </div>
  )
}

export default App;
