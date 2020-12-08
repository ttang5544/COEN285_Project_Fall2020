



export interface ItemData {
  itemId?: string;
  ownerId?: string;
  category: 'music' | 'kitchen' | 'sports' | 'electronics' | 'yard' | 'other';
  name: string;
  description: string;
  reservationIds?: string[];
  dailyPrice: number;
  picture?: string;
}

