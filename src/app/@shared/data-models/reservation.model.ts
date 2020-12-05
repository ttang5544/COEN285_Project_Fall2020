/*
StartDate <Datetype Object>    from Renter form
EndDate <Datetype Object>	   from Renter form

ItemID				from item data
ItemDailyPrice   		from item data

OwnerID			from Item data
RenterID			from authService.getCurrentUserId()
*/

export interface Reservation {
  resId?: string;
  itemID: string;
  ownerID: string;
  renterID: string;
  startdate: Date;
  enddate: Date;
  itemDailyPrice: number;
}
