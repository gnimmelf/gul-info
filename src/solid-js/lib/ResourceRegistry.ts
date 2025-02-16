import { ResourceActions, ResourceReturn } from 'solid-js';

export class ResourceRegistry {
  private actions: Map<string, ResourceActions<any>>;
  constructor() {
    this.actions = new Map();
  }

  public add<T>(key: string, resourceReturn: ResourceReturn<T>) {
    const [resource, resourceActions] = resourceReturn;
    this.actions.set(key, resourceActions);
    return resource;
  }

  get(key: string) {
    const actions = this.actions.get(key);
    if (!actions) throw new Error(`Could not find resource by key '${key}'!`);
    return actions!;
  }
}
