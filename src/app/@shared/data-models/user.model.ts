

// User Info pkg
export interface UserInfo {
  email: string;
  uid: string;
  displayName: string;
  firstNam?: string;
  lastName?: string;
  claims?: { [key: string]: any; };
}


// User Data as it is in backend
export interface UserData {
  uid?: string;
  email: string;
  firstName: string;
  lastName: string;
  items?: string[];  // itemIds
  picture?: string;
  reservations?: {   // reservationIds
    owner?: string[];
    renter?: string[];
  };
}
