export interface Item {
  itemId: string;
  ownerId: string;
  category: 'kitchen' | 'yard' | 'exercise';
  name: string;
  description: string;
  pictureFilename: string;
  dailyPrice: number;
}
