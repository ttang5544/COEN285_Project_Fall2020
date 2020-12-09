
export interface ReservationData {
  reservationId?: string;
  itemId: string;
  ownerId: string;
  renterId: string;
  startDate: Date;
  endDate: Date;
  dailyPrice: number;
}

