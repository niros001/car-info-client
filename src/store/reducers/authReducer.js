const initialState = {loaded: false, loading: false, error: null, data: null};

const authReducer = {
  user: (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN@ASYNC_REQUEST':
      case 'SIGNUP@ASYNC_REQUEST': {
        return {
          ...state,
          loading: true,
        };
      }
      case 'LOGIN@ASYNC_SUCCESS':
      case 'SIGNUP@ASYNC_SUCCESS': {
        const {password, ...user} = action.payload;
        localStorage.setItem('token', user.token);
        return {
          ...state,
          loading: false,
          loaded: true,
          data: user,
          error: null,
        };
      }
      case 'LOGIN@ASYNC_FAILURE':
      case 'SIGNUP@ASYNC_FAILURE': {
        return {
          ...state,
          loading: false,
          loaded: true,
          data: null,
          error: action.payload,
        };
      }
      case 'LOGOUT': {
        localStorage.removeItem('token');
        return initialState;
      }
      default:
        return state;
    }
  },
}

export default authReducer;
