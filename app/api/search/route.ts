import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
import { createTokenizer } from '@orama/tokenizers/mandarin';
 
export const { GET } = createFromSource(source, undefined, {
  localeMap: {
    // you can customise search configs for specific locales, like:
    // [locale]: Orama options
 
    zhHans: {
      components: {
        tokenizer: createTokenizer(),
      },
      search: {
        threshold: 0,
        tolerance: 0,
      },
    },
    
    zhHant: {
      components: {
        tokenizer: createTokenizer(),
      },
      search: {
        threshold: 0,
        tolerance: 0,
      },
    },
 
    // use the English tokenizer
    en: 'english',
  },
});