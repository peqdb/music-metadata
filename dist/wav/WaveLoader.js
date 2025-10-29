import { WaveParser } from './WaveParser.js';
export const riffParserLoader = {
    parserType: 'riff',
    extensions: ['.wav', 'wave', '.bwf'],
    async load(metadata, tokenizer, options) {
        return new WaveParser(metadata, tokenizer, options);
    }
};
