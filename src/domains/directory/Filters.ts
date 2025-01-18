import { z } from 'zod';
import { _State } from '~/shared/application/_State';

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

export type TFilterState = z.infer<typeof FilterStateSchema>;

export class Filters extends _State<TFilterState> {
  constructor(data: TFilterState) {
    super(data);
  }

  static from(data?: unknown): Filters {
    const parsedData = FilterStateSchema.parse(data ?? {});
    const instance = new Filters(parsedData);
    return instance;
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

  isActiveIndexLetter(letter: string) {
    return this.state().indexLetter === letter.toLocaleLowerCase();
  }

  hasTag(tagKey: string) {
    return this.state().tagKeys.includes(tagKey);
  }
}

export interface Filters extends TFilterState {}
