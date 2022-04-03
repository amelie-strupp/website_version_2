import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutTheAuthorComponent } from './components/about-the-author/about-the-author.component';
import { AuthorVitaComponent } from './components/author-vita/author-vita.component';
import { AuthorWorkComponent } from './components/author-work/author-work.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageHeadlineComponent } from './components/small/page-headline/page-headline.component';
import { ShopComponent } from './components/shop/shop.component';
import { BookItemComponent } from './components/small/book-item/book-item.component';
import { SmallNavigationComponent } from './components/small-navigation/small-navigation.component';
import { AudiobookItemComponent } from './components/small/audiobook-item/audiobook-item.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { WorkpageComponent } from './components/pages/workpage/workpage.component';
import { ShoppageComponent } from './components/pages/shoppage/shoppage.component';
import { NavigationSmallScreensComponent } from './components/navigation-small-screens/navigation-small-screens.component';
import { VitaPageComponent } from './components/pages/vita-page/vita-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    HeaderComponent,
    AboutTheAuthorComponent,
    AuthorVitaComponent,
    AuthorWorkComponent,
    PageHeadlineComponent,
    ShopComponent,
    BookItemComponent,
    SmallNavigationComponent,
    AudiobookItemComponent,
    HomepageComponent,
    WorkpageComponent,
    ShoppageComponent,
    NavigationSmallScreensComponent,
    VitaPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
