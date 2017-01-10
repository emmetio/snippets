'use strict';

const assert = require('assert');
const html = require('../html.json');
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
    it('html', () => {
        // simple check that every abbreviation can be expanded
        Object.keys(html).forEach(name => {
            assert.equal(check(html[name]), '', name);
        });
    });
});
