import React from "react";

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username : "",
            password : ""
        }
        this.nameArray=[];
        
    }
    

    onUserNameChange=(event)=>{
        this.setState({
            username : event.target.value
        })

    }
    onPasswordChange=(event)=>{
        this.setState({
            password : event.target.value
        })
    }

    onHandleSubmit=(event)=>{
        this.props.userLogin(this.state.username,this.state.password);
       

        event.preventDefault();


    }


    render(){
        return (
            <div>
                <hr/>
                <br/>
                <form onSubmit={this.onHandleSubmit}> 
                    <label>
                        Register Form:  <br/><br/>
                    </label>
                    <label>
                        Name :
                        <input type="text" value={this.state.username} onChange={this.onUserNameChange}/>
                    </label>
                    <label>
                        Password:
                        <input type="password" value={this.state.password} onChange={this.onPasswordChange}/>
                    </label>

                    <button type="submit"> Register </button>
                </form>
            </div>
        );
    }
}

export default Register;