import type { IParserLoader, ITokenParser } from '../ParserFactory.js';
import type { INativeMetadataCollector } from '../common/MetadataCollector.js';
import type { ITokenizer } from 'strtok3';
import type { IOptions } from '../type.js';
import { WaveParser } from './WaveParser.js';

export const riffParserLoader: IParserLoader = {
  parserType: 'riff',
  extensions: ['.wav', 'wave', '.bwf'],
  async load(metadata: INativeMetadataCollector, tokenizer: ITokenizer, options: IOptions): Promise<ITokenParser> {
    return new WaveParser(metadata, tokenizer, options);
  }
};
