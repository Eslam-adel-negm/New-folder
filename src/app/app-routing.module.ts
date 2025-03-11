import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { B2bComponent } from './pages/b2b/b2b.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'b2b', component: B2bComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
