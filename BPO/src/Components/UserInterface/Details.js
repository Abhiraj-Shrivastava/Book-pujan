import React, { useEffect } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import bpohome from "../assets/BPO.png";
import shree from "../assets/Mobilepandit.png";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { getData, postData } from "../ApiServices/ServerServices";
import swal from "sweetalert";
import Footer from "./MyComponent/Footer";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

const hindiFieldName = {
    name: "नाम",
    phoneNumber: "फ़ोन नंबर",
    address: "पता",
    city: "शहर",
    state: "राज्य",
    pincode: "पिन कोड",
    btn: "पूजन बुक करें",
};
const englishFieldName = {
    name: "Name",
    phoneNumber: "Phone Number",
    address: "Address",
    city: "City",
    state: "State",
    pincode: "Pin Code",
    btn: "Book the Pujan",
};

const Details = (props) => {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(480));
    var location = useLocation();
    var navigate = useNavigate();
    const [fieldName, setFieldName] = useState({});
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("");
    const [number, setNumber] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [city, setCity] = React.useState("");
    const [state, setState] = React.useState("");
    const [pincode, setPincode] = React.useState("");
    const [display, setDisplay] = React.useState("none");
    const [message, setMessage] = React.useState("");
    const [otpMessage, setOtpMessage] = React.useState("");
    const matches3 = useMediaQuery(theme.breakpoints.down(700));
    const bgImage = matches3 ? mobile : bpohome;
    const [href, setHref] = React.useState("");

    const [openOtp, setOpenOtp] = useState(false);

    const [otp, setOtp] = useState();

    useEffect(function () {
        if (location.state.language == "hindi") {
            setFieldName(hindiFieldName);
        } else {
            setFieldName(englishFieldName);
        }
    }, []);

    const handleClickContinue = async () => {
        if (
            number == "" ||
            name == "" ||
            address == "" ||
            city == "" ||
            state == "" ||
            pincode == ""
        ) {
            setMessage("Fill Your Details First");
        } else {
            var formData = new FormData();
            formData.append("name", name);
            formData.append("phonenumber", number);
            formData.append("street1", address);
            formData.append("city", city);
            formData.append("state", state);
            formData.append("pincode", pincode);

            var result = await postData("users/adduser", formData, true);
            if (result.status == true) {
                var formData = new FormData();
                formData.append("userName", name);
                formData.append("userId", result.user_id);
                formData.append("categoryId", location.state.categoryId);
                formData.append("subCategoryId", location.state.subCategoryId);
                formData.append("bookingDate", location.state.date);
                formData.append("bookingTime", location.state.slot);
                formData.append("userPhoneNumber", number);
                formData.append(
                    "bookingAddress",
                    address + " " + city + " " + state + " " + pincode
                );
                var formDATA = new FormData();
                formDATA.append("date", location.state.date);
                formDATA.append("time", location.state.slot);
                var result1 = await postData("bookings/addbooking", formData, true);
                var result2 = await postData("time/time-slot", formDATA, true);
                if (result1.status == true) {
                    const msg =
                        location.state.language == "english"
                            ? `Your Booking Is Confirmed.Your Booking Id is ${result1.booking_id}.Pujan Samagri Will be Send to Your Number`
                            : `आपकी बुकिंग पक्की है। आपकी बुकिंग आईडी ${result1.booking_id} है । पूजन सामग्री आपके नंबर पर भेजी जाएगी`;

                    swal("Good job!", `${msg}`, "success");
                    setOpen(false);
                    navigate("/pujanCategory", {
                        state: { language: location.state.language },
                    });
                } else {
                    swal(`Your Booking Is Failed`, "error");
                    setOpen(false);
                    navigate("/pujanCategory", {
                        state: { language: location.state.language },
                    });
                }
            } else {
            }
        }
    };

    // const dialogOtp=()=>{
    //   return (
    //     <div >

    //       <Dialog
    //         open={openOtp}
    //         keepMounted
    //         onClose={handleCloseOtp}
    //         aria-describedby="alert-dialog-description"
    //       >
    //         <DialogTitle >
    //         <div >
    //         Confirm your number
    //         </div>
    //         </DialogTitle>
    //         <Divider/>
    //         <DialogContent>
    //           <DialogContentText >
    //             <div >
    //             Enter the code we have sent via SMS to +91{number}
    //             </div>
    //             </DialogContentText>
    //             <Grid container spacing={2}>
    //         <Grid item xs={12}>
    //           <OtpComponent value="" onChange={(value)=>{chkOtp(value)}}/>
    //         </Grid>
    //         <Grid item xs={12}>
    //           <div >
    //             Haven't recieved a code? More Options
    //         </div>
    //         </Grid>
    //         <Grid item xs={12}>
    //           <div >
    //            {otpMessage}
    //         </div>
    //         </Grid>

    //         </Grid>
    //         </DialogContent>

    //         <DialogActions>
    //           <Button onClick={handleCloseOtp}>Close</Button>

    //         </DialogActions>
    //       </Dialog>
    //     </div>
    //   );
    // }

    // const Dialog =()=>{
    //   return(<BootstrapDialog
    //       onClose={handleClose}
    //       aria-labelledby="customized-dialog-title"
    //       open={open}
    //     >
    //       <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>

    //       </BootstrapDialogTitle>
    //       <DialogContent >
    //         <Grid container spacing={2} style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    //           <Grid item xs={12} md={6}>
    //           <img src={shree} style={{width:'96.5%'}}/>
    //           </Grid>
    //           <Grid item xs={12} md={6} style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
    //                    <Grid ><Typography style={{fontSize:30}} >Login Now</Typography></Grid>

    //       <Grid item xs={12} style={{marginTop:30}}>
    //         <Button  id='otpless'   fullWidth style={{fontWeigth:700,textTransform:'Capitalize',backgroundColor:'orange',color:'#fff',borderRadius:8}} ></Button>

    //         </Grid>
    //       <Grid item xs={12} style={{marginTop:30}}>
    //         {message}
    //       <Button    fullWidth style={{fontWeigth:700,textTransform:'Capitalize',backgroundColor:'orange',color:'#fff',borderRadius:8}} onClick={()=>handleLogin()}  >Confirm Booking</Button>

    //         </Grid>

    //           </Grid>

    //         </Grid>

    //       </DialogContent>

    //     </BootstrapDialog>
    // )}

    return (
        <Grid style={{ marginTop: 15 }}>
            <Grid
                container
                spacing={2}
                style={{
                    background: mobile?"#ffb566":`url(${bgImage})`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    display:"flex",
                    flexDirection:mobile?"column":"row"
                }}
            >
                <Grid item xs={12}>
                    <Typography sx={{color:"#74241b",display:mobile?"block":"none",fontSize:30,fontWeight:"bold",textAlign:"center"}}>|| सीता राम ||</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={shree} style={{ width: mobile?"100%":"96.5%" }} />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: mobile?"-73px":20,
                        marginBottom: 40,
                        alignItems: "center",
                        flexDirection: "column",
                        color: "#fff",
                    }}
                >
                    <Grid
                        container
                        spacing={mobile ? 1 : 2}
                        style={{
                            backgroundColor: "white",
                            width: "80%",
                            margin: 40,
                            borderRadius: 10,
                            padding: 20,
                        }}
                    >
                        <Grid
                            item
                            xs={12}
                            style={{
                                textAlign: "left",
                                color: "orange",
                                marginTop: 15,
                                fontSize: mobile ? 16 : 20,
                                fontWeight: 400,
                            }}
                        >
                            {fieldName.name}
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: "center" }}>
                            {" "}
                            <TextField
                                fullWidth
                                label={fieldName.name}
                                variant="outlined"
                                onChange={(event) => setName(event.target.value)}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            style={{
                                textAlign: "left",
                                color: "orange",
                                marginTop: 15,
                                fontSize: mobile ? 16 : 20,
                                fontWeight: 400,
                            }}
                        >
                            {fieldName.phoneNumber}
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: "center" }}>
                            {" "}
                            <TextField
                                fullWidth
                                type="tel"
                                label={fieldName.phoneNumber}
                                variant="outlined"
                                onChange={(event) => setNumber("91" + event.target.value)}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            style={{
                                textAlign: "left",
                                color: "orange",
                                marginTop: 15,
                                fontSize: mobile ? 16 : 20,
                                fontWeight: 400,
                            }}
                        >
                            {fieldName.address}
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: "center" }}>
                            {" "}
                            <TextField
                                fullWidth
                                label={fieldName.address}
                                variant="outlined"
                                onChange={(event) => setAddress(event.target.value)}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            style={{
                                textAlign: "left",
                                color: "orange",
                                marginTop: 15,
                                fontSize: mobile ? 16 : 20,
                                fontWeight: 400,
                            }}
                        >
                            {fieldName.city}
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: "center" }}>
                            {" "}
                            <TextField
                                fullWidth
                                label={fieldName.city}
                                variant="outlined"
                                onChange={(event) => setCity(event.target.value)}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            style={{
                                textAlign: "left",
                                color: "orange",
                                marginTop: 15,
                                fontSize: mobile ? 16 : 20,
                                fontWeight: 400,
                            }}
                        >
                            {fieldName.state}
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: "center" }}>
                            {" "}
                            <TextField
                                fullWidth
                                label={fieldName.state}
                                variant="outlined"
                                onChange={(event) => setState(event.target.value)}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            style={{
                                textAlign: "left",
                                color: "orange",
                                marginTop: 15,
                                fontSize: mobile ? 16 : 20,
                                fontWeight: 400,
                            }}
                        >
                            {fieldName.pincode}
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: "center" }}>
                            {" "}
                            <TextField
                                fullWidth
                                label={fieldName.pincode}
                                variant="outlined"
                                onChange={(event) => setPincode(event.target.value)}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={12}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                                marginTop:8
                            }}
                        >
                            <Button
                                fullWidth
                                variant="contained"
                                href={href}
                                target="_blank"
                                onClick={() => handleClickContinue()}
                                sx={{
                                    fontWeigth: "bold",
                                    fontSize:20,
                                    textTransform: "Capitalize",
                                    backgroundColor: "orange",
                                    color: "#fff",
                                    borderRadius: 2,
                                }}
                            >
                                {fieldName.btn}
                            </Button>
                            <div style={{ color: "orange" }}>{message}</div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid>
                <Footer />
            </Grid>
        </Grid>
    );
};

export default Details;
