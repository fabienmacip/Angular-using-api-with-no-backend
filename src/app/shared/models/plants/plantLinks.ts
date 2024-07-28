export class PlantLinks {
  self: string;
  plant: string;
  genus: string;

  constructor(self?: string, plant?: string, genus?: string) {
    this.self = self || '';
    this.plant = plant || '';
    this.genus = genus || '';
  }
}
