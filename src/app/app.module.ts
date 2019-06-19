import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';

import {AppComponent} from './app.component';
import {BoxedLayoutComponent} from './layouts/boxed-layout/boxed-layout.component';

import {MaintenanceComponent} from './maintenance/maintenance.component';
import {createTranslateLoader} from './app.translate.factory';
import {CoreModule} from './core/core.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import {DashboardLayoutComponent} from './layouts/dashboard-layout/dashboard-layout.component';
import {BoxedWithSidebarLayoutComponent} from './layouts/boxed-with-sidebar-layout/boxed-with-sidebar-layout.component';
import {TwoColumnsLayoutComponent} from './layouts/2-columns-layout/2-columns-layout.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {BrowserModule} from '@angular/platform-browser';
import {MainModule} from './main/main.module';
import { RecoverPasswordService } from './main/services/recover-password.service';
import {ToastrModule} from 'ngx-toastr';
import {NavbarFrontComponent} from './main/pages/navbar-front/navbar-front.component';
import {QuestionsPagesComponent} from './main/pages/questions-pages/questions-pages.component';
import {DashboardPageComponent} from './main/pages/dashboard-page/dashboard-page.component';
import {ExaminationsPagesComponent} from './main/pages/examinations-pages/examinations-pages.component';
import {TabsModule} from 'ngx-bootstrap';
import {CategoryPagesComponent} from './main/pages/category-pages/category-pages.component';
import {ProductPagesComponent} from './main/pages/product-pages/product-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxedLayoutComponent,
    TwoColumnsLayoutComponent,
    MaintenanceComponent,
    DashboardLayoutComponent,
    BoxedWithSidebarLayoutComponent,
    RecoverPasswordComponent,
    ResetPasswordComponent,
    NavbarFrontComponent,
    QuestionsPagesComponent,
    DashboardPageComponent,
    ExaminationsPagesComponent,
    CategoryPagesComponent,
    ProductPagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    CoreModule,
    ToastrModule.forRoot(),
    SharedModule,
    MainModule,
    TabsModule,
  ],
  providers: [
    {provide: 'api.config', useValue: environment.apiConfig},
    {provide: 'defaultLanguage', useValue: environment.defaultLanguage},
    RecoverPasswordService
  ],
  exports: [
    NavbarFrontComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
