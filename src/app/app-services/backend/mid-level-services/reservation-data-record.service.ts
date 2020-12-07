import { Injectable } from '@angular/core';
import { ReservationData } from '../../../@shared/data-models/reservation.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ResultResponse } from '../../../@shared/data-models/message-result.modle';
import { FirebaseFirestoreService } from '../firebase/fb-firestore.service';


@Injectable({
  providedIn: 'root'
})
export class ReservationDataRecordService extends FirebaseFirestoreService<ReservationData> {

  constructor(protected afs: AngularFirestore) { super(afs); }

  //  given reservationId, get the start/end timeblocks


}
