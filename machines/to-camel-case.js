module.exports = {


  friendlyName: 'To camel-case',


  description: 'Convert a string to camel-case (varying capitalization instead of spaces/underscores/dashes).',


  extendedDescription: 'Returns a version of the string with dashes removed, using medial capitalization to separate words instead. See http://en.wikipedia.org/wiki/CamelCase for more information.',


  sync: true,


  sideEffects: 'cacheable',


  inputs: {

    string: {
      example: 'foo-bar-baz',
      description: 'The string to convert (dash-delimited or otherwise).',
      required: true
    }

  },


  exits: {

    success: {
      outputFriendlyName: 'Camel-cased string',
      outputDescription: 'The camel-cased version of the input string.',
      outputExample: 'fooBarBaz',
    }

  },


  fn: function (inputs, exits) {
    var _ = require('lodash');

    return exits.success(_.camelCase(inputs.string));
  }

};
