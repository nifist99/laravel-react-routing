import React,{Component} from 'react';

function Nama(props){
    return <h4>nama {props.nama}</h4>
}

export default class Props extends Component{
    render(){
        return(
            <div>
                <Nama nama="sendy"/>
                <Nama nama="febri"/>
                <Nama nama="anisa"/>
            </div>
        );
    }
}