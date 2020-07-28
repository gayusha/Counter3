import React, {useState} from 'react';
import Counter from "./Counter";

function App() {
    const [counters, setCounters] = useState([]);


    const addCounter = () => {
        const r = Math.round(Math.random() * 10);
        setCounters([...counters, r])

    }
    const deleteCounter = () => {
        const lastIndex = counters.length - 1;
        setCounters(counters.slice(0, lastIndex));
    }
    const deleteAll = () => {
        setCounters([])
    }
    const plusOne = (index) => {
        const newCountersPlus = [...counters];
        newCountersPlus[index]++;
        setCounters(newCountersPlus);
    }
    const minusOne = (index) => {
        const newCountersMinus = [...counters];
        newCountersMinus[index]--;
        setCounters(newCountersMinus);
    }
    const deleteCurrent = (index) => {
        // const arr1 = counters.slice(0, index);
        // const arr2 = counters.slice(index+1, counters.length-1);
        //setCounters([...arr1, ...arr2]);
        const arr = counters.filter((el, i) => i !== index)
        setCounters(arr);
    }
    const resetCurrent = (index) => {
        const arr1 = counters.map((el, i) => (i === index) ? 0 : el)
        setCounters(arr1);
    }

    const resetAll = () => {
        const arr2 = counters.map(el => 0);
        setCounters(arr2);
    }

    return (
        <div className="App">
            <br/>
            <strong>C O U N T E R - 3</strong>
            <br/>
            <hr/>
            {counters.map((el, i) => (
                <Counter count={el} key={i} index={i} plus={plusOne}
                         minus={minusOne} delete={deleteCurrent} reset={resetCurrent}/>
            ))}

            <br/>
            <button onClick={addCounter}>Add Counter</button>
            <button onClick={deleteCounter}>Delete Counter</button>
            <br/>
            <button onClick={resetAll}>Reset All</button>
            <button onClick={deleteAll}>Delete All</button>

        </div>
    );
}

export default App;
