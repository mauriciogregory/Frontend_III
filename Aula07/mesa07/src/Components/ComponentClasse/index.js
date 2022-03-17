import { Component } from "react";

export default class ComponentClasse extends Component{
    render(){
        return(
        <>
            <li>{this.props.id} {this.props.nome} {this.props.status ? "está" : "não está"} convidado para a festa.</li>
        </>
        )
    }
}