describe('Routes', function () {
  'use strict';

  // set up chai, our assertation library
  var chai = require('chai')
    , expect = chai.expect;

  chai.Assertion.includeStack = true;

  var Route = require('../');

  [
    { route: '/404', matches: '/404' }
  , { route: '/foo', matches: '/foo' }
  , { route: '/foo/bar', matches: '/foo/bar' }
  , { route: '/foo/:bar', matches: '/foo/bar' }
  , { route: /^\/simpleregexp/, matches: '/simpleregexp' }
  , { route: /^\/foo\/(.*)/, matches: '/foo/complex' }
  , { route: '/^\\/(?<named>[\\d\\.]+)\\/foo/', matches: '/1.0.0/foo' }
  ].forEach(function generate(test) {
    it(test.route +' matches against '+ test.matches, function () {
      var r = new Route(test.route);

      expect(r.test(test.matches)).to.equal(true);
    });
  });
});
