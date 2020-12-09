import { Component } from '@angular/core';
import { FirebaseAuthService } from '../../@providers/firebase/fb-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})

export class HeaderComponent {

  num = 0;
  constructor(private auth: FirebaseAuthService) { }

  logout() {
    this.auth.logout();
  }
}
