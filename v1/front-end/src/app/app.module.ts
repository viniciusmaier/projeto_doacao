import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CadastroPessoaComponent } from './components/cadastro-pessoa/cadastro-pessoa.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeDoadorComponent } from './components/home-doador/home-doador.component';
import { HomeInstituicaoComponent } from './components/home-instituicao/home-instituicao.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroPessoaComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    HomeDoadorComponent,
    HomeInstituicaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
