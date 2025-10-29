import { MpegParser } from './MpegParser.js';
export const mpegParserLoader = {
    parserType: 'mpeg',
    extensions: ['.mp2', '.mp3', '.m2a', '.aac', 'aacp'],
    async load(metadata, tokenizer, options) {
        return new MpegParser(metadata, tokenizer, options);
    }
};
