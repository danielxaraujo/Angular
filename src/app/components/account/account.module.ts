import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NAV_DROPDOWN_DIRECTIVES } from '../../shared/nav-dropdown.directive';

import { AccountComponent } from './account.component';
import { AccountService } from './account.service';
import { AccountRoutingModule } from './account.routing';

@NgModule({
	declarations: [AccountComponent, NAV_DROPDOWN_DIRECTIVES],
	imports: [CommonModule, RouterModule, HttpClientModule, AccountRoutingModule],
	exports: [AccountComponent, NAV_DROPDOWN_DIRECTIVES],
	providers: [AccountService]
})
export class AccountModule { }