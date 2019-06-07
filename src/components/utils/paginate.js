import  _  from 'lodash';

 export default  function  paginate (itemList,currentPage,pageSize){
    const startIndex=(currentPage-1) * pageSize;
      return  _(itemList)
      .slice(startIndex)
      .take(pageSize)
      .value()

}

