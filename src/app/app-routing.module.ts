import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListofbooksComponent } from './listofbooks/listofbooks.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
// import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {path:"ListOfBooks",component:ListofbooksComponent},
  {path:"login", component:LoginpageComponent},
  {path:"signup",component:SignuppageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[ListofbooksComponent,LoginpageComponent,SignuppageComponent];
