import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BlockComponent} from "./components/block/block.component";
import {HttpClientModule} from "@angular/common/http";
import { ModalComponent } from './components/modal/modal.component';
import {NavbarModule} from "./components/navbar/navbar.module";
import {SpinnerComponent} from "./components/spinner/spinner.component";
import { SearchPipe } from './pipes/search.pipe';
import {FormsModule} from "@angular/forms";
import { SpecificGameComponent } from './components/specific-game/specific-game.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    ModalComponent,
    SpinnerComponent,
    SearchPipe,
    SpecificGameComponent,
    FilterPipe,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NavbarModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
