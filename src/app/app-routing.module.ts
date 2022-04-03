import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { ShoppageComponent } from './components/pages/shoppage/shoppage.component';
import { VitaPageComponent } from './components/pages/vita-page/vita-page.component';
import { WorkpageComponent } from './components/pages/workpage/workpage.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent, data:{index: 0}},
  {path: 'vita', component: VitaPageComponent, data:{index: 1}},
  {path: 'work', component: WorkpageComponent, data:{index: 2}},
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
