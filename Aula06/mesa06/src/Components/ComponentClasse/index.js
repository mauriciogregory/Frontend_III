import { Component } from "react";

export default class ComponentClasse extends Component{
    render(){
        const {nome, status} = this.props;
        return(
        <>
            <li>{nome} {status ? "está" : "não está"} convidado para a festa.</li>
        </>
        )
    }
}