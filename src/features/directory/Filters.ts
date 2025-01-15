import { z } from 'zod';
import { ExposeSchemaProps } from '~/shared/models/ExposePropsDecorator';
import { TagSchema, TagSchemaType } from './Tag';

export const FiltersSchema = z.object({
  text: z.string().optional().default(''),
  tagKeys: z.array(z.string()).optional().default([]),
  indexLetter: z.string().optional().default(''),
});

export type FiltersSchemaType = z.infer<typeof FiltersSchema>;

@ExposeSchemaProps(FiltersSchema)
export class Filters {
  private data;
  private onChange!: () => void;

  constructor(data: FiltersSchemaType) {
    this.data = data;
  }

  static from(data: unknown, onChange: () => void): Filters {
    const parsedData = FiltersSchema.parse(data);
    const instance = new Filters(parsedData);
    instance.onChange = onChange
    return instance
  }

  setText(value: string) {
    this.text = value
    this.onChange()
  }

  setIndexLetter(value: string) {
    this.indexLetter = value.toLocaleLowerCase()
    this.onChange()
  }

  setTag(key: string, toggle = true) {
    const idx = this.tagKeys.indexOf(key)
    if (idx >= 0) {

    }
    else {

    }
    this.onChange()
  }
}

export interface Filters extends FiltersSchemaType {}