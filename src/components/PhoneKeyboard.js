import React from 'react';
import '../assets/css/phone-keyboard.scss';

const PhoneKeyboard = (props) => {
    const {handleClick} = props;
    return (
        <div className="phone-keyboard">
            <table id="phone">
                <tbody>
                <tr>
                    <td>
                        <button data-value="1" className="key" onClick={() => handleClick(1)}>1
                            <span>. , !</span>
                        </button>
                    </td>
                    <td>
                        <button data-value="2" className="key" onClick={() => handleClick(2)}>2
                            <span>a b c</span>
                        </button>
                    </td>
                    <td>
                        <button data-value="3" className="key" onClick={() => handleClick(3)}>3
                            <span>d e f</span>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button data-value="4" className="key" onClick={() => handleClick(4)}>4
                            <span>g h i</span>
                        </button>
                    </td>
                    <td>
                        <button data-value="5" className="key" onClick={() => handleClick(5)}>5
                            <span>j k l</span>
                        </button>
                    </td>
                    <td>
                        <button data-value="6" className="key" onClick={() => handleClick(6)}>6
                            <span>m n o</span>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button data-value="7" className="key" onClick={() => handleClick(7)}>7
                            <span>p q r s</span>
                        </button>
                    </td>
                    <td>
                        <button data-value="8" className="key" onClick={() => handleClick(8)}>8
                            <span>t u v</span>
                        </button>
                    </td>
                    <td>
                        <button data-value="9" className="key" onClick={() => handleClick(9)}>9
                            <span>w x y z</span>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button data-value="*" className="key" onClick={() => handleClick("*")}>*</button>
                    </td>
                    <td>
                        <button data-value="0" className="key" onClick={() => handleClick(0)}>0</button>
                    </td>
                    <td>
                        <button data-value="#" className="key" onClick={() => handleClick("#")}>#</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
};

export default PhoneKeyboard;