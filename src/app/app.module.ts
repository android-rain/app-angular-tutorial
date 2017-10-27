import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
	FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    RouterModule.forRoot([
        {
            path: 'heroes',
            component: HeroesComponent
        }
    ])
  ],
  providers: [
      HeroService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
