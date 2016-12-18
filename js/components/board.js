var React = require('react');
var ReactDOM = require('react-dom');
var ListContainer = require('./list-container');

var Board = function(props) {
    function onAddInputChanged() {
        console.log('Input changed.');
    }
    
    function onAddSubmit() {
        console.log('Submitted.');
    }
    
    return (
        <div>
            <h1>{props.title}</h1>
            <ListContainer title={props.lists[0]} />
            <ListContainer title={props.lists[1]} />
            <ListContainer title={props.lists[2]} />
        </div>
    );
};

module.exports = Board;