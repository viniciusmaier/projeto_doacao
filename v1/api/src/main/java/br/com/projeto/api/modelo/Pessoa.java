package br.com.projeto.api.modelo;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Table(name="PESSOA")
@Getter
@Setter
@Entity
public class Pessoa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nome;
    private String cpf;
    private String cnpj;
    private String bo_doador;
    private String bo_instituicao;
    private String cep;
    private String email;
    private String senha;
}
