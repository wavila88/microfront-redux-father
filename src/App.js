import React, {useState} from 'react';
import './App.css';
import { GlobalStore } from 'redux-micro-frontend';
import { globalObject } from './globalStore/objects/newGlobalObject'



function App(){

const [prueba, setPrueba] = useState(null);
    const globalStore = GlobalStore.Get();
    const getGLobal = () => {
        debugger
        const global = globalStore.GetGlobalState();
   /*     setPrueba(global.App1.micro1Global);*/
        console.log(global.App1.micro1Global);
    }

    const setGLobal = () => {
        debugger
        globalStore.DispatchGlobalAction('App1',globalObject);
        const global = globalStore.GetGlobalState();
        console.log(global.App1.micro1Global);
    }

  return (
    <div>
      <h1>Hellow from parent component </h1>
        <h1>GLOBAL OBJECT {prueba}</h1>
        <button onClick={getGLobal}>Get Global Store</button>
        <button onClick={setGLobal}>Set Global Store</button>
    </div>
  );
}

export default App;
