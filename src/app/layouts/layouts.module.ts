import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccountModule } from '../components/account/account.module';

import { SIDEBAR_TOGGLE_DIRECTIVES } from '../shared/sidebar.directive';

import { BasicLayoutComponent } from './basic-layout.component';
import { FullLayoutComponent } from './full-layout.component';

export { BasicLayoutComponent, FullLayoutComponent }

@NgModule({
    declarations: [
        BasicLayoutComponent,
		FullLayoutComponent,
		SIDEBAR_TOGGLE_DIRECTIVES
    ],
    imports: [
        CommonModule,
        RouterModule,
		AccountModule
	],
    exports: [
        BasicLayoutComponent,
		FullLayoutComponent,
		SIDEBAR_TOGGLE_DIRECTIVES
	]
})
export class LayoutsModule { }