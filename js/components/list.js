var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');

var List = function(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <Card text={props.cards}/>
            <Card text={props.cards}/>
            <Card text={props.cards}/>
        </div>
    );
};

module.exports = List;