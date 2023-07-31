import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  { path: 'menu', component: MainMenuComponent },
  { path: 'game', component:GameComponent },
  {path: '', redirectTo:'menu', pathMatch:'full'}//path matches by prefix by default
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
