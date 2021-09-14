import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/security/login/login.component";
import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";


export const ROUTES: Routes = [
	{path : '', component: HomeComponent},
	{path : 'login', component : LoginComponent}
]

//export const ROUTING = RouterModule.forRoot(AppRoutes);
export const routes = RouterModule.forRoot(ROUTES);