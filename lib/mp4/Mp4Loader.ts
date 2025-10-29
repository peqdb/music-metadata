import type { IParserLoader, ITokenParser } from '../ParserFactory.js';
import type { INativeMetadataCollector } from '../common/MetadataCollector.js';
import type { ITokenizer } from 'strtok3';
import type { IOptions } from '../type.js';
import { MP4Parser } from './MP4Parser.js';

export const mp4ParserLoader: IParserLoader = {
  parserType: 'mp4',
  extensions: ['.mp4', '.m4a', '.m4b', '.m4pa', 'm4v', 'm4r', '3gp'],
  async load(metadata: INativeMetadataCollector, tokenizer: ITokenizer, options: IOptions): Promise<ITokenParser> {
    return new MP4Parser(metadata, tokenizer, options);
  }
};
