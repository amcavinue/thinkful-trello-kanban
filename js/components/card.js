var React = require('react');
var ReactDOM = require('react-dom');

var Card = function(props) {
    return (
        <div>
            {props.text}
        </div>
    );
};

module.exports = Card;