import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SettingsComponent} from './settings/settings.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'settings',
        component: SettingsComponent,
        data: {
          title: 'Settings'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountPagesRoutingModule { }
