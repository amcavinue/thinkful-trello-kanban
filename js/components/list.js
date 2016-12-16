var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');

var List = function(props) {
    function formSubmit(e) {
        e.preventDefault();
        props.onAddSubmit();
    }
    
    return (
        <div>
            <h2>{props.title}</h2>
            <Card text={props.cards}/>
            <Card text={props.cards}/>
            <Card text={props.cards}/>
            <form onSubmit={formSubmit} >
                <input type="text" name="text-input" onChange={props.onAddInputChanged} />
                <input type="submit" name="submit-button" /> 
            </form>
        </div>
    );
};

module.exports = List;