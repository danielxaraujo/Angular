import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { FullLayoutComponent } from './layouts/layouts.module';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'budget',
		pathMatch: 'full',
	},
	{
		path: '',
		component: FullLayoutComponent,
		data: {
			title: 'Home',
			icon: 'fa fa-home'
		},
		children: [
			{
				path: 'budget',
				loadChildren: './components/budget/budget.module#BudgetModule'
			},
			{
				path: 'transaction',
				loadChildren: './components/transaction/transaction.module#TransactionModule'
			},
			{
				path: 'import',
				loadChildren: './components/import/import.module#ImportModule'
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes/*, { preloadingStrategy: PreloadAllModules }*/)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
