import {createStore,subscribe} from 'redux';
import reducer,{sortListTable} from './listReducer'

 const store= createStore(reducer)

 store.subscribe(()=>{
    console.log(store.getState() )
})

 export default store;