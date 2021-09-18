import { LoginComponent } from "./components/security/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./components/security/auth.guard";


export const ROUTES: Routes = [
	{path : '', component: HomeComponent, canActivate: [AuthGuard]},
	{path : 'login', component : LoginComponent}
]

export const routes = RouterModule.forRoot(ROUTES);