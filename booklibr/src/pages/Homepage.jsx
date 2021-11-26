import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/action";
import BookBox from "../components/BookBox";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

function Homepage() {
    const dispatch = useDispatch()
    const {shopName, bookData} = useSelector((state) => {
        return {
            shopName: state.shopName,
            bookData: state.bookData
        }
    })
    useEffect(() => {
        dispatch(getData())
    }, [])
return (
    <div>
        <Typography variant="h4" component ="h5">
        Selamat Datang di Booklibr
        </Typography>
        <BookBox/>
    </div>
) 
}

export default Homepage;