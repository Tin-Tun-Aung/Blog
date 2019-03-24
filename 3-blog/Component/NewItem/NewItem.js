import React from "react";
import List from '../List/List';

class NewItem extends React.Component{
    constructor(props){
        super(props);
        this.header=React.createRef();
        this.content=React.createRef();
        this.date=React.createRef();
        this.nameArray=[];

        this.state = {
           newsArrayItem : []
        }
        
    }
    

    onHandleSubmit=(event)=>{
        console.log(this.header.current.value,this.content.current.value,this.date.current.value);
        event.preventDefault();

        this.props.addNewItem(this.header.current.value,this.content.current.value,this.date.current.value);

        const addlist= JSON.parse(localStorage.getItem("news"));
        addlist.push({header: this.header.current.value, content: this.content.current.value, date : this.date.current.value});

        this.setState({
            newsArrayItem : addlist
        })

        this.header.current.value="";
        this.content.current.value="";
        this.date.current.value="";

       
    }


    render(){
        return (
            <div>
                <hr/>
                <br/>

                {
                  this.state.newsArrayItem.map((item,index)=>{
                      return <List header={item.header} content={item.content} date={item.date} key={index} />
                  })
                }

                <form onSubmit={this.onHandleSubmit}> 
                    <label>
                        Add New Item:  <br/><br/>
                    </label>
                    <label>
                        Header :
                        <input type="text" ref={this.header}/>
                    </label>
                    <label>
                        Content :
                        <input type="text" ref={this.content}/>
                    </label>

                    <label>
                        Date :
                        <input type="date" ref={this.date}/>
                    </label>

                    <button type="submit"> Add </button>
                </form>
            </div>
        );
    }
}

export default NewItem;