import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user : 'visitor'
        }
    }
    render() {
        return <div>
            <h1>Hello, {this.state.user}!</h1>
            <button onClick={()=> this.setState({user:"JinaKim"})}>I Know your Name!</button>
            </div>;
    }
}

ReactDOM.render(
    <Counter/>,
    document.getElementById('root')
);