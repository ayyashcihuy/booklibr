import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/action";
import BookBox from "../components/BookBox";
import { Typography, Container, Grid } from "@mui/material"

function Homepage() {
    const dispatch = useDispatch()
    const {bookData} = useSelector((state) => {
        return {
            bookData: state.bookData
        }
    })
    useEffect(() => {
        dispatch(getData())
    }, [])
return (
    <div>
        <div className="titleBar">
        <Typography variant="h4" component ="h5">
        Selamat Datang di Booklibr
        </Typography>
        </div>
        <Container maxwidth ="sm">
            <Grid container spacing={2}>
        {
            bookData && bookData.length > 0 ? 
            bookData.map((e, index) => {
                return (
                    <Grid item xs={4} key={index}>
                        <BookBox value={e} id={index}/>
                    </Grid>
                        )
                    }) : null
                }
                </Grid>
        </Container>
    </div>
) 
}

export default Homepage;