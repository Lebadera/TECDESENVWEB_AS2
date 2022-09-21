import React, {Component} from 'react';
import { Link, Navigate } from 'react-router-dom';
import firebase from '../../Firebase.js'
import Principal from '../Principal/index.js';

class Login extends Component{
    constructor(props){
      super(props);
      this.state = {
        email: "",
        senha: ""

    }
       this.entrar = this.entrar.bind(this);
    }


   async entrar()
    {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
        .then(()=> {

            window.location.href = './principal'
        }
       
        )
        
    }


    render(){
      return(
        <div>
            <h1>Login</h1>
            <input type="text" placeholder='Email' onChange={(e) => this.setState({email: e.target.value})} />
            <br/>
            <input type="text" placeholder='Senha' onChange={(e) => this.setState({senha: e.target.value})} />
            <br/>
            <button onClick={this.entrar}>Entrar</button>
            <Link to="/Cadastro"><button>Cadastro</button></Link> <br/>
        </div>
      )
    }
}

export default Login;