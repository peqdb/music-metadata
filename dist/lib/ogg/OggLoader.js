import { OggParser } from './OggParser.js';
export const oggParserLoader = {
    parserType: 'ogg',
    extensions: ['.ogg', '.ogv', '.oga', '.ogm', '.ogx', '.opus', '.spx'],
    async load(metadata, tokenizer, options) {
        return new OggParser(metadata, tokenizer, options);
    }
};
