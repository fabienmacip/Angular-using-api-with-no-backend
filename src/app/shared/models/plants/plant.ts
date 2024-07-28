import { PlantLinks } from './plantLinks';

export class Plant {
  id: number;
  common_name: string;
  slug: string;
  scientific_name: string;
  year: number;
  bibliography: string;
  author: string;
  status: string;
  rank: string;
  family_common_name: string;
  genus_id: number;
  image_url: string;
  synonyms: string[];
  genus: string;
  family: string;
  links: PlantLinks;

  constructor(
    id?: number,
    common_name?: string,
    slug?: string,
    scientific_name?: string,
    year?: number,
    bibliography?: string,
    author?: string,
    status?: string,
    rank?: string,
    family_common_name?: string,
    genus_id?: number,
    image_url?: string,
    synonyms?: string[],
    genus?: string,
    family?: string,
    links?: PlantLinks
  ) {
    this.id = id || 0;
    this.common_name = common_name || '';
    this.slug = slug || '';
    this.scientific_name = scientific_name || '';
    this.year = year || 0;
    this.bibliography = bibliography || '';
    this.author = author || '';
    this.status = status || '';
    this.rank = rank || '';
    this.family_common_name = family_common_name || '';
    this.genus_id = genus_id || 0;
    this.image_url = image_url || '';
    this.synonyms = synonyms || [];
    this.genus = genus || '';
    this.family = family || '';
    this.links = links || { self: '', plant: '', genus: '' };
  }
}
