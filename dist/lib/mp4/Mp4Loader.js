import { MP4Parser } from './MP4Parser.js';
export const mp4ParserLoader = {
    parserType: 'mp4',
    extensions: ['.mp4', '.m4a', '.m4b', '.m4pa', 'm4v', 'm4r', '3gp'],
    async load(metadata, tokenizer, options) {
        return new MP4Parser(metadata, tokenizer, options);
    }
};
