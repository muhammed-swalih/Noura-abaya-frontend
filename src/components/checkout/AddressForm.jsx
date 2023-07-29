import { CheckBox } from "@mui/icons-material";
import {
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {useNavigate, useParams} from 'react-router-dom'
import { useDispatch } from "react-redux";
import {getShippingDetails} from '../../Redux/configFiles/shippingDetailsConifg'
import {useSelector} from 'react-redux'

function AddressForm() {
    const dispatch = useDispatch()
    const {id} = useParams()
    const productDetails = useSelector(state => state.productInfo.productInfo)

  const [fName, setFname] = useState();
  const [lName, setLname] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [pincode, setPinCode] = useState();
  const [country, setCountry] = useState();


  const shippingDetails = {
    fName,
    lName,
    phone,
    address,
    city,
    pincode,
    country,
    id
  }

  useEffect(()=>{
    console.log(productDetails);
  })


  const navigate  = useNavigate();

  const handleNavigate=()=>{
    navigate(`/payment/:${id}`,{state : {shippingDetails: shippingDetails}})
    dispatch(getShippingDetails(shippingDetails))
  }

  return (
    <div className=" w-full h-auto bg-slate-200">
      <div className=" w-auto min-h-screen flex items-center justify-center">
        <div className=" w-[800px] h-auto py-20 px-20 bg-white flex items-center justify-center">
          <Stack>
            <Typography variant="h6" gutterBottom>
              Shipping Details
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e) => setFname(e.target.value)}
                  label="First Name"
                  id="first-name"
                  variant="standard"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e) => setLname(e.target.value)}
                  label="Last Name"
                  id="last-name"
                  fullWidth
                  required
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  onChange={(e) => setAddress(e.target.value)}
                  label="Adress"
                  id="adress"
                  fullWidth
                  required
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e) => setPhone(e.target.value)}
                  label="Phone"
                  id="phone"
                  type="number"
                  fullWidth
                  required
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e) => setCity(e.target.value)}
                  label="City"
                  id="city"
                  fullWidth
                  required
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e) => setPinCode(e.target.value)}
                  label="Pin Code"
                  id="state"
                  fullWidth
                  required
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e) => setCountry(e.target.value)}
                  label="Country"
                  id="country"
                  fullWidth
                  required
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12} sx={{ marginTop: "20px" }}>
                { fName && lName && address && phone && city && country ?<Button onClick={handleNavigate} fullWidth variant="contained">
                  Next
                </Button> : ""}
              </Grid>
            </Grid>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default AddressForm;
