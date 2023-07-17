import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import {useNavigate} from 'react-router-dom'
import React from "react";
import Details from "../productDetails/Details";

function TrendProducts(props) {
  const navigate = useNavigate();
  const { Image, title, price, rating, id } = props.trendItems;
  const item = props.trendItems
  return (
    <div onClick={()=>{
        navigate(`/productDetails/${item}`, { state : {itemDetails : props.trendItems}})
    }} className="w-auto h-auto border border-1 border-green-700 py-5 px-5 rounded-3xl flex items-center justify-center cursor-pointer">
      <Card sx={{ maxWidth: 345, borderRadius: "10px" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          src={Image}
          sx={{
            height: "300px",
            objectFit: "contain",
            marginTop: "20px",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions sx={{ marginBottom: "5px" }}>
          <Button size="small" variant="" endIcon={<AddShoppingCartIcon />}>
            To cart
          </Button>
          <Button size="small" variant="" endIcon={<FlashOnIcon />}>
            Buy now
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default TrendProducts;
