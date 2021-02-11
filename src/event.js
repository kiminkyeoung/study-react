import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function clickEvent(event) {
    event.preventDefault();
    console.log("test");
}

ReactDOM.render(import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.add = this.add.bind(this);
        this.minus=this.minus.bind(this);
    }

    add() {
        this.setState(state => ({
            value: state.value + 1
        }));
    }

    minus() {
        this.setState(state => ({
            value: state.value - 1
        }));
    }

    render() {
        return (
            <div>
                <p>현재 값 : {this.state.value}</p>
                <button onClick={this.add}>+</button>
                <button onClick={this.minus}>-</button>
            </div>
        )
    }
}

ReactDOM.render(
    <Calc/>,
    document.getElementById('root')
);
    <a href="#" onClick={clickEvent}>Click Me!</a>,
    document.getElementById('root')
);