import * as XRegExp from 'xregexp';

const pattern = `^
        (?<dash>
            \\-+
        )
        (?<afterDash>
            .*?
        )
    $`,
    flags = 'xnms',
    regex = XRegExp(pattern, flags);

export default regex;

export interface IMatch {
    dash?: string;
    afterDash?: string;
}

export type Match = RegExpExecArray & IMatch;