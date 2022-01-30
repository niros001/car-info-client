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
        const {token, email} = action.payload;
        localStorage.setItem('token', token);
        localStorage.setItem('email', email);
        return {
          ...state,
          loading: false,
          loaded: true,
          data: ({token, email}),
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
        localStorage.removeItem('email');
        return initialState;
      }
      case 'USER_RE_LOGGED': {
        const token = localStorage.getItem('token');
        const email = localStorage.getItem('email');
        return {
          ...state,
          loading: false,
          loaded: true,
          data: {token, email},
          error: null,
        }
      }
      default:
        return state;
    }
  },
}

export default authReducer;
