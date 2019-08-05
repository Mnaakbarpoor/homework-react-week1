import React from 'react';

class Static extends React.Component{

    render(){
        return(
            <div>
                <h1>{this.props.description} : {this.props.detail}</h1>
            </div>
        )
    }
}


export default Static;
