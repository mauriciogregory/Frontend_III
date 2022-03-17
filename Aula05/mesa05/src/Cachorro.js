import { Component } from "react";

export default class Cachorro extends Component {
    render(){
        const {nome, idade, raca} = this.data;
        return(
            <>
                <p>{nome}</p>
                <p>{idade}</p>
                <p>{raca}</p>
            </>
        )
    }
}