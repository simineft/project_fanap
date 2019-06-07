import React, { Component } from 'react';
 
class MyLike extends Component {
    state={
        color:"red",
        liked:false
    }
    handleUnlike=()=>{
        this.setState(oldState=>{
        return{
            ...oldState,
            liked:!oldState.liked,
       
        }
        })
    }
    render() { 
        return (
            <div>
                
                 {!this.state.liked
                ?
                 <i  style={{color:this.state.color}}  className="far fa-heart"  onClick={this.handleUnlike} ></i>
                :
                  <i  className="far fa-heart"  onClick={this.handleUnlike} ></i>

                }
            </div>
        );
    }
}
 
export default MyLike;