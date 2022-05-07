import { Nutrient } from './Nutrient';
export interface Food {
  name: string;
  cal: number;
  nutrients: Nutrient[];
  serving: number;
  per: string;
}
