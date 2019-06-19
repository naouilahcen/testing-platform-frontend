import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BoxedLayoutComponent} from './layouts/boxed-layout/boxed-layout.component';
import {TwoColumnsLayoutComponent} from './layouts/2-columns-layout/2-columns-layout.component';
import {HOME_ROUTES} from './routes/home-page.routes';
import {ACCOUNT_PAGES_ROUTES} from './routes/account-pages.routes';
import {ADMIN_PAGES_ROUTES} from './routes/admin-pages.routes';
import {PROFILE_PAGE_ROUTES} from './routes/profile-page.routes';
import {LoginGuard} from './core/guards/login.guard';
import {LoginComponent} from './login/login.component';
import {RecoverPasswordComponent} from './recover-password/recover-password.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {ExaminationsPagesComponent} from './main/pages/examinations-pages/examinations-pages.component';
import {QuestionsPagesComponent} from './main/pages/questions-pages/questions-pages.component';
import {DashboardPageComponent} from './main/pages/dashboard-page/dashboard-page.component';
import {CategoryPagesComponent} from './main/pages/category-pages/category-pages.component';
import {ProductPagesComponent} from './main/pages/product-pages/product-pages.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardPageComponent},
  {path: 'examinations', component: ExaminationsPagesComponent},
  {path: 'questions', component: QuestionsPagesComponent},
  {path: 'category', component: CategoryPagesComponent},
  {path: 'products', component: ProductPagesComponent},
  {path: 'recover-password', component: RecoverPasswordComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: '', component: LoginComponent, canActivate: [LoginGuard]},
  {path: '', component: BoxedLayoutComponent, data: {title: ''}, children: HOME_ROUTES, canActivate: [LoginGuard]},
  {path: '', component: BoxedLayoutComponent, data: {title: ''}, children: ACCOUNT_PAGES_ROUTES, canActivate: [LoginGuard]},
  {path: '', component: BoxedLayoutComponent, data: {title: ''}, children: PROFILE_PAGE_ROUTES, canActivate: [LoginGuard]},
  {path: '', component: TwoColumnsLayoutComponent, data: {title: ''}, children: ADMIN_PAGES_ROUTES, canActivate: [LoginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
