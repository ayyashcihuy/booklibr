import React from "react";
import BookBox from "../components/BookBox";
import { useSelector } from "react-redux";
import { Typography, Container, Grid } from "@mui/material"


function Library() {
    const {favoriteData} = useSelector((state) => {
        return {
            favoriteData: state.favoriteData
        }
    })

    console.log(favoriteData)
return (
    <div>
        <div className="titleBar">
        <Typography variant="h4" component ="h5">
        Selamat Datang di Library
        </Typography>
        </div>
        <Container maxwidth ="sm">
            <Grid container spacing={2}>
        {
            favoriteData && favoriteData.length > 0 ? 
            favoriteData.map((e, index) => {
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

export default Library;