import { z } from 'zod';
import { parseWithDefaults } from '~/shared/zod/helpers';

export enum TagsMatchType {
  ALL = 'ALL',
  ANY = 'ANY',
}

export const FiltersSchema = z.object({
  text: z.string().optional().default(''),
  tagKeys: z.array(z.string()).optional().default([]),
  indexLetter: z.string().optional().default(''),
  tagsMatchType: z.nativeEnum(TagsMatchType).default(TagsMatchType.ALL),
});

export type FilterSchemaType = z.infer<typeof FiltersSchema>;

export class Filters {
  public schema = FiltersSchema;
  public data: FilterSchemaType;

  constructor(data: FilterSchemaType) {
    this.data = data;
  }

  static from(data: Partial<FilterSchemaType>): Filters {
    const parsedData = parseWithDefaults(FiltersSchema, data);
    return new Filters(parsedData);
  }

  setText(value: string) {
    this.data.text = value;
  }

  setIndexLetter(value: string) {
    const prev = this.data.indexLetter;
    const next =
      value.toLocaleLowerCase() != prev ? value.toLocaleLowerCase() : '';
    this.data.indexLetter = next;
  }

  setTag(tagKey: string, toggle = true) {
    const { tagKeys } = this.data;
    const idx = tagKeys.indexOf(tagKey);

    this.data.tagKeys = toggle
      ? idx < 0
        ? tagKeys.concat(tagKey)
        : [...tagKeys.slice(0, idx), ...tagKeys.slice(idx + 1)]
      : // No toggle, just replace
        [tagKey];
  }

  setTagsMatchType(matchType: TagsMatchType) {
    this.data.tagsMatchType = matchType;
  }

  isActiveIndexLetter(letter: string) {
    return this.data.indexLetter === letter.toLocaleLowerCase();
  }

  hasTag(tagKey: string) {
    return this.data.tagKeys.includes(tagKey);
  }
}
