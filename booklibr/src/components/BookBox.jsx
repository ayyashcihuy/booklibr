import React from "react";
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import {setDetailData} from "../store/action"
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

function BookBox(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const bookData = props.value
  const index = props.id

  function getDetail(params, data) {
    dispatch(setDetailData(data))
    navigate(`/detail/${params}`)
  }
    return (
        <div>
            <Card sx={{ width: 345, maxHeight: 345}}>
              <CardMedia
                component="img"
                height="140"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" noWrap={true}>
                  {bookData.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {bookData.author}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={
                  () => {
                    getDetail(index, bookData)
                  }
                }>Learn More</Button>
              </CardActions>
            </Card>
        </div>
    )
}

export default BookBox