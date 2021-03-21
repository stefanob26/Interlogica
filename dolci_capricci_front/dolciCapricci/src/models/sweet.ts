import {IngredientsList} from './ingredients-list';

export class Sweet {
  id: number;
  name: string;
  price: number;
  // tslint:disable-next-line:variable-name
  created_at: Date;
  // tslint:disable-next-line:variable-name
  updated_at: Date;
  ingredients: IngredientsList;
  // tslint:disable-next-line:variable-name
  sold_price?: number;

  sold?: boolean;
}
