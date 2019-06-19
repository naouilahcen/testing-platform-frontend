import {NgModule} from '@angular/core';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './user/user.component';
import {ProfilesComponent} from './profiles/profiles.component';
import {ProfileComponent} from './profile/profile.component';
import {SettingsComponent} from './settings/settings.component';
import {QuestionComponent} from './question/question.component';
import {QuestionsComponent} from './questions/questions.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: AdminDashboardComponent,
        data: {
          title: 'Tableau de bord'
        }
      },
      {
        path: 'profiles',
        component: ProfilesComponent,
        data: {
          title: 'Profils'
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          title: 'Nouveau profil'
        }
      },
      {
        path: 'question',
        component: QuestionComponent,
        data: {
          title: 'ajouter une question'
        }
      }, {
        path: 'question/:id',
        component: QuestionComponent,
        data: {
          title: 'edit une Question'
        }
      }, {
        path: 'questions',
        component: QuestionsComponent,
        data: {
          title: 'liste questions'
        }
      },
      {
        path: 'profiles/:id',
        component: ProfileComponent,
        data: {
          title: 'Editer profil'
        }
      },

      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: 'Utilisateurs'
        }
      },
      {
        path: 'user',
        component: UserComponent,
        data: {
          title: 'Nouveau utilisateur'
        }
      },
      {
        path: 'users/:id',
        component: UserComponent,
        data: {
          title: 'Editer utilisateur'
        }
      },
      {
        path: 'settings',
        component: SettingsComponent,
        data: {
          title: 'Parametrage'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPagesRoutingModule {
}
