import type { IParserLoader, ITokenParser } from '../ParserFactory.js';
import type { INativeMetadataCollector } from '../common/MetadataCollector.js';
import type { ITokenizer } from 'strtok3';
import type { IOptions } from '../type.js';
import { OggParser } from './OggParser.js';

export const oggParserLoader: IParserLoader = {
  parserType: 'ogg',
  extensions: ['.ogg', '.ogv', '.oga', '.ogm', '.ogx', '.opus', '.spx'],
  async load(metadata: INativeMetadataCollector, tokenizer: ITokenizer, options: IOptions): Promise<ITokenParser> {
    return new OggParser(metadata, tokenizer, options);
  }
};
