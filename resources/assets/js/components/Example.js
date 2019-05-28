import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

class Example extends Component {

    constructor(){
        super();
        this.state={
            item:[]
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header tulisan">Example Component</div>
                            <div className="card-body">
                                <Header/>
                                <Footer/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


if (document.getElementById('example')) {
    ReactDOM.render(<Example/>, document.getElementById('example'));
}

export default Example;
