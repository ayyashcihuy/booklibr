import * as React from 'react';
import {useNavigate} from "react-router-dom"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addToFavoriteData } from '../store/action';
import { useSelector, useDispatch } from 'react-redux';

export default function LearnMore() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {detailData} = useSelector((state) => {
        return {
            detailData: state.detailData
        }
    })
    React.useEffect(() => {
    }, [detailData])

    function addToFavorite(data) {
        data.status = "list"
        console.log(data)
        dispatch(addToFavoriteData(data))
        navigate("/")
    }

  return (
      <div className="detailContainer">
        <Card sx={{ maxWidth: 600 }}>
        <CardHeader
            title={detailData.title}
            subheader={detailData.author + ", Published by: " + detailData.publisher}
            />
        <CardMedia
            component="img"
            height="500"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
            alt=""
            />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
            <p className="descFont">Description</p>
            {detailData.description}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={() => {
                addToFavorite(detailData)
            }}>
            <FavoriteIcon />
            </IconButton>
        </CardActions>
        </Card>
    </div>
  );
}
