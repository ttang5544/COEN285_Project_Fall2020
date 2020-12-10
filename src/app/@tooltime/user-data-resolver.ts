import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, DatabaseService } from '../@providers/service-interfaces';
import { UserData } from '../@shared/data-models/user.model';

@Injectable()
export class UserDataResolver implements Resolve<UserData> {
  constructor(
    private auth: AuthService,
    private usersDb: DatabaseService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): UserData | Observable<UserData> {
    const uid = this.auth.getUid();
    return this.usersDb.getRecord<UserData>(uid);
  }
}
