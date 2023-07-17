import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {getPaymentInfo} from '../../Redux/configFiles/paymentDetails'

function PaymentMethord() {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(false);
  const shippingDetails = useSelector((state) => state.shippingInfo.details);
  const navigate = useNavigate()
  const [cardName, setCardName]= useState();
  const [cardNo, setCardNo]= useState();
  const [expiry, setExpiry]= useState();
  const [cvv, setCvv]= useState();
  
  const paymentInfo  = {
    cardName,
    cardNo,
    expiry,
    cvv
  }

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  useEffect(() => {
    console.log(shippingDetails);
  });

  const handlePayment =()=>{
    dispatch(getPaymentInfo(paymentInfo))
    navigate('/revieworder')
  }

  return (
    <div className=" w-full min-h-screen bg-slate-200">
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className=" w-[900px] h-auto px-10 py-10 bg-white">
          <Stack>
            <Typography variant="h6" gutterBottom>
              Payment Details
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField onChange={(e)=> setCardName(e.target.value)}
                  label="Name on card"
                  id="name-on-card"
                  required
                  fullWidth
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField onChange={(e)=> setCardNo(e.target.value)}
                  label="Card No"
                  id="name-on-card"
                  required
                  fullWidth
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField onChange={(e)=> setExpiry(e.target.value)}
                  label="Expiry date"
                  id="name-on-card"
                  required
                  fullWidth
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField onChange={(e)=> setCvv(e.target.value)}
                  label="CVV"
                  id="name-on-card"
                  required
                  fullWidth
                  variant="standard"
                  helperText="last 3 digits on the signature strip"
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      color="primary"
                      name="saveCard"
                      value="yes"
                    />
                  }
                  label="Remember credit card details for next time"
                />
              </Grid>

              <Grid item>
                <Stack
                  direction={"row"}
                  spacing={2}
                  sx={{ width: "full", display: "flex", justifyContent: "end" }}
                >
                  <Button
                    variant="text"
                    startIcon={<KeyboardDoubleArrowLeftIcon />}
                  >
                    Back
                  </Button>
                  <Button onClick={handlePayment}
                    variant="contained"
                    endIcon={<KeyboardDoubleArrowRightIcon />}
                  >
                    Next
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethord;
