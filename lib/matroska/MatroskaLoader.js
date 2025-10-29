import { MatroskaParser } from './MatroskaParser.js';
export const matroskaParserLoader = {
    parserType: 'matroska',
    extensions: ['.mka', '.mkv', '.mk3d', '.mks', 'webm'],
    async load(metadata, tokenizer, options) {
        return new MatroskaParser(metadata, tokenizer, options);
    }
};
