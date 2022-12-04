import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorWorkAudioBooksComponent } from './components/author-work-audio-books/author-work-audio-books.component';
import { AuthorWorkBooksComponent } from './components/author-work-books/author-work-books.component';
import { AuthorWorkPoemsComponent } from './components/author-work-poems/author-work-poems.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { ShoppageComponent } from './components/pages/shoppage/shoppage.component';
import { VitaPageComponent } from './components/pages/vita-page/vita-page.component';
import { WorkpageComponent } from './components/pages/workpage/workpage.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent, data:{index: 0}},
  {path: 'vita', component: VitaPageComponent, data:{index: 1}},
  {path: 'work', component: WorkpageComponent, data:{index: 2}, children:[
    {path: 'audio_books', component: AuthorWorkAudioBooksComponent},
    {path: 'books', component: AuthorWorkBooksComponent},
    {path: 'lyrik', component: AuthorWorkPoemsComponent},

  ]},
  {path: 'shop', component: ShoppageComponent, data:{index: 3}},
  {path: 'contact', component: ContactPageComponent, data:{index: 4}},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', scrollOffset: [0, 150],
  anchorScrolling: 'enabled',})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
