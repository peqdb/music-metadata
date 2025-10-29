import { FlacParser } from './FlacParser.js';
export const flacParserLoader = {
    parserType: 'flac',
    extensions: ['.flac'],
    async load(metadata, tokenizer, options) {
        return new FlacParser(metadata, tokenizer, options);
    }
};
