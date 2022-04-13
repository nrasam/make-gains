import { Food } from './Food';

export const FOODS: Food[] = [
  {
    name: 'Protein Powder',
    cal: 160,
    nutrients: [
      { name: 'Protein', dv: 25 }
    ],
    serving: 1,
    per: 'scoop',
  },
  {
    name: 'Nutritional Yeast',
    cal: 80,
    nutrients: [
      { name: 'Carbohydrates', dv: 100}
    ],
    serving: 1 / 4,
    per: 'cup',
  },
];
