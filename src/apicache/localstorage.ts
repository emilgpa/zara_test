export interface APIItemCache<
  T extends Record<string, unknown> = Record<string, unknown>
> {
  timestamp: number;
  data: T;
  maxAge: number;
}

export class APICacheLocalStorage {
  static setItem(id: string, data: unknown, duration: number) {
    const now = new Date();
    // get the max age by adding the desired duration
    // with respect to the current date
    const maxAge = new Date(now.getTime() + duration).getTime();
    const item = {
      timestamp: Date.now(),
      data,
      maxAge,
    };
    window.localStorage.setItem(id, JSON.stringify(item));
  }

  static getItem<T extends Record<string, unknown>>(
    id: string
  ): APIItemCache<T> | null {
    // check if the item is valid if it's not then return null
    const cached = window.localStorage.getItem(id);
    if (cached) {
      const item = JSON.parse(cached) as APIItemCache<T>;
      if (Date.now() > item.maxAge) {
        APICacheLocalStorage.removeItem(id);
        return null;
      }
      return item;
    }
    return null;
  }

  static removeItem(id: string) {
    window.localStorage.removeItem(id);
  }
}
