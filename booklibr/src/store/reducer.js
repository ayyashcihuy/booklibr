import Favorite from "@mui/icons-material/Favorite";
import actionType from "./actionType";

const booklibr = {
    shopName: "BookLibr",
    bookData: [],
    detailData: null,
    favoriteData: []
}

function reducer (state = booklibr, action) {
    switch (action.type) {
        case actionType.FETCH_DATA:
            return {
            ... state,
                bookData: action.payload
            }
        ;
        case actionType.SET_DETAIL_DATA:
            return {
                ... state, 
                detailData: action.payload
            }
        ;
        case actionType.ADD_TO_FAVORITE:
            return {
                ... state,
                favoriteData: [...state.favoriteData, action.payload]
            }    
        ;
        default:
            return state;
    }
}

export default reducer