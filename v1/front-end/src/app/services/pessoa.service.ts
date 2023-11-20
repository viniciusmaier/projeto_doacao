import { Pessoa } from '../components/cadastro-pessoa/model/pessoa';
import { Observable } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class PessoaService {


  constructor(
      private http : HttpClient
  ){
      // this.http.get<Pessoa>(this.url).
      //   subscribe((response) => this.dadosApi.push(response));
  }
  private url : string = 'http://localhost:8080/';
  pessoas : Pessoa[] = [];

  HttpOptions = {
    "headers" : new HttpHeaders( {'Content-Type' : 'application/json'} )
  }
  getAllApi : Observable<Pessoa[]> = this.getAll();

  getAll():Observable<Pessoa[]>{
     return this.http.get<Pessoa[]>(this.url)
  }

  ngOnInit(){
    this.getAll();
  }

  getAllPessoas() : Pessoa[]{
    this.getAllApi.subscribe(retorno => {
       this.pessoas = retorno
    });
    return this.pessoas
  }

  cadastrarPessoa(pessoa : Pessoa) : Observable<Pessoa>{
    console.log(pessoa)
    return this.http.post<Pessoa>(this.url, pessoa);
  }

}
