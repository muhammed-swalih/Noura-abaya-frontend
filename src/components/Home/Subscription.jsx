import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
function Subscription() {
  const [helperText, setHelperText] = useState(false);
  const [value, setValue] = useState(null);
  return (
    <div className=" md:w-full h-auto py-20 flex items-center justify-center">
      <div className=" md:w-[1250px] h-72 flex justify-center items-center">
        <div className=" md:flex  flex-col gap-3  items-center">
          <h1 className=" md:text-4xl w-[800px] text-center leading-[60px]">
            Subscribe to our newsletter to get updates to our latest collections
          </h1>
          <h1 className=" md:text-gray-500">
            Get 20% off on your first order just by subscribing to our
            newsletter{" "}
          </h1>
          <TextField
            value={value}
            onChange={(e) => setValue(e.target.value)}
            fullWidth
            type="text"
            size="small"
            label="Email"
            color="success"
            helperText={value ? "" : "Enter a valid email"}
            sx={{ width: "500px", marginTop: "20px" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton edge="start">
                    <MailOutlineIcon />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <Button
                      endIcon={<CheckBoxIcon />}
                      sx={{ marginRight: "-9px" }}
                      variant="contained"
                    >
                      submit
                    </Button>
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <h1 className=" md:mt-5 w-96 text-center text-gray-500">You will be able to unsubscribe at any time read our privacy & policy <span className=" text-blue-500">here</span></h1>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
