// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontComponent } from './views/theme/front/front.component';
import { AppComponent } from './views/theme/app/app.component';

const routes: Routes = [
    {
        path: 'app',
        component: AppComponent,
        children: [
            {
				path: 'dashboard',
				loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
			}
        ]
    },
    {
        path: '',
        component: FrontComponent,
        children: [
            {
				path: '',
				loadChildren: () => import('./views/pages/home/home.module').then(m => m.HomeModule)
			}
        ]
    },
    {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
