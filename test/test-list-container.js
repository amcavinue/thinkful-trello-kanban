var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var chai = require('chai');
var expect = chai.expect;

var List = require('../js/components/list');
var Card = require('../js/components/card');
var ListContainer = require('../js/components/list-container');

describe('ListContainer component', function() {
    it('Creates a list with state',  function() {
        var title = 'abc';
        
        var renderer = TestUtils.createRenderer();
        renderer.render(<ListContainer title={title} />);
        var result = renderer.getRenderOutput();
        
        // Test the component.
        TestUtils.isElementOfType(result, 'ListContainer');
        TestUtils.isElementOfType(result, 'List');
        TestUtils.isCompositeComponent(result);
        
        // Test the state.
        result.props.title.should.equal('abc');
        expect(result.props.cards).to.be.an('array');
        expect(result.props.cards.length).to.equal(0);
    });
});
