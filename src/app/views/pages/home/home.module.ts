import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { Routes, RouterModule } from '@angular/router';
import { PartialsModule } from '../../partials/partials.module';
import { CoreModule } from 'src/app/core/core.module';

const routes: Routes = [
	{
		path: '',
		component: HomepageComponent,
  },
];

@NgModule({
  declarations: [
    HomepageComponent,
  ],
  imports: [
    CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild(routes),
  ],
  providers: [
    // module-based services here
  ]
})
export class HomeModule { }
