/*
StartDate <Datetype Object>    from Renter form
EndDate <Datetype Object>	   from Renter form

ItemID				from item data
ItemDailyPrice   		from item data

OwnerID			from Item data
RenterID			from authService.getCurrentUserId()
*/

export interface Reservation {
  startdate: Date;
  enddate: Date;
  itemID: string;
  itemDailyPrice: number;
  ownerID: string;
  renterID: string;
}
