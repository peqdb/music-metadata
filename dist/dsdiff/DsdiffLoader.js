import { DsdiffParser } from './DsdiffParser.js';
export const dsdiffParserLoader = {
    parserType: 'dsdiff',
    extensions: ['.dff'],
    async load(metadata, tokenizer, options) {
        return new DsdiffParser(metadata, tokenizer, options);
    }
};
