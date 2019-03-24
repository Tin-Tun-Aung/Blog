import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Login from './1-shopping-list/ShoppingList';
//import Login from './3-blog/Component/Login/Login';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import NewItem from './Component/NewItem/NewItem';

class Blog extends React.Component {
    // render() {
    //   return (
    //     <Router>
    //       <Link to="/">Home</Link>
          
            
    //         <Route
    //           exact
    //           path="/Login"
    //           component={props => <Login {...props} />}
    //         />
    //         <Route path="/register" component={Register} />

    //         <Route path="List" component={List} /> 
            
    //         <Route path="/newItem"
    //         render={(props) => <Topics {...props}/>} 
    //         />
          
    //     </Router>
    //   );
    // }

    constructor(props){
      super(props);
      this.state={
        username : "",
        password : "",
        isUserExist: false,
        
      }
      this.nameArray=[];
      this.newsArray= []
      
    }

    clickLogin=(name,password)=>{
      console.log("ClickLogin",name,"Password",password);
      const users=JSON.parse(localStorage.getItem("users"));

      for(let i=0; i<users.length;i++){
        if(name===users[i].name && password===users[i].password){
            this.setState({
              isUserExist : true
            })
            return;
        }
      }
    }

    clickRegister=(name,password)=>{
      this.setState({
        username : name,
        password : password,
      })

      this.nameArray.push({name: name, password: password});

      localStorage.setItem("users",JSON.stringify(this.nameArray));

      const users=JSON.parse(localStorage.getItem("users"));

      console.log(users[0].name,users[0].password);

    }

    addNewItem=(header,content,date)=>{
     
       const array=JSON.parse(localStorage.getItem("news"));
      
      array.push({header : header, content : content, date : date});
      this.nameArray=array;
      console.log(array);
      this.setState({
        newsArray : array
      })
      // this.newsArray.push({header : header, content : content, date : date});

      localStorage.setItem("news",JSON.stringify(this.nameArray));

      const news=JSON.parse(localStorage.getItem("news"));

      //console.log(news[0].header,news[0].content,news[0].date);

    }

    render(){
      return(
          <Router>
            <div>

              {/* {/* {this.state.isUserExist ?<Login  login={this.clickLogin} /> : <Register userLogin={this.clickRegister}/>} <br/>

              {this.state.isUserExist ? <NewItem /> : "" } */}

              <Link to="/register">Register</Link><br></br> 

              <Link to="/login">Login </Link>
            </div>

            <Route path="/login" component={ props=><Login  login={this.clickLogin}/> } />
              
            {this.state.isUserExist ? <NewItem addNewItem={this.addNewItem} /> : "" }

            {/* <Route path="/page2" render={props=> this.state.isLogin? <Welcome {...props} name={this.state.username}/>  : <Redirect to ="/login" /> } /> */}

            <Route path="/register" component={props=> <Register userLogin={this.clickRegister} /> } />
          
          </Router>
        
        
      );
    }
    
  }

  export default Blog;