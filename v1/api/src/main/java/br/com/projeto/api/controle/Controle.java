package br.com.projeto.api.controle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.com.projeto.api.repositorio.Repositorio;
import br.com.projeto.api.modelo.Pessoa;

@RequestMapping("/")
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class Controle {
    @Autowired
    private Repositorio acao;

    @PostMapping("/")
    public Pessoa cadastrar(@RequestBody Pessoa p){
        return acao.save(p);
    }
 
    @GetMapping("/")
    public Iterable<Pessoa> selecionar(){
        return acao.findAll();
    }

    @PutMapping("/")
    public Pessoa editar(@RequestBody Pessoa p){
        return acao.save(p);
    }

    @DeleteMapping("/{id}")
    public void remover(@PathVariable long id){
        acao.deleteById(id);
    }
    
}
