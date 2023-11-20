import { Component, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';
import { Pessoa } from './model/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.scss']
})
export class CadastroPessoaComponent {
   constructor(
      private service : PessoaService,
      private router : Router,
    ){}

  pessoa : Pessoa = new Pessoa;
  definindoCpfCnpj : string = '';
  dadosBancoPessoa : Pessoa[] = this.service.getAllPessoas();


  cadastrarPessoa() : void{
    try{
      this.definindo_doador_instituição(this.pessoa);
      this.verificaElementosIguais(this.pessoa);
      this.service.cadastrarPessoa(this.pessoa)
        .subscribe(retorno => console.log(retorno));
      this.router.navigate(["/login"]);
    }
    catch(x){
      console.log(x);
    }
  }

  definindo_doador_instituição(pessoa : Pessoa){
    if(this.definindoCpfCnpj.length == 11) {
      pessoa.cpf = this.definindoCpfCnpj;
      pessoa.cnpj = "null";
      pessoa.bo_doador = "S";
      pessoa.bo_instituicao = "N";

    };
    if(this.definindoCpfCnpj.length == 14){
      pessoa.cnpj = this.definindoCpfCnpj;
      pessoa.cpf = "null";
      pessoa.bo_instituicao = "S";
      pessoa.bo_doador = "N";
    }
    //console.log("cpf/cnpj incorreto!!!")
  }

// VALIDAÇÃO DOS DADOS ---- CADASTRO JA REALIZADO
  verificaElementosIguais(pessoa : Pessoa){
    this.dadosBancoPessoa.forEach(p =>{
      if(p["email"]== pessoa.email ||
         (p["cpf"]  == pessoa.cpf   && p["cnpj"] == pessoa.cnpj)
       ) throw new Error("Elemento já cadastrado!");
    })
  }
}
