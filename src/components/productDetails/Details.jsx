import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams, useLocation } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductInfo } from "../../Redux/configFiles/productDetails";

function Details(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const { itemDetails } = location.state || {};
  const dispatch = useDispatch();

  return (
    <div className=" w-full h-auto pb-10 bg-slate-200 ">
      <div className=" w-full h-auto flex items-center justify-center">
        <div className=" w-full min-h-screen bg-slate-200 flex items-center justify-center">
          <div className=" border border-1 border-green-800 px-5 py-5 rounded-3xl">
            <Card
              sx={{
                maxWidth: "945px",
                display: "flex",
                gap: "10px",
                borderRadius: "20px",
              }}
            >
              <div>
                <CardMedia
                  component={"img"}
                  src={itemDetails.Image}
                  sx={{
                    height: "500px",
                  }}
                />
              </div>
              <div className=" flex items-center">
                <div className=" px-5">
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h3"
                      sx={{ textTransform: "uppercase" }}
                    >
                      {itemDetails.title}
                    </Typography>
                    <Rating value={itemDetails.rating} readOnly size="large" />
                    <Typography gutterBottom variant="h4">
                      {itemDetails.price}
                      <CurrencyRupeeIcon />
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body1"
                      sx={{ width: "400px" }}
                    >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Alias rem, eveniet provident natus ullam perspiciatis!
                      Reiciendis officia sint sunt illum quidem dolorum.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => {
                        navigate(`/addressform/${itemDetails.id}`);
                        dispatch(getProductInfo(itemDetails));
                      }}
                      size="large"
                      variant="contained"
                      color="success"
                      startIcon={<FlashOnIcon />}
                    >
                      Buy now
                    </Button>
                    <Button
                      size="large"
                      variant="contained"
                      color="warning"
                      startIcon={<AddShoppingCartIcon />}
                    >
                      To cart
                    </Button>
                  </CardActions>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
