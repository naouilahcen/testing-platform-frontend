import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServicesService} from './services/services.service';
import {AdminPagesModule} from './pages/admin-pages/admin-pages.module';
import {HomePageModule} from './pages/home-page/home-page.module';
import {ProfilePageModule} from './pages/profile-page/profile-page.module';
import {UtilsService} from './services/utils.service';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {createTranslateLoader} from '../app.translate.factory';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {QuestionService} from './services/question.service';
import {ExamService} from './services/exam.service';


@NgModule({
  imports: [
    CommonModule,
    AdminPagesModule,
    BrowserAnimationsModule,
    HomePageModule,
    ProfilePageModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    ServicesService,
    QuestionService,
    ExamService,
    UtilsService
  ],

  exports: [
    CommonModule,
    AdminPagesModule,
    HomePageModule,
    ProfilePageModule,
  ],

  declarations: []
})
export class MainModule {
}
