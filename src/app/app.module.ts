import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//angular material
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';


//custom components
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutMeComponent } from './tabs/about-me/about-me.component';
import { SkillsComponent } from './tabs/skills/skills.component';
import { EducationComponent } from './tabs/education/education.component';
import { WorkExperienceComponent } from './tabs/work-experience/work-experience.component';
import { ProjectsComponent } from './tabs/projects/projects.component';
import { ContactComponent } from './tabs/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    AboutMeComponent,
    SkillsComponent,
    EducationComponent,
    WorkExperienceComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
