import {expect} from 'chai';
import * as XRegExp from 'xregexp';
import * as regex from '../../index';

describe("vamtiger-regex-leading-dash: regex.default", function () {
    it("should match a leading dashes", async function () {
        const input = '--leadingDashes',
            match: regex.Match = XRegExp.exec(input, regex.default);

        expect(match).to.be.ok;
        expect(match.dash).to.be.ok;

        expect(match.dash).to.equal('--');
        expect(match.afterDash).to.equal('leadingDashes');
    })
})