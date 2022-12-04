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
import { ShopAudioBooksComponent } from './components/shop/shop-audio-books/shop-audio-books.component';
import { ShopBooksComponent } from './components/shop/shop-books/shop-books.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent, data:{index: 0}},
  {path: 'vita', component: VitaPageComponent, data:{index: 1}},
  {path: 'work', component: WorkpageComponent,  data:{index: 2}, children:[
    {path: 'diverse_verse', component: AuthorWorkPoemsComponent, data:{index: 3}},
        {path: 'starke_stuecke', component: AuthorWorkBooksComponent, data:{index: 4}},

    {path: 'hoerbuecher', component: AuthorWorkAudioBooksComponent, data:{index: 5}},
  ]},
  {path: 'shop', component: ShoppageComponent, data:{index: 6}, children:[
    {path: 'buecher', component: ShopBooksComponent, data:{index: 7}},
    {path: 'hoerbuecher', component: ShopAudioBooksComponent, data:{index: 8}},

  ]},
  {path: 'contact', component: ContactPageComponent, data:{index: 9}},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', scrollOffset: [0, 150],
  anchorScrolling: 'enabled',})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
