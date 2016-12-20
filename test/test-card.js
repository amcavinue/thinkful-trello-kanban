var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Card = require('../js/components/card');

describe('Card component', function() {
    it('Renders a single card',  function() {
        var renderer = TestUtils.createRenderer();
        renderer.render(<Card text={'abc'} />);
        var result = renderer.getRenderOutput();
        result.props.children.should.equal('abc');
    });
});
