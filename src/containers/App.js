import React, {Component} from 'react';
import '../assets/css/app.scss';
import Phone from './Phone';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Convert Numbers to T9</h1>
                </header>
                <Phone/>
            </div>
        );
    }
}

export default App;
