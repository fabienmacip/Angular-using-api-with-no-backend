export class Post {
  id: number;
  slug: string;
  url: string;
  title: string;
  content: string;
  image: string;
  thumbnail: string;
  status: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  userId: number;

  constructor(
    id?: number,
    slug?: string,
    url?: string,
    title?: string,
    content?: string,
    image?: string,
    thumbnail?: string,
    status?: string,
    category?: string,
    publishedAt?: string,
    updatedAt?: string,
    userId?: number
  ) {
    this.id = id || 0;
    this.slug = slug || '';
    this.url = url || '';
    this.title = title || '';
    this.content = content || '';
    this.image = image || '';
    this.thumbnail = thumbnail || '';
    this.status = status || '';
    this.category = category || '';
    this.publishedAt = publishedAt || '';
    this.updatedAt = updatedAt || '';
    this.userId = userId || 0;
  }
}
