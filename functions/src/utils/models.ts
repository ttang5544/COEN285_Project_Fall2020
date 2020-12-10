
export interface Timeblock {
  start: Date;
  end: Date;
}


export interface BackendReservation {
  itemId: string;
  ownerId: string;
  renterId: string;
  startDate: number | Date;
  endDate: number | Date;
  dailyPrice: number;
  reservationId?: string;
}


export interface BackendItem {
  name: string;
  category: string;
  description: string;
  picture: string;
  dailyPrice: number;
  ownerId: string;
  reservations: string[];
  itemId?: string;
}


export interface BackendUser {
  email: string;
  firstName: string;
  lastName: string;
  items: string[];
  reservations: {
    owner: string[],
    renter: string[];
  };
  picture?: string;
}
