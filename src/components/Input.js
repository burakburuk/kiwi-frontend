import React from 'react';
import '../assets/css/input.scss';

const Input = (props) => {
    const {handleKeyDown, value, handleClear, handleSend} = props;
    return (
        <div className="input-box">
            <input type="number" id="result" onChange={(e) => handleKeyDown(e)} value={value}/>
            <button onClick={handleClear}>
                <span>Clear</span>
            </button>
            <button onClick={handleSend}>
                <span>Send</span>
            </button>
        </div>
    )
};

export default Input;