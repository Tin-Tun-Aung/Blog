import React from "react";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name : "",
            password : ""
        }
    }
    onInputChange=(event)=>{
        this.setState({
            name : event.target.value
        })
    }

    onPasswordChange=(event)=>{
        this.setState({
            password : event.target.value
        })
    }

    onLoginSubmit=(event)=>{
        this.props.login(this.state.name,this.state.password);
        event.preventDefault();

        
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onLoginSubmit}>
                    <label>
                        Name :
                        <input type="text" value={this.state.name} onChange={this.onInputChange}/>
                    </label>

                    <label>
                        Password: 
                        <input type="password" value={this.state.password} onChange={this.onPasswordChange}/>
                    </label>

                    <button type="submit"> Login </button>
                </form>
                
            </div>

        );
    }
}

export default Login;
