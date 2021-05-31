import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: '', redirectTo: '/header', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
