import React from 'react';


function Counter(props) {
    return (
        <div>
            {/*({props.index})*/}
            <button onClick={() => props.minus(props.index)}>-</button>
            {props.count}
            <button onClick={() => props.plus(props.index)}>+</button>
            <button onClick={() => props.delete(props.index)}>x</button>
            <button onClick={() => props.reset(props.index)}>o</button>
        </div>
    );
}

export default Counter;
