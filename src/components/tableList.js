import React, { Component } from 'react';
import {connect} from 'react-redux';
import {removeFromtable,sortListTable, actionMovies,comedyMovies,thrillerMovies, findAllGenres} from '../redux/listReducer';
import MyLike from "../components/myLike"
import Like from './like';
import './tableList.css';


class ListMovie extends Component {
  state={
    mysort:[],
    currentPage: 1,
    totalPage:2,
    mySelected:this.props.itemList
  }
    removeUser = id => {
      this.props.removeFromtable(id)
      };

  
    sortAscending=()=>{
        this.setState({
          myitem:this.props.sortFromtable()
        })
    
    }

    findAllGenres=()=>{
        this.props.myFindAllGenresMovies()
        
    }
   
         
    findAction=()=>{
        this.props.myActionMovies()
    }

    findComedy=()=>{ 
        this.props.myComedyMovies()
    
    }

    findThriller=()=>{
       this.props.mythrillerMovies()
    }

    renderShowList=()=>{
      return(
        <table className="table searchable sortable ">
        <thead>
           <tr>
              <th scope="col"  >Title</th>
              <th scope="col">Genre</th>
              <th scope="col"  onClick={this.sortAscending }   >Stock
                  <i className="fas fa-sort-down"></i>
              </th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
              <th scope="col">Delete</th>
            </tr> 
          </thead>
          <tbody>
              {this.props.itemList.length>0?this.props.itemList.map((movie) => (
              <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td onClick={this.sortAscending}>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>{movie.liked? <MyLike /> :<Like/> }</td>
                  <td>
                    <button className="btn  btn-danger" onClick={() => this.removeUser(movie._id)}>Delete</button>
                  </td>
              </tr>
              ))
              :this.state.mySelected
            
            }
          </tbody>
      </table>
      )
     
    }



     
    render() { 
      console.log(this.props,"table");
      
        return (
            <div className="container"  >
                <h1>Showing 8  movies in database</h1>
                <div className="row">
                    <div className="col-md-4"  >
                      <ul className="list-group">
                        <li className="list-group-item"  onClick={this.findAllGenres}  >All Genres</li>
                        <li className="list-group-item"  onClick={this.findAction}  >Action</li>
                        <li className="list-group-item"  onClick={this.findComedy}  >Comedy</li>
                        <li className="list-group-item"   onClick={this.findThriller} >Thriller</li>
                    </ul>
                    </div>
                    <div className="col-md-8"  >
                       {this.renderShowList()}
                          
                    </div>
                </div>
      
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
    removeFromtable: (itemId) => dispatch(removeFromtable(itemId)),
    sortFromtable:() => dispatch(sortListTable()),
    myFindAllGenresMovies:() => dispatch( findAllGenres()),
    myActionMovies:() => dispatch( actionMovies()),
    myComedyMovies:() => dispatch(comedyMovies()),
    mythrillerMovies:() => dispatch(thrillerMovies())
     
    }
  
}
 
export default connect(mapStateToProps,mapDispatchToProps)( ListMovie)  ;


