import { z } from 'zod';
import { _State } from '~/shared/lib/_State';
import { parseWithDefaults } from '~/shared/lib/schema-helpers';

export enum TagsMatchType {
  ALL = 'ALL',
  ANY = 'ANY',
}

export const FilterStateSchema = z.object({
  text: z.string().optional().default(''),
  tagKeys: z.array(z.string()).optional().default([]),
  indexLetter: z.string().optional().default(''),
  tagsMatchType: z.nativeEnum(TagsMatchType).default(TagsMatchType.ALL),
});

export type FilterSchemaType = z.infer<typeof FilterStateSchema>;

export class Filters extends _State<FilterSchemaType> {
  constructor(data: FilterSchemaType) {
    super(data);
  }

  static from(data: Partial<FilterSchemaType>): Filters {
    const parsedData = parseWithDefaults(FilterStateSchema, data);
    return new Filters(parsedData);
  }

  setText(value: string) {
    this.setState({ text: value });
  }

  setIndexLetter(value: string) {
    const next =
      value.toLocaleLowerCase() != this.state().indexLetter ? value : '';
    this.setState({ indexLetter: next.toLocaleLowerCase() });
  }

  setTag(tagKey: string, toggle = true) {
    const prev = this.state().tagKeys;
    const idx = prev.indexOf(tagKey);
    const next = toggle
      ? idx < 0
        ? prev.concat(tagKey)
        : [...prev.slice(0, idx), ...prev.slice(idx + 1)]
      : // No toggle, just replace
        [tagKey];
    this.setState({ tagKeys: next });
  }

  setTagsMatchType(matchType: TagsMatchType) {
    this.setState({ tagsMatchType: matchType });
  }

  isActiveIndexLetter(letter: string) {
    return this.state().indexLetter === letter.toLocaleLowerCase();
  }

  hasTag(tagKey: string) {
    return this.state().tagKeys.includes(tagKey);
  }
}
