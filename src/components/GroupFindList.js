import React, { Component } from 'react';
import {connect} from 'react-redux';
import { findAllGenres, actionMovies} from '../redux/listReducer'
 
class GroupFindList extends Component {

    findAllGenres=()=>{
        console.log("all");

        

    }

    findAction=()=>{
        console.log("action");
        console.log(this.props.myAcionMovies());
        

     
      

    }
    findComedy=()=>{
        console.log("comedy");

    }

    findThriller=()=>{
        console.log("Thriller");

    }

    render() { 
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item"  onClick={this.findAllGenres}  >All Genres</li>
                    <li className="list-group-item"  onClick={this.findAction}  >Action</li>
                    <li className="list-group-item"  onClick={this.findComedy}  >Comedy</li>
                    <li className="list-group-item"   onClick={this.findThriller} >Thriller</li>
                </ul>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        myFindGroupGenres: () =>dispatch( findAllGenres()),
       myAcionMovies: () =>dispatch( actionMovies())
           
        
    }
}
 
export default connect(null, mapDispatchToProps)(GroupFindList);