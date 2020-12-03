
export type ItemCategories = 'kitchen' | 'yard' | 'exercise';

export interface ItemData {
  itemId: string;
  ownerId: string;
  category: ItemCategories;
  name: string;
  description: string;
  picture: string;
  dailyPrice: number;
}
