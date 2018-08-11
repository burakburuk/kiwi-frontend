import React from 'react';
import '../assets/css/result.scss';

const Result = (props) => {
    const {value} = props;
    return (
        <div className="result-box">
            <p>Result</p>
            <textarea cols="35" rows="10" value={value}></textarea>
        </div>
    )
};

export default Result;