import { DsfParser } from './DsfParser.js';
export const dsfParserLoader = {
    parserType: 'dsf',
    extensions: ['.dsf'],
    async load(metadata, tokenizer, options) {
        return new DsfParser(metadata, tokenizer, options);
    }
};
