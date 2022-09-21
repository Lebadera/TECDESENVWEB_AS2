import React, {Component} from 'react';
import firebase from '../../Firebase.js'

class Principal extends Component{

    constructor(props){
      super(props);
      this.state = {
        nome: "",
        sobrenome: "",
        datansc: ""
      }
    }



    async componentDidMount(){

      await firebase.auth().onAuthStateChanged(async (usuario) => {
        if(usuario){
          var uid = usuario.uid;
          console.log(uid)
          var test = await firebase.firestore().collection("usuario").doc(uid).get()
          .then(async (retorno) => {
           this.setState({
              nome: retorno.data().nome,
              sobrenome: retorno.data().sobrenome,
              datansc: retorno.data().datansc
           });
        });
        console.log(test)
        }
      });
    }

    render(){
      return(
        <div>
            <h1>Nome: {this.state.nome}</h1>
            <h1>Sobrenome: {this.state.sobrenome}</h1>
            <h1>Data de Nascimento: {this.state.datansc}</h1>
        </div>
      )
    }
}

export default Principal;