import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PageFoundComponent } from './page-found/page-found.component';
import { AuthRoutingModule } from './auth/auth-routing.module';


const routes: Routes=[
    
    {path:'',redirectTo:'/dashboard',pathMatch:'full'},
    {path:'**',component:PageFoundComponent}
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes),
        PagesRoutingModule,
        AuthRoutingModule
    ],
    exports:[RouterModule]
  })
  export class AppRoutingModule { }