import React from 'react';
export default class List extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.header}</h3>

                <p>{this.props.content}</p>
                
                <h1>{this.props.date}</h1>
            </div>
        );
    }
}