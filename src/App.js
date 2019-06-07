import React from 'react';
import ListMovie from './components/tableList';
import {Provider} from 'react-redux';
import store from "./redux/listStore"
import './App.css';

function App() {
  return (
    <Provider  store={store}  >
         <div className="App">
           <ListMovie/>
       </div>

    </Provider>
 
  );
}

export default App;
