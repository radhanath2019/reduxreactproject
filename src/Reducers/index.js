const reducer = (state = {say:'How are u'}, action) => {

    switch (action.type) {
      case 'HELLO_REACT':
        return {  say : 'Hello World Redux'  };
      case 'ADD_ITEM':
      return {say : 'i am added' };
      default:
        return state;
    }
    
  };
  
  export default reducer;

  