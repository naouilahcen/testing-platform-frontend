import { Component, OnInit } from '@angular/core';
import {User} from '../../../core/models/user.model';
import {OAuthService} from '../../../core/services/security/oauth.service';
import {UtilsService} from '../../services/utils.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {AuthHelper} from '../../../core/services/security/auth.helper';

@Component({
  selector: 'app-navbar-front',
  templateUrl: './navbar-front.component.html',
  styleUrls: ['./navbar-front.component.scss']
})
export class NavbarFrontComponent implements OnInit {
  public user: User;
  public applogo: string;

  constructor(private oauthService: OAuthService,
              private utilsService: UtilsService,
              private toastrService: ToastrService,
              private router: Router) { }

  ngOnInit() {
    this.applogo = environment.appLogo;
    if (localStorage.getItem(AuthHelper.USER_ID)) {
      this.user = JSON.parse(localStorage.getItem(AuthHelper.USER_ID));
    }
  }

  public logout() {
    this.oauthService.logout();
    this.toastrService.success('À bientôt', '', {timeOut: 1000});
    this.router.navigate(['/login']);
  }

}
