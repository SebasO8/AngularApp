import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [{path: '', redirectTo: 'createuser', pathMatch: 'full'},
                        {path: 'createuser', component: UserComponent},
                        {path: 'userlist', component: UserListComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
