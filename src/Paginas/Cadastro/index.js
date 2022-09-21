import React, {Component} from 'react';
import firebase from '../../Firebase.js'


    class Cadastro extends Component{
        constructor(props){
            super(props);
            this.state = {
                nome: "",
                sobrenome: "",
                datansc: "",
                email: "",
                senha: ""

            }
            this.gravar = this.gravar.bind(this);
        }
    
      async gravar(){
            await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
            .then(async (retorno) => {
                await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
                    nome: this.state.nome,
                    sobrenome: this.state.sobrenome,
                    datansc: this.state.datansc
                })
            });
            
        
        }
        /*
        gravar(){
            firebase.firestore().collection("usuario").add({
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,
                datansc: this.state.datansc,
                email: this.state.email,
                senha: this.state.senha
            })
        }*/

    render(){
        return(
            <div> 
                <h1>Página de Cadastro</h1>
                <input type="text" placeholder='Nome' onChange={(e) => this.setState({nome: e.target.value})} />
                <br/>
                <input type="text" placeholder='Sobrenome' onChange={(e) => this.setState({sobrenome: e.target.value})} />
                <br/>
                <input type="text" placeholder='Data nascimento' onChange={(e) => this.setState({datansc: e.target.value})} />
                <br/>
                <input type="text" placeholder='Email' onChange={(e) => this.setState({email: e.target.value})} />
                <br/>
                <input type="text" placeholder='Senha' onChange={(e) => this.setState({senha: e.target.value})} />
                <br/>

                <button onClick={this.gravar}>Gravar</button>
            </div>
         )
    }
}

export default Cadastro;