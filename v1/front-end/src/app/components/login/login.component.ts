
import { HomeComponent } from './../home/home.component';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from '../cadastro-pessoa/model/pessoa';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private service : PessoaService,
    private route   : Router
  ){}

  email : string = '';
  senha : string = '';
  dadosBancoPessoa : Pessoa[] = [];

  entrar(){
    this.dadosBancoPessoa = this.service.getAllPessoas();
    this.dadosBancoPessoa.forEach(p => {
      if(p["email"] == this.email && p["senha"] == this.senha){
        console.log(p["cpf"]);
        (p["bo_doador"] == 'S') ? this.route.navigate(["/home-doador"]): this.route.navigate(["/home-instituicao"])
      }
    })
  }
}
