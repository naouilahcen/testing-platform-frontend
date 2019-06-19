import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {AdminPagesRoutingModule} from './admin-pages-routing.module';
import { AdminService } from '../../services/admin.service';
import { ArchwizardModule } from 'angular-archwizard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilesComponent } from './profiles/profiles.component';
import {ChecklistModule} from 'angular-checklist';
import {NgxToggleModule} from 'ngx-toggle';
import {TabsModule} from 'ngx-bootstrap';
import {TranslateModule} from '@ngx-translate/core';
import { SettingsComponent } from './settings/settings.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsComponent } from './questions/questions.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdminPagesRoutingModule,
    ArchwizardModule,
    FormsModule,
    ReactiveFormsModule,
    ChecklistModule,
    NgxToggleModule,
    TabsModule.forRoot(),
    TranslateModule,
    SharedModule
  ],
  declarations: [
    AdminDashboardComponent,
    UserComponent,
    UsersComponent,
    ProfileComponent,
    ProfilesComponent,
    SettingsComponent,
    QuestionComponent,
    QuestionsComponent
  ],
  providers: [AdminService]
})
export class AdminPagesModule {
}
