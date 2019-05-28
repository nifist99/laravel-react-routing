import React,{Component} from 'react';
const name="niko figit setiawan";
const element=<h1>sastra, dan cerita, {name}</h1>;

export default class Contact extends Component{
    render(){
        return(
            <div>
                Haiiii
                {element}
            </div>
        );
    }
}