import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from "@mui/material/IconButton";
import { Divider, Grid, Typography, Button } from "@mui/material";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useEffect } from "react";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const bestSubCategory = [
    {
        categoryId: "641072c7387465cc4774ea85",
        id: "64119eed0eea5961a50e408e",
        name: "श्री सत्यनारायण व्रत कथा",
        img: require("../../assets/image1.jpg"),
    },
    {
        categoryId: "641072c7387465cc4774ea85",
        id: "64119f170eea5961a50e4090",
        name: "महारुद्र अभिषेक",
        img: require("../../assets/image1.jpg"),
    },
    {
        categoryId: "641072c7387465cc4774ea85",
        id: "6411a2320eea5961a50e40b7",
        name: "भूमि पूजन",
        img: require("../../assets/image1.jpg"),
    },
    {
        categoryId: "64107310387465cc4774ea89",
        id: "6411a2480eea5961a50e40b9",
        name: "नूतन गृह प्रवेश",
        img: require("../../assets/image1.jpg"),
    },
    {
        categoryId: "64107356387465cc4774ea8d",
        id: "6411a3330eea5961a50e40d5",
        name: "सवालाख महामृत्युञ्जय मंत्र",
        img: require("../../assets/image1.jpg"),
    },
    {
        categoryId: "64107356387465cc4774ea8d",
        id: "6411a3420eea5961a50e40d7",
        name: "शतचण्‍डी पाठ",
        img: require("../../assets/image1.jpg"),
    },
    {
        categoryId: "6410738e387465cc4774ea91",
        id: "6411a3be0eea5961a50e40e9",
        name: "नामकरण संस्‍कार",
        img: require("../../assets/image1.jpg"),
    },
    {
        categoryId: "6410738e387465cc4774ea91",
        id: "6411a3cb0eea5961a50e40eb",
        name: "मुण्‍डन संस्‍कार",
        img: require("../../assets/image1.jpg"),
    },
    {
        categoryId: "64107462387465cc4774ea97",
        id: "	6411a4dc0eea5961a50e4109",
        name: "श्रीमद्भागवत कथा",
        img: require("../../assets/image1.jpg"),
    },
    {
        categoryId: "64107462387465cc4774ea97",
        id: "6411a4ec0eea5961a50e410d",
        name: "श्री शिवपुराण",
        img: require("../../assets/image1.jpg"),
    },
];
const Footer = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const [number, setNumber] = React.useState("");
    const [href, setHref] = React.useState("");
    const matches = useMediaQuery(theme.breakpoints.down(1280));
    const matches1 = useMediaQuery(theme.breakpoints.down(600));

    useEffect(() => {
        // const script = document.createElement('script');
        // script.type = 'text/javascript';
        // script.src = 'https://panchang.click/panchangwidgetjs?rid=1ab464d9e87687aca2e836e9654d4e19';
        // script.async = true;
        // script.onload = function (script) {
        //   console.log(script)
        //   const widgetElement = document.createElement('div');
        //   widgetElement.id = 'panchangwidgetid';
        //   document.body.appendChild(script);
        // };
        // document.body.appendChild(script);
        const element = document.getElementById("panchangwidgetid");
        const docu = element.contentDocument;
        docu.body.style.backgroundColor = "green";
        console.log(docu, element);
    }, []);

    return (
        <Grid
            style={{ backgroundColor: "#792212", height: "70%", marginTop: 16 }}
            className="font-link1"
        >
            <Grid
                container
                spacing={2}
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: "90%",
                    marginLeft: 20,
                }}
            >
                <Grid
                    item
                    xs={12}
                    md={3}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "left",
                        width: "25%",
                    }}
                >
                    <p
                        style={{
                            fontSize: "20px",
                            color: "#fff",
                            marginBottom: "20px",
                            fontWeight: "bold",
                            paddingLeft: 10,
                        }}
                    >
                        About us
                    </p>
                    <div
                        style={{
                            textAlign: "justify",
                            fontSize: "16px",
                            color: "#fff",
                            paddingLeft: 10,
                        }}
                    >
                        Our online platform allows you to book a panditji and schedule a
                        service with ease. Our team of experts will arrive at your home
                        fully equipped with all the necessary items and materials needed for
                        the ceremony.We take pride in providing high-quality and affordable
                        services that are tailored to your needs. Our panditjis have years
                        of experience and expertise in conducting traditional religious
                        services, making your experience meaningful and memorable.
                    </div>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={3}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "left",
                        width: "100%",
                    }}
                >
                    <p
                        style={{
                            fontSize: "20px",
                            color: "#fff",
                            marginBottom: "20px",
                            fontWeight: "bold",
                        }}
                    ></p>
                    <div>
                        <iframe
                            id="panchangwidgetid"
                            src="https://panchang.click/widget.php?rid=1ab464d9e87687aca2e836e9654d4e19"
                            style={{
                                border: 0,
                                backgroundColor: "white",
                                height: "300px",
                                color: "white !important",
                            }}
                            scrolling="yes"
                        ></iframe>
                    </div>
                    {/* <div style={{ fontSize: '20px',color: '#fff'}} ><ArrowForwardIosIcon/>Application Development </div>
           */}
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={4}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "left",
                        width: "50%",
                    }}
                >
                    <Grid style={{ display: matches ? "none" : "flex", height: "40%" }}>
                        <span style={{}}>
                            <IconButton
                                href="https://www.facebook.com/book.pujan.online?mibextid=LQQJ4d"
                                size="large"
                            >
                                <FacebookIcon
                                    style={{ width: 100, height: 100, color: "white" }}
                                />
                            </IconButton>
                        </span>
                        <span style={{}}>
                            {" "}
                            <IconButton href="" size="large">
                                <WhatsAppIcon
                                    style={{ width: 100, height: 100, color: "white" }}
                                />
                            </IconButton>
                        </span>
                        <span style={{}}>
                            {" "}
                            <IconButton
                                href="https://www.instagram.com/book_pujan_online/?igshid=YmMyMTA2M2Y%3D"
                                size="large"
                            >
                                <InstagramIcon
                                    style={{ width: 100, height: 100, color: "white" }}
                                />
                            </IconButton>
                        </span>
                    </Grid>
                    <Grid style={{ height: "50%" }}>
                        <p
                            style={{
                                fontSize: "20px",
                                color: "#fff",
                                marginBottom: "20px",
                                fontWeight: "bold",
                            }}
                        >
                            Contact Us
                        </p>
                        <div style={{ fontSize: matches ? 13 : "15px", color: "#fff" }}>
                            <AdUnitsIcon />
                            <a
                                href={matches1 ? "tel:7566380131" : "https://wa.link/suu2rq"}
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                    marginTop: "-10%",
                                }}
                            >
                                +91 75663 80131
                            </a>
                            ,
                            <a
                                href={matches ? "tel:7999189894" : "https://wa.link/487pq2"}
                                style={{ textDecoration: "none", color: "white" }}
                            >
                                +91 79991 89894
                            </a>
                        </div>
                        <a
                            style={{
                                fontSize: matches ? 13 : "15px",
                                color: "#fff",
                                textDecoration: "none",
                            }}
                            href="mailto:Bookpujanonline@gmail.com?subject=Me&body=Hello! I Want To Take Knowledge About Your Services"
                        >
                            <EmailIcon />
                            Bookpujanonline@gmail.com
                        </a>
                        <a
                            href="https://goo.gl/maps/1Fh2hfunUBxGTNwX9"
                            target="_blank"
                            style={{ textDecoration: "none" }}
                        >
                            {" "}
                            <div style={{ color: "#fff", fontSize: matches ? 13 : 15 }}>
                                <LocationOnIcon />
                                Office, Vhyadhi haran Shree Hanuman Mandir
                            </div>
                            <div
                                style={{
                                    color: "#fff",
                                    fontSize: matches ? 13 : 15,
                                    marginLeft: 25,
                                }}
                            >
                                {" "}
                                near mpeb, Shahpura, Bhopal, Madhya Pradesh 462039
                            </div>
                        </a>
                    </Grid>
                </Grid>
            </Grid>
            <Divider variant="middle" />
            <Grid container spacing={2} justifyContent={"center"}>
                <Grid item xs={8} md={6} style={{ display: "flex" }}>
                    <a
                        style={{
                            margin: "10px 0px 40px 75px",
                            textDecoration: "none",
                            color: "#fff",
                        }}
                        href="http://bookpujanonline.com/"
                    >
                        © 2022 Book Pujan Online, Inc.{" "}
                    </a>
                </Grid>
                <Grid
                    item
                    xs={8}
                    md={6}
                    style={{ display: "flex", justifyContent: "center" }}
                ></Grid>
            </Grid>
        </Grid>
    );
};

export default Footer;
