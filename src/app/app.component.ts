import {Component, Inject} from '@angular/core';
import {AuthHelper} from './core/services/security/auth.helper';
import {TranslateService} from '@ngx-translate/core';
import {environment} from 'environments/environment';
// @ts-ignore
import moment = require('moment');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(@Inject('defaultLanguage') private defaultLanguage: string,
              private authHelper: AuthHelper,
              private translate: TranslateService) {

    // Store default language into localStorage
    localStorage['language'] = this.defaultLanguage;

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang(defaultLanguage);

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use(localStorage['language'] || defaultLanguage);
    moment.locale(defaultLanguage);
    moment().format(environment.defaultDateFormat);

    // this.dateTimeAdapter.setLocale(localStorage['language'] || defaultLanguage);
    environment.defaultDateFormat = defaultLanguage === 'fr' ? 'DD-MM-YYYY HH:mm' : 'DD/MM/YYYY HH:mm';
  }

  isActive(): boolean {
    return this.authHelper.isUserLogged();
  }
}
