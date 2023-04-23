import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ColumnFilterPipe } from './services/column-filter.pipe';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HighlightModule } from './highlight/highlight.module';

@NgModule({
  declarations: [
    AppComponent,
    ColumnFilterPipe,
    NavBarComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HighlightModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
