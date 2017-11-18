import {expect} from 'chai';
import * as XRegExp from 'xregexp';
import {default as regex, Match} from '../../index';

describe("vamtiger-regex-leading-dash: regex.default", function () {
    it("should match a leading dashes", async function () {
        const input = '--leadingDashes',
            match = input.match(regex) as RegExpMatchArray,
            xMatch: Match = XRegExp.exec(input, regex);

        expect(match).to.be.ok;
        expect(match.length).to.be.gt(0);

        expect(match[0]).to.equal(input);
        expect(match[1]).to.equal('--');
        expect(match[2]).to.equal('leadingDashes');

        expect(xMatch).to.be.ok;
        expect(xMatch.dash).to.be.ok;

        expect(xMatch.dash).to.equal('--');
        expect(xMatch.afterDash).to.equal('leadingDashes');
    })
})