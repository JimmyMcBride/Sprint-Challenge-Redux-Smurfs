import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
} from '../actions'

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        error: '',
        fetchingSmurfs: true
      }
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        error: '',
        fetchingSmurfs: false,
        smurfs: action.payload,
      }
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case ADD_SMURF_START:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: true,
        error: '',
      }
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        addingSmurf: false,
        error: '',
      }
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default reducer