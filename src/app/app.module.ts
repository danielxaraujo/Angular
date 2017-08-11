import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ng2-bootstrap/dropdown';

// App Component
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { LayoutsModule} from './layouts/layouts.module';

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		AppRoutingModule,
		LayoutsModule,
		BsDropdownModule.forRoot()
	],
	declarations: [
		AppComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }