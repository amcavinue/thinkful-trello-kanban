var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list');

var Board = function(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <List title={props.lists[0]} cards="abc"/>
            <List title={props.lists[1]} cards="def"/>
            <List title={props.lists[2]} cards="ghi"/>
        </div>
    );
};

module.exports = Board;