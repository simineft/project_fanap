

const REMOVE_FROM_LIST="REMOVE-FROM-LIST";
const SORT_LIST_TABLE="SORT-LIST-TABLE";
const Like_LIST_BLACK="LIKE-LIST-BLACK";
const ALL_GENRES_MOVIES="ALL-GENRES-MOVIES";
const ACTION_MOVIES="Action-MOVIES";
const COMEDY_MOVIES="COMEDY-MOVIES";
const THRILLER_MOVIES="THRILLER-MOVIES";


const removeFromtable=(itemId)=>({
    type:REMOVE_FROM_LIST,
    itemId
})
const sortListTable=()=>({
  type:SORT_LIST_TABLE

})
const findAllGenres=()=>({
  type:ALL_GENRES_MOVIES,
 
})
const actionMovies=()=>({
  type:ACTION_MOVIES,
 
})
const comedyMovies=()=>({
  type:COMEDY_MOVIES,
 
})
const thrillerMovies=()=>({
  type:THRILLER_MOVIES,
 
})

const likeListBlack=()=>({
  type:Like_LIST_BLACK,
 
})

const initialState={
    movies :[
        {
          _id: "5b21ca3eeb7f6fbccd471815",
          title: "Terminator",
          genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
          numberInStock: 6,
          dailyRentalRate: 2.5,
          publishDate: "2018-01-03T19:04:28.809Z",
          liked: true
        },
        {
          _id: "5b21ca3eeb7f6fbccd471816",
          title: "Die Hard",
          genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
          numberInStock: 5,
          dailyRentalRate: 2.5
        },
        {
          _id: "5b21ca3eeb7f6fbccd471817",
          title: "Get Out",
          genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
          numberInStock: 8,
          dailyRentalRate: 3.5
        },
        {
          _id: "5b21ca3eeb7f6fbccd471819",
          title: "Trip to Italy",
          genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
          numberInStock: 7,
          dailyRentalRate: 3.5
        },
        {
          _id: "5b21ca3eeb7f6fbccd47181a",
          title: "Airplane",
          genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
          numberInStock: 7,
          dailyRentalRate: 3.5
        },
        {
          _id: "5b21ca3eeb7f6fbccd47181b",
          title: "Wedding Crashers",
          genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
          numberInStock: 7,
          dailyRentalRate: 3.5
        },
        {
          _id: "5b21ca3eeb7f6fbccd47181e",
          title: "Gone Girl",
          genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
          numberInStock: 7,
          dailyRentalRate: 4.5
        },
        {
          _id: "5b21ca3eeb7f6fbccd47181f",
          title: "The Sixth Sense",
          genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
          numberInStock: 4,
          dailyRentalRate: 3.5
        },
        {
          _id: "5b21ca3eeb7f6fbccd471821",
          title: "The Avengers",
          genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
          numberInStock: 7,
          dailyRentalRate: 3.5
        }
       
      ],
     
}

const reducerFilterComedy=(state)=>{
  return {
    ...state,
    // movies:state.movies.map(item =>item.genre.name==="Comedy") 
    movies:state.movies.map(movie=>{
      console.log(movie._id);
      
    })  
  }

}

const reducerFilterAction=(state)=>{
    return{
      ...state,
       movies:state.movies.filter(item =>item.genre.name==="Action")   
   }
}

const reducerFilterThriller=(state)=>{
  return{
    ...state,
     movies:state.movies.filter(item =>item.genre.name==="Thriller")
}
}

const reducerAllGeneresMovies=(state)=>{
  return{
    ...state,
     movies: state.movies

}
}



const reducer=(state=initialState ,action )=>{
    switch (action.type) {
        case REMOVE_FROM_LIST:
            return{
                ...state,
                movies:state.movies.filter(movie => movie._id !== action.itemId)
            }
        case SORT_LIST_TABLE:
            return{
                  ...state,
                movies:state.movies.sort((a,b)=> a.numberInStock-b.numberInStock)
            }
        case ALL_GENRES_MOVIES:return  reducerAllGeneresMovies(state)
             
        case ACTION_MOVIES:return  reducerFilterAction(state)
              
        case  COMEDY_MOVIES:return reducerFilterComedy(state)

        case THRILLER_MOVIES:return reducerFilterThriller(state)
              
              
         default:
              return state;
    }

}

export{
  removeFromtable,
  sortListTable,
  likeListBlack,
  findAllGenres,
  actionMovies,
  comedyMovies,
  thrillerMovies
  }

export default reducer

