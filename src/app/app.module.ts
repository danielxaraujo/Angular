import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { BsDropdownModule } from 'ng2-bootstrap/dropdown';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

// App Component
import { AppComponent } from './app.component';

// Routing Module
import { AppRoutingModule } from './app.routing';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		BsDropdownModule.forRoot(),
		TabsModule.forRoot(),
		ChartsModule
	],
	declarations: [
		AppComponent,
		FullLayoutComponent,
		SimpleLayoutComponent,
		NAV_DROPDOWN_DIRECTIVES,
		SIDEBAR_TOGGLE_DIRECTIVES,
		BreadcrumbsComponent,
		AsideToggleDirective
	],
	providers: [{
		provide: LocationStrategy,
		useClass: HashLocationStrategy
	}],
	bootstrap: [AppComponent]
})
export class AppModule { }