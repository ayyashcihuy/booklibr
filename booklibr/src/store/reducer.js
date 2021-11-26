import actionType from "./actionType";

const booklibr = {
    shopName: "BookLibr",
    bookData: []
}

function reducer (state = booklibr, action) {
    switch (action.type) {
        case actionType.FETCH_DATA:
            return {
            ... state,
                bookData: action.payload
            }
        ;
        default:
            return state;
    }
}

export default reducer