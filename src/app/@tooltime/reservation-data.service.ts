import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ReservationData } from 'src/app/@shared/data-models/reservation.model';
import { FirebaseFirestoreService } from '../@providers/firebase/fb-database-fs.service';


@Injectable({
  providedIn: 'root'
})
export class ReservationDataService extends FirebaseFirestoreService {

  constructor(protected afs: AngularFirestore) { super(afs); }

  //  given reservationId, get the start/end timeblocks


}
