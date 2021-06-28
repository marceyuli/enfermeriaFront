import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: {
    username: "",
    password: ""
  };
  public usuarioService;

  constructor( usuarioService: UsuarioService) {
    this.user = {
      username: "",
      password: ""
    };
    this.usuarioService= usuarioService;
  }

  ngOnInit(): void {
  }
  login() {
    this.usuarioService.login(this.user).subscribe(
      response => {
        alert(response);
      },
      error => {
        alert("error");
      }
    );
  }

}
