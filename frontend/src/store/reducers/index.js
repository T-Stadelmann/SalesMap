import { combineReducers } from "redux";

import {
    fileUploadErrors, fileUploadSuccess, importLoading, importLoaded, toggleFileUpload, toggleUploadPopUp
} from "../types";

import { login, logout, fetchContacts, toggleInfoDrawer, toggleFilterDrawer, toggleUploadDrawer, toggleDragPan, toggleScrollZoom, setClickedPinIndex, toggleMenu, toggleColorPicker, toggleShowChart } from "../types";


const initialState = {
  token: null,
  userAuth: null,
  error: null,
  coords: null,
  contacts: null,
  showInfoDrawer: false,
  showFilterDrawer: false,
  showUploadDrawer: false,
  fileUploadErrors: null,
  fileUploadSuccess: null,
  importLoading: false,
  dragPan: true,
  clickedPinIndex: null,
  showFileUpload: false,
  showMenu: false,
  showColorPicker: false,
  showChart: false,
  toggleUploadPopUp: false,
};

const loginLogoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case login:
      return {
        token: action.payload,
        userAuth: true,
      };
    case logout:
      return {
        token: null,
        userAuth: null,
        error: null,
      };
    default:
      return state;
  }
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
      case fetchContacts:
          return {
              contacts: action.payload,
              filteredContacts: action.payload
          }
      default:
          return state;
  }
};


const toggleDrawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case toggleInfoDrawer:
        return {
            ...state,
            showInfoDrawer: !state.showInfoDrawer,
            // dragPan: state.showInfoDrawer,
            // clickedPinIndex: state.showInfoDrawer ? false : state.clickedPinIndex
            scrollZoom: state.showInfoDrawer && !state.showFilterDrawer
        }
    case toggleFilterDrawer:
      return {
          ...state,
            showFilterDrawer: !state.showFilterDrawer,
            // clickedPinIndex: null,
            // showChart: state.showChart ? !state.showChart : state.showChart,
            dragPan: state.showFilterDrawer===undefined ? false : state.showFilterDrawer,
            scrollZoom: state.showFilterDrawer && !state.showInfoDrawer
        }
    case toggleUploadDrawer:
      return {
          ...state,
            showUploadDrawer: !state.showUploadDrawer
        }
    case toggleDragPan:
      return {
          ...state,
            dragPan: !state.dragPan
          }
    case toggleScrollZoom:
      return {
          ...state,
            scrollZoom: state.scrollZoom
            }   
    case setClickedPinIndex:
      return {
          ...state,
           clickedPinIndex: action.payload,
          //  showInfoDrawer: action.payload!==null ? true : false,
          }
    case toggleMenu:
      return {
          ...state,
            showMenu: !state.showMenu,
            showFilterDrawer: false
            }   
    case toggleColorPicker:
      return {
          ...state,
            showColorPicker: !state.showColorPicker
            }  
    case toggleShowChart:
      return {
            ...state,
            showChart: state.clickedPinIndex!==null ? !state.showChart : false
            }    
    default:
        return state;
  } 
};

const fileUploadReducer = (state = initialState, action) => {
  switch (action.type) {
      case fileUploadSuccess:
          return {
              fileUploadErrors: false,
              fileUploadSuccess: true
                  }
      case fileUploadErrors:
          return {
              fileUploadErrors: true,
              fileUploadSuccess: false
                  }
      case toggleFileUpload:
          return {
              fileUploadErrors: null,
              fileUploadSuccess: null
                  }
                  default:
            return {
                ...state
            }
  }
};

const importReducer = (state = initialState, action) => {
  switch (action.type) {
      case importLoading:
        return {
            ...state,
            importLoading: true
        }
    case importLoaded:
      return {
          ...state,
        importLoading: false
        }
    default:
        return state;
  }
};


const togglePopUpReducer = (state = initialState, action) => {
  switch (action.type) {
      case toggleUploadPopUp:
          return {
              toggleUploadPopUp: !toggleUploadPopUp,
          }
      default:
          return state;
  }
};



const allReducers = combineReducers({
  loginLogout: loginLogoutReducer,
  contacts: contactsReducer,
  toggleDrawer: toggleDrawerReducer,
  fileUpload: fileUploadReducer,
  importReducer: importReducer,
  togglePopUp: togglePopUpReducer,
});

export default allReducers;
