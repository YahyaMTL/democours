import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormgroupComponent } from './forms/formgroup/formgroup.component';
import { FormsmoduleComponent } from './forms/formsmodule/formsmodule.component';
import { JavascriptComponent } from './forms/javascript/javascript.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ListeComponent } from './personages/liste/liste.component';

const routes: Routes = [
  {
    path: 'javascript', component: JavascriptComponent
  },
  {
    path: 'formsmodule', component: FormsmoduleComponent
  },
  {
    path: 'formgroup', component: FormgroupComponent
  },
  {
    path: 'personages', component: ListeComponent
  },{
    path: "login",
    component: LoginPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
