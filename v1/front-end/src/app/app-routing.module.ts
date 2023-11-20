import { FormsModule } from '@angular/forms';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CadastroPessoaComponent } from './components/cadastro-pessoa/cadastro-pessoa.component';
import { LoginComponent } from './components/login/login.component';
import { HomeDoadorComponent } from './components/home-doador/home-doador.component';
import { HomeInstituicaoComponent } from './components/home-instituicao/home-instituicao.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'home-doador', component: HomeDoadorComponent},
  {path: 'home-instituicao', component: HomeInstituicaoComponent},
  {path: 'cadastro-pessoa', component: CadastroPessoaComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}



