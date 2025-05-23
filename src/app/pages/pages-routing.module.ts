import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { ProgressComponent } from "./progress/progress.component";
const routes: Routes=[
    {
        path:'dashboard',
        component:PagesComponent,
        children:[
            {path:'',component:DashboardComponent},
            {path:'progress',component:ProgressComponent},
            {path:'grafica',component:Grafica1Component}
        ]
    },
]
@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
  })
  export class PagesRoutingModule { }