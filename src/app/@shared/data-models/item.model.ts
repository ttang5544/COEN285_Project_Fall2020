


export interface ItemInfo {
  itemId?: string;
  ownerId: string;
  category: 'kitchen' | 'yard' | 'exercise';  // TODO switch to Enum
  name: string;
  description: string;
  dailyPrice: number;
  picture?: string;
}


export interface ItemData {
  itemId: string;
  ownerId: string;
  category: 'kitchen' | 'yard' | 'exercise';
  name: string;
  description: string;
  reservationIds: string;
  dailyPrice: number;
  picture?: string;
}

