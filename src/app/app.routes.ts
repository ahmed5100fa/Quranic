import { Routes } from '@angular/router';
import { HomeComponent } from './laout/pages/home/home.component';
import { QuranComponent } from './layout/quran/quran.component';
import { TafseerComponent } from './layout/tafseer/tafseer.component';
import { SubTafseerComponent } from './layout/additions/sub-tafseer/sub-tafseer.component';

export const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent , title: 'Home'},
  {path: 'Quran' , component: QuranComponent , title: 'Quran'},
  {path: 'Tafseer' , component:TafseerComponent , title: 'Tafseer'},
  { path: 'SubTafseer/:id', component: SubTafseerComponent, title: 'Tafseer' }
];
