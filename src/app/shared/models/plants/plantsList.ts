import { Meta } from './meta';
import { Plant } from './plant';
import { PlantLinks } from './plantLinks';

export class PlantsList {
  data: Plant[];
  links: PlantLinks;
  meta: Meta;

  constructor(data?: Plant[], links?: PlantLinks, meta?: Meta) {
    this.data = data || [new Plant()];
    this.links = links || new PlantLinks();
    this.meta = meta || new Meta();
  }
}
