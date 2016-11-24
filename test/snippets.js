'use strict';

const assert = require('assert');
const snippets = require('../');
const parse = require('@emmetio/abbreviation');

const check = abbr => {
    try {
        parse(abbr);
        return '';
    } catch (e) {
        return e.message;
    }
}

describe('Snippets', () => {
    it('check valid', () => {
        // simple check that every abbreviation can be expanded
        Object.keys(snippets).forEach(name => {
            assert.equal(check(snippets[name]), '', name);
        });
    });
});
