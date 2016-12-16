var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list');

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
            <List title={props.lists[0]} cards="abc" onAddInputChanged={onAddInputChanged} onAddSubmit={onAddSubmit} />
            <List title={props.lists[1]} cards="def" onAddInputChanged={onAddInputChanged} onAddSubmit={onAddSubmit} />
            <List title={props.lists[2]} cards="ghi" onAddInputChanged={onAddInputChanged} onAddSubmit={onAddSubmit} />
        </div>
    );
};

module.exports = Board;