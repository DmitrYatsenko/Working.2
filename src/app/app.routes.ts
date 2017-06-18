import { Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";

/** this is routes block, so lets commit
 * now is fixed
 * 
 */
export const routes: Routes = [
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
    { path: "dashboard", component: DashboardComponent }
   
];