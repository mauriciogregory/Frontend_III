import { Component } from "react";

export default class ComponentClasse extends Component{
    render(){
        const {nome, naLista} = this.props;
        return(
        <>
            <li>{nome} {naLista ? "está" : "não está"} convidado para a festa.</li>
        </>
        )
    }
}