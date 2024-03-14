import React, { useEffect } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import bpohome from "../assets/BPObg.png";
import ganesh from "../assets/Ganesh.png";
import shree from "../assets/श्री.png";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import namaste from "../assets/namaste.png"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./MyComponent/Footer";
import "../../App.css";
import bpologo from '../assets/bpologo.png'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material/styles";
import mobile from '../assets/mobilebg.png'


const englishContent = {
    heading: 'Book Pujan Online',
    tagLine: ' Book your Puja online now and for all types of Vedic rituals, call Pandit ji to your home.',
    category1: 'Vivah Samaroh',
    category2: 'Vaidik Sanskar',
    category3: 'Anusthan',
    category4: 'Vishesh Pujan',
    category5: 'Katha',
    category6: 'Utsav Puja',
    btnTxt: 'Click Here to select worship category'

}

const hindiContent = {
    heading: ' बुक पूजन ऑनलाइन',
    tagLine: ' अब अपनी पूजा बुक कीजिये ऑनलाइन और सभी प्रकार के वैदिक कर्म के लिए , पंडित जी अपने घर बुलाएं |',
    category1: 'विवाह समारोह',
    category2: 'वैदिक संस्कार',
    category3: 'अनुष्ठान',
    category4: 'विशेष पूजन',
    category5: 'कथा',
    category6: 'उत्सव पूजा',
    btnTxt: 'पूजा श्रेणी का चयन करने के लिए बटन दबाएं'
}

const Home = () => {
    var theme = useTheme()
    var navigate = useNavigate();
    const [language, setLanguage] = React.useState("");
    const [txt, setTxt] = React.useState(englishContent);
    const matches = useMediaQuery(theme.breakpoints.down(700))
    const matches1 = useMediaQuery(theme.breakpoints.down(1500))
    let bgImage = matches ? mobile : bpohome

    const handleChangeLanguage = (event) => {
        if (event.target.value == 'hindi') {
            setTxt(hindiContent)
        }
        else {
            setTxt(englishContent)
        }
        setLanguage(event.target.value);
    };

    const handleClick = (event) => {
        if (language != "") {
            navigate("/pujanCategory", { state: { language: language } });
        }
    };


    return (
        <Grid style={{ fontFamily: 'Poppins' }} >
            <Grid
                container
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Grid
                    item
                    xs={12}
                    md={12}
                    style={{
                        display: "flex",
                        marginBottom: 80,
                        alignItems: "center",
                        flexDirection: "column",
                        color: "#fff",
                    }}
                >
                    <Grid container spacing={2} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: matches ? 10 : matches1 ? 50 : 0 }} >
                        <Grid item xs={2} md={2} style={{ marginTop: matches1 ? 40 : 80, marginLeft: matches1 ? 0 : 30, marginLeft: matches ? '-10%' : '' }}>
                            <img src={bpologo} width={matches1 ? 80 : 150} />
                        </Grid>
                        <Grid item xs={8} md={5} >
                            <img src={ganesh} width={matches1 ? "100%" : "140%"} style={{ marginTop: matches1 ? "-20%" : "-40%", marginBottom: matches1 ? '-20%' : "-30%", marginLeft: matches1 ? "-10%" : "-20%" }} />
                        </Grid>
                        <Grid item xs={2} md={2} style={{ marginTop: matches1 ? 40 : 80, marginLeft: matches1 ? 0 : 120, marginLeft: matches ? '-20%' : '' }} >
                            <img src={bpologo} width={matches1 ? 80 : 150} />
                        </Grid>
                    </Grid>
                    <Grid
                        style={{
                            textAlign: "center",
                            color: "#6B0505",
                            fontWeight: "bold",
                            marginTop: matches ? '-2%' : '-10%'
                        }}
                    >
                        <Typography style={{ fontSize: matches ? 40 : 62.4, marginBottom: matches ? '-1%' : '0%' }} class="font-class">
                            {txt.heading}
                        </Typography>
                        <Typography style={{ fontSize: matches ? 25 : 38.7, }} class="font-class" >
                            {" "}
                            {" "}
                        </Typography>
                    </Grid>
                    <Grid
                        style={{
                            textAlign: "center",
                            color: "#6B0505",
                        }}
                    >
                        <Typography style={{ fontSize: matches ? 20 : 23.8 }} class="font-class">
                            {txt.tagLine}
                        </Typography>
                    </Grid>
                    <Grid item xs={0} md={3} style={{ marginLeft: 10, display: "block" }} >
                        <img src={namaste} width={240} />
                    </Grid>
                    <Grid style={{
                        display: 'flex', textAlign: "center",
                        color: "#6B0505",
                    }}>
                        <Typography style={{ fontSize: matches ? 15 : 20, textAlign: "center" }} class="font-class">
                            | {txt.category1} |
                        </Typography>
                        <Typography style={{ fontSize: matches ? 15 : 20, textAlign: "center" }} class="font-class">
                            | {txt.category2} |
                        </Typography>
                        <Typography style={{ fontSize: matches ? 15 : 20, textAlign: "center" }} class="font-class">
                            | {txt.category3} |
                        </Typography>
                    </Grid>
                    <Grid style={{
                        display: 'flex', justifyContent: 'space-between', textAlign: "center",
                        color: "#6B0505",
                    }}>
                        <Typography style={{ fontSize: matches ? 15 : 22, textAlign: "center" }} class="font-class">
                            | {txt.category4} |
                        </Typography>
                        <Typography style={{ fontSize: matches ? 15 : 22, textAlign: "center" }} class="font-class">
                            | {txt.category5} |
                        </Typography>
                        <Typography style={{ fontSize: matches ? 15 : 22, textAlign: "center" }} class="font-class">
                            | {txt.category6} |
                        </Typography>
                    </Grid>
                    <Box sx={{ minWidth: 220, color: "white", marginTop: 1 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" sx={{ color: "#6B0505" }} >
                                Language/भाषा
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={language}
                                label="Language/भाषा"
                                onChange={handleChangeLanguage}
                                sx={{
                                    "& fieldset": {
                                        borderColor: "#6B0505",
                                        borderRadius: 10
                                    },
                                    "& .MuiSvgIcon-root": {
                                        color: "#6B0505",
                                    },
                                    "& 	.MuiSelect-outlined": {
                                        color: "#6B0505",
                                    },
                                }}
                            >
                                <MenuItem value={"hindi"}>हिंदी</MenuItem>
                                <MenuItem value={"English"}>English</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Button
                        variant="contained"
                        style={{
                            color: "#fff",
                            marginTop: 20,
                            fontWeight: "bold",
                            fontSize: matches ? 14 : 20,
                            backgroundColor: "#6B0505",
                            borderRadius: 50
                        }}
                        onClick={() => handleClick()}
                    >
                        {txt.btnTxt}
                    </Button>
                </Grid>

            </Grid>
            <Grid container spacing={2}>
                <Footer />
            </Grid>
        </Grid>
    );
};

export default Home;
