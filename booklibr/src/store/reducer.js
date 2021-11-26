import actionType from "./actionType";

const booklibr = {
    shopName: "BookLibr",
    bookData: [],
    detailData: null
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
        default:
            return state;
    }
}

export default reducer