/*
StartDate <Datetype Object>    from Renter form
EndDate <Datetype Object>	   from Renter form

ItemID				from item data
ItemDailyPrice   		from item data

OwnerID			from Item data
RenterID			from authService.getCurrentUserId()
*/



export interface ReservationData {
  reservationId?: string;
  itemId: string;
  ownerId: string;
  renterId: string;
  startDate: Date;
  endDate: Date;
  dailyPrice: number;
}


export interface UserReservationsInfo {
  owner: string[];
  renter: string[];
}

export interface UserReservationsData {
  owner: ReservationData[];
  renter: ReservationData[];
}
