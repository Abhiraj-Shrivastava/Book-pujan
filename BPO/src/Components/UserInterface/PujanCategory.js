import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import bpohome from "../assets/BPObg.png";
import shree from "../assets/श्री.png";
import logo from "../assets/logo.png";
import arrow from "../assets/nexticon.png";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import bpoCategory from "../assets/BPObg.png";
import Swagatam from "../assets/swagatm.png"
import { getData, postData } from "../ApiServices/ServerServices";
import Footer from "./MyComponent/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconButton } from "@mui/material";
import Slider from "react-slick";
import KeyboaordArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboaordArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState, useRef } from "react";
import bpologo from '../assets/bpologo.png'
import namaste from "../assets/pujathali.png"
import namaste2 from "../assets/namaste2.png"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material/styles";

import mobile from '../assets/mobilebg.png'
const bestHindiSubCategory = [
    {
        categoryId: '641072c7387465cc4774ea85',
        id: '64119eed0eea5961a50e408e',
        name: 'श्री सत्यनारायण व्रत कथा',
        img: require('../assets/satyanarayanvrat.png')

    },
    {
        categoryId: '641072c7387465cc4774ea85',
        id: '64119f170eea5961a50e4090',
        name: 'महारुद्र अभिषेक',
        img: require('../assets/maharudraabhishek.png')

    },
    {
        categoryId: '641072c7387465cc4774ea85',
        id: '6411a2320eea5961a50e40b7',
        name: 'भूमि पूजन',
        img: require('../assets/Bhoomipujan.png')
    },
    {
        categoryId: '64107310387465cc4774ea89',
        id: '6411a2480eea5961a50e40b9',
        name: 'नूतन गृह प्रवेश',
        img: require('../assets/grahpravesh.png')
    },
    {
        categoryId: '64107356387465cc4774ea8d',
        id: '6411a3330eea5961a50e40d5',
        name: 'सवालाख महामृत्युञ्जय मंत्र',
        img: require('../assets/mahamrityunjaymantra.png')
    },
    {
        categoryId: '64107356387465cc4774ea8d',
        id: '6411a3420eea5961a50e40d7',
        name: 'शतचण्‍डी पाठ',
        img: require('../assets/shatchandi.png')
    },
    {
        categoryId: '64107399387465cc4774ea93',
        id: '6411a3be0eea5961a50e40e9',
        name: 'नामकरण संस्‍कार',
        img: require('../assets/namkaran.png')
    },
    {
        categoryId: '64107399387465cc4774ea93',
        id: '6411a3cb0eea5961a50e40eb',
        name: 'मुण्‍डन संस्‍कार',
        img: require('../assets/mundansanskar.png')
    },
    {
        categoryId: '641073b1387465cc4774ea95',
        id: '	6411a4dc0eea5961a50e4109',
        name: 'श्रीमद्भागवत कथा',
        img: require('../assets/bhagwatkatha.png')
    },
    {
        categoryId: '641073b1387465cc4774ea95',
        id: '6411a4ec0eea5961a50e410d',
        name: 'श्री शिवपुराण',
        img: require('../assets/shreeshivpuran.png')
    },
]
const bestEnglishSubCategory = [
    {
        categoryId: '641072ba387465cc4774ea83',
        id: '64119ed80eea5961a50e408c',
        name: 'Shree Satyanarayan Vrat Katha',
        img: require('../assets/satyanarayanvrat.png')

    },
    {
        categoryId: '641072ba387465cc4774ea83',
        id: '64119f4d0eea5961a50e4093',
        name: 'Maharudra Abhishek',
        img: require('../assets/maharudraabhishek.png')

    },
    {
        categoryId: '641072f0387465cc4774ea87',
        id: '641ece7c7567c1d48358c885',
        name: 'Bhoomi Pujan',
        img: require('../assets/Bhoomipujan.png')
    },
    {
        categoryId: '641072f0387465cc4774ea87',
        id: '641ece957567c1d48358c887',
        name: 'Nutan Grah Pravesh',
        img: require('../assets/grahpravesh.png')
    },
    {
        categoryId: '6410736c387465cc4774ea8f',
        id: '641ed1487567c1d48358c8af',
        name: 'Sawa Lakh Mahamritunjay Mantra',
        img: require('../assets/mahamrityunjaymantra.png')
    },
    {
        categoryId: '64107356387465cc4774ea8d',
        id: '641ed15b7567c1d48358c8b1',
        name: 'ShatChandi Paath',
        img: require('../assets/shatchandi.png')
    },
    {
        categoryId: '64107399387465cc4774ea93',
        id: '641ed24c7567c1d48358c8c7',
        name: 'Naamkaran Sans‍kar',
        img: require('../assets/namkaran.png')
    },
    {
        categoryId: '64107399387465cc4774ea93',
        id: '641ed2577567c1d48358c8c9	',
        name: 'Mundan Sans‍kar',
        img: require('../assets/mundansanskar.png')
    },
    {
        categoryId: '641073b1387465cc4774ea95',
        id: '	641ed3c67567c1d48358c8ec',
        name: 'Shrimad Bhagwat Katha',
        img: require('../assets/bhagwatkatha.png')
    },
    {
        categoryId: '641073b1387465cc4774ea95',
        id: '641ed3df7567c1d48358c8f0',
        name: 'Shri Shiv Puran',
        img: require('../assets/shreeshivpuran.png')
    },
]
const PujanCategory = (props) => {
    var location = useLocation();
    var navigate = useNavigate();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down(450));
    const matches3 = useMediaQuery(theme.breakpoints.down(700));
    const matches2 = useMediaQuery(theme.breakpoints.down(1000));
    const matches4 = useMediaQuery(theme.breakpoints.down(1200));
    const matches1 = useMediaQuery(theme.breakpoints.down(1500));

    let bgImage = matches3 ? mobile : bpohome
    var rs = useRef();
    const [category, setCategory] = React.useState([]);
    const [button1Style, setButton1Style] = useState({ display: 'none' });
    const [button2Style, setButton2Style] = useState({ display: 'none' });
    console.log(location.state.language);
                                                                  
    const data = location.state.language == 'hindi' ? bestHindiSubCategory : bestEnglishSubCategory
    var settings = {
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: matches ? 1 : matches2 ? 2 : matches1 ? 3 : 5,
        slidesToScroll: 1,
    };

    const showImages = () => {
        return data.map((item, index) => {
            return (
                <Grid style={{ marginLeft: 10 }} onClick={() => navigate('/Tithi', { state: { subCategoryId: item.id, categoryId: item.categoryId, language: 'hindi' } })}>
                    <div className="proj-imgbx">
                        <img src={item.img} style={{ width: '100%' }} />
                        <div className="proj-txtx">
                            <h4>{item.name}</h4>

                        </div>
                    </div>
                </Grid>
            );
        });
    };

    const fetchCategoriesData = async () => {
        var formData = new FormData();

        formData.append("language", location.state.language);

        var result = await postData(
            "category/getcategoriesbylanguage",
            formData,
            true
        );
        console.log(result);
        console.log(result.data);
        setCategory(result);
    };
    React.useEffect(function () {
        fetchCategoriesData();
    }, []);
    console.log(category);
    const handleClick = (id, name) => {
        navigate("/pujansubCategory", {
            state: { categoryId: id, language: location.state.language, categoryName: name },
        });
    };

    const Content = () => {
        return category.map((item) => {
            return (
                <Grid container spacing={2} style={{ marginTop: 20, display: 'flex', justifyContent: 'center', }}  >
                    <Grid style={{ display: 'flex', flexDirection: 'row', cursor: "pointer", }} onClick={() => handleClick(item._id, item.categoryName)}>
                        <Grid >
                            <img src={arrow} style={{ width: 40 }} />
                        </Grid>
                        <Grid style={{ backgroundImage: 'linear-gradient(to right,#ffffff, #ff9933)', borderRadius: 10, marginLeft: 10, width: 300,display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography
                                class="font-class" style={{ fontSize: matches?20:28.4, color: "#391703", textAlign: "center", fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            >
                                {item.categoryName}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            );
        });
    };

    return (
        <Grid>
            <Grid container style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
            }}>
                <Grid
                    item
                    xs={12}
                    md={12}
                    style={{
                        display: "flex",
                        justifyContent: "start",
                        marginTop: 100,

                        alignItems: "center",
                        flexDirection: "column",
                        color: "#fff",
                    }}
                >
                    <Grid container spacing={2} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: matches ? 10 : matches1 ? 0 : 0 }} >
                        <Grid item xs={2} sm={2} md={2} style={{ marginLeft: matches ? 0 : 50, marginTop: matches ? '-10%' : '0' }}>
                            <img src={bpologo} width={matches3 ? 60 : matches1 ? 100 : 150} />
                        </Grid>
                        <Grid item xs={5} sm={5} md={5} >
                            <img src={Swagatam} width={matches1 ? "100%" : "100%"} style={{ marginTop: matches1 ? "-5%" : matches ? '-10%' : "-40%", marginBottom: matches1 ? '-10%' : "-20%" }} />
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} style={{ marginLeft: matches ? 0 : 50, marginTop: matches ? '-10%' : '0' }}>
                            <img src={bpologo} width={matches3 ? 60 : matches1 ? 100 : 150} />
                        </Grid>
                    </Grid>
                    <Grid style={{}}>
                        <Grid item xs={12} >
                            <Typography style={{ fontSize: matches ? 25 : 46.9, textAlign: "center", color: "#391703", fontWeight: 'bold', marginTop: matches ? 10 : 0 }} class="font-class">
                                {location.state.language == "English" ? 'Choose your pujan' : ' पूजन का चयन करें |'}
                            </Typography>
                        </Grid>
                        <Grid container spacing={2} style={{ display: 'flex', flexDirection: 'row', }}>
                            <Grid item xs={0} md={4} style={{ display: matches4 ? "none" : 'block' }} >
                                <img src={namaste2} width={400} />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                md={matches4 ? 12 : 4}
                                style={{
                                    marginTop: 5,
                                    marginBottom: 80,
                                    display: "flex",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                }}
                            >
                                {Content()}
                            </Grid>
                            <Grid item xs={0} md={4} style={{ display:'block' ,margin:matches4?"auto":"0px" }} >
                                <img src={namaste} width={400} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item
                    xs={12} style={{ display: 'flex', justifyContent: 'center', marginBottom: 300, }}>
                    <Grid
                        style={{
                            width: matches?'80%':"90%",
                            height: 270,
                            cursor: "pointer",
                        }}
                    >
                        <Slider {...settings} ref={rs}>
                            {showImages()}
                        </Slider>
                    </Grid>
                </Grid>
            </Grid>
            <Grid>
                <Footer />
            </Grid>
        </Grid>
    );
};

export default PujanCategory;
