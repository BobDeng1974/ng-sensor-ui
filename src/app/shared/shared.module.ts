import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule, MatExpansionModule, MatFormFieldModule, MatMenuModule,
         MatButtonModule, MatInputModule, MatSelect, MatSelectModule, MatBadgeModule } from '@angular/material';


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';
import { LoaderComponent } from './loader/loader.component';
import { NavigationFooterComponent } from './navigation/navigation-footer/navigation-footer.component';
import { NavigationHeaderComponent } from './navigation/navigation-header/navigation-header.component';
import { NavigationItemsComponent } from './navigation/navigation-items/navigation-items.component';
import { NavigationContentComponent } from './navigation/navigation-content/navigation-content.component';
import { NavigationNavbarIconsComponent } from './navigation/navigation-navbar-icons/navigation-navbar-icons.component';

const COMPONENTS = [
  HeaderComponent,
  NavigationComponent,
  SidebarComponent,
  ModalComponent,
  LoaderComponent,
  FooterComponent,
  NavigationFooterComponent,
  NavigationHeaderComponent,
  NavigationItemsComponent,
   NavigationContentComponent
];

const MODULES = [
  FormsModule,
  MatMenuModule,
  MatExpansionModule,
  BrowserAnimationsModule,
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatBadgeModule,
]

@NgModule({

  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ... MODULES
  ],

  declarations: [ ... COMPONENTS, NavigationNavbarIconsComponent ],
  exports: [ ... COMPONENTS, ... MODULES, BsDropdownModule, TooltipModule, ModalModule],

})
export class SharedModule { }
