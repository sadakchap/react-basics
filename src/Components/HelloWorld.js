import React from 'react';

// 2 types of component
// stateless component -- similar to App component (Functional Component)
// class Based Component

class HelloWorld extends React.Component{
    render(){
        return(
            <h1>Hello {this.props.name}</h1>
        )
    }
}

export default HelloWorld;