import {
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import { useNavigate } from "react-router-dom";
function FproductCard(props) {
  const index = props.index;
  const { Image, title, price, rating, id } = props.featuredProductDetails;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/productDetails/${id}`, {
          state: { itemDetails: props.featuredProductDetails },
        });
      }}
      className=" md:border border-2 md:border-green-700 p-5 rounded-3xl mb-20"
    >
      <Card sx={{ width: "100%", height: "100%", borderRadius: "20px" }}>
        <CardMedia
          component={"img"}
          src={Image}
          sx={{
            height: "500px",
          }}
        />
        <CardContent>
          <Typography sx={{ textTransform: "uppercase" }} variant="h6">
            {title}
          </Typography>
          <Rating value={rating} />
          <Stack direction={"row"} spacing={10}>
            <IconButton
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <Button
                variant="outlined"
                color="success"
                sx={{ fontSize: "16px" }}
                startIcon={<CurrencyRupeeOutlinedIcon />}
              >
                {price}
              </Button>
              <Button variant="contained" color="success">
                add to cart
              </Button>
            </IconButton>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}

export default FproductCard;
