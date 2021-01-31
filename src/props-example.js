import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class HelloWorld extends React.Component {
//     render() {
//         return <h1>Hello, world!</h1>;
//     }
// }
function FunctionHelloWorld(obj) {
    console.log(obj);
    return <h1>Hello, {obj.lastname}{obj.name}</h1>;
}

ReactDOM.render(
    <FunctionHelloWorld name="JiNa" lastname="kim" />,
    document.getElementById('roo')
);