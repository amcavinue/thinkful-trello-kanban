var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var chai = require('chai');
var expect = chai.expect;

var List = require('../js/components/list');
var Card = require('../js/components/card');

describe('List component', function() {
    it('Renders a list with cards',  function() {
        var cards = ['abc', 'def', 'ghi'];
        var onAddInputChanged = function(input) {
            return true;
        };
        var onAddSubmit = function(input) {
            return true;
        };
        var formSubmit = function(e) {
            e.preventDefault();
            this.props.onAddSubmit();
            this.refs.textInput.value = "";
        };
        
        var renderer = TestUtils.createRenderer();
        renderer.render(<List title={'abc'} cards={cards} onAddInputChanged={onAddInputChanged} onAddSubmit={onAddSubmit} />);
        var result = renderer.getRenderOutput();
        
        // JSON.stringify is needed here because js won't
        // assert identical objects as equal.
        expect(JSON.stringify(result.props.children[0])).to.equal(
          JSON.stringify(<h2>abc</h2>)
        );
        
        expect(JSON.stringify(result.props.children[1])).to.equal(
          JSON.stringify(<Card text={'abc'}/>)
        );
        
        expect(JSON.stringify(result.props.children[2])).to.equal(
          JSON.stringify(<Card text={'def'}/>)
        );
        
        expect(JSON.stringify(result.props.children[3])).to.equal(
          JSON.stringify(<Card text={'ghi'}/>)
        );
        
        expect(JSON.stringify(result.props.children[4])).to.equal(
          JSON.stringify(
                <form onSubmit={formSubmit} >
                    <input type="text" name="text-input" onChange={onAddInputChanged} ref="textInput" />
                    <input type="submit" name="submit-button" /> 
                </form>
          )
        );
    });
});
