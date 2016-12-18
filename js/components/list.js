var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');

var List = React.createClass({
    getInitialState: function() {
        return {};
    },
    formSubmit: function(e) {
        e.preventDefault();
        this.props.onAddSubmit();
        this.refs.textInput.value = "";
    },
    onAddInputChanged: function() {
        this.props.onAddInputChanged(this.refs.textInput);
    },
    render: function() {
        return  <div>
                    <h2>{this.props.title}</h2>
                    <Card text={this.props.cards[0]}/>
                    <Card text={this.props.cards[1]}/>
                    <Card text={this.props.cards[2]}/>
                    <form onSubmit={this.formSubmit} >
                        <input type="text" name="text-input" onChange={this.onAddInputChanged} ref="textInput" />
                        <input type="submit" name="submit-button" /> 
                    </form>
                </div>;
    }
});

module.exports = List;