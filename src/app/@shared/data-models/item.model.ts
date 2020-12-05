

export interface Item {
  itemId?: string;
  ownerId: string;
  category: 'kitchen' | 'yard' | 'exercise';
  name: string;
  description: string;
  picture: string;
  dailyPrice: number;
}
