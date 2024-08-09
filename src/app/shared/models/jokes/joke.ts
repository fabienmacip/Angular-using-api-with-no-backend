export class Joke {
  categories: string[];
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;

  constructor(
    categories?: string[],
    created_at?: string,
    id?: string,
    updated_at?: string,
    url?: string,
    value?: string
  ) {
      this.categories = categories || [];
      this.created_at = created_at || '';
      this.id = id || '';
      this.updated_at = updated_at || '';
      this.url = url || '';
      this.value = value || '';
    }
}
