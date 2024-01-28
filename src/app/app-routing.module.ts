import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component'
import { TutoriaisComponent } from './components/tutoriais/tutoriais.component';
import { LinksComponent } from './components/links/links.component';

const routes: Routes = [
  {path: '', component: HomeComponent  },
  {path: 'tutoriais', component: TutoriaisComponent },
  {path: 'links', component: LinksComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
