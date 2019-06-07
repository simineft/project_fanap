import React, { Component } from 'react';
import {connect}  from 'react-redux';
import {likeListBlack} from '../redux/listReducer';
 

 
class Like extends Component {
    state={
        liked:false,
        color:''
    }

    handleLike=()=>{
       let newState={...this.state}
       newState.liked=!newState.liked
       newState.color="red"
       this.setState(newState)
    }

 

    render() { 
     console.log(this.props,"[likeeeeeeeee]")
 
    
        return (
            <div>
                {this.state.liked
                ?
                 <i  style={{color:this.state.color}}  className="far fa-heart"  onClick={this.handleLike} ></i>
                :
                  <i  className="far fa-heart"  onClick={this.handleLike} ></i>

                }
               
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      itemList:state.movies,
     
    }
  }
 
const mapDispatchToProps = (dispatch) => {
    return {
        likeBlack:() =>dispatch(likeListBlack()),
  
            
        
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (Like);



