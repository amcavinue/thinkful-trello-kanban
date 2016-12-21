var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var chai = require('chai');
var expect = chai.expect;

var List = require('../js/components/list');
var Card = require('../js/components/card');
var ListContainer = require('../js/components/list-container');
var Board = require('../js/components/board');

describe('Board component', function() {
    it('Creates a board with lists',  function() {
        var title = 'abc';
        var lists = ['def', 'ghi', 'jkl'];
        
        var renderer = TestUtils.createRenderer();
        renderer.render(<Board title={title} lists={lists} />);
        var result = renderer.getRenderOutput();
        
        // Test the board component.
        TestUtils.isElementOfType(result, Board);
        TestUtils.isCompositeComponent(result);
        
        // Test the nested lists and title.
        expect(result.props.children.length).to.equal(4);
        expect(result.props.children[0].props.children).to.equal(title);
        
        expect(result.props.children[1].props.title).to.equal(lists[0]);
        TestUtils.isElementOfType(result.props.children[1], ListContainer);
        
        expect(result.props.children[2].props.title).to.equal(lists[1]);
        TestUtils.isElementOfType(result.props.children[2], ListContainer);
        
        expect(result.props.children[3].props.title).to.equal(lists[2]);
        TestUtils.isElementOfType(result.props.children[3], ListContainer);
    });
});