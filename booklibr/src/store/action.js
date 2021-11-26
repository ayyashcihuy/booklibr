import axios from "axios"
import actionType from "./actionType"

export const setData = (data) => {
    return {
        type: actionType.FETCH_DATA,
        payload: data,
    }
}

export const getData = () => {
    return(dispatch) => {
        axios({
            method: "GET",
            url:"https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=b5p10moTYEsiImn4BL9cZwlinoVg5TLt",
        })
        .then(({data}) => {
            data = data.results
            dispatch(setData(data))
        })
        .catch((err) => {
            dispatch(setData([]))
        })
    }
}