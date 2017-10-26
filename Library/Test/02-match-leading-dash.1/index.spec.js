"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const XRegExp = require("xregexp");
const regex = require("../../index");
describe("vamtiger-regex-leading-dash: regex.default", function () {
    it("should match a leading dashes", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const input = '--leadingDashes', match = XRegExp.exec(input, regex.default);
            chai_1.expect(match).to.be.ok;
            chai_1.expect(match.dash).to.be.ok;
            chai_1.expect(match.dash).to.equal('--');
            chai_1.expect(match.afterDash).to.equal('leadingDashes');
        });
    });
});
//# sourceMappingURL=index.spec.js.map