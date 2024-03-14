import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import bpohome from "../assets/BPO.png";
import shree from "../assets/Kundli.png";
import Arrow from "../assets/Arrow_1.png";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getData, postData } from "../ApiServices/ServerServices";
import Footer from "./MyComponent/Footer";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import mobile from "../assets/mobile2.png";
import ganesh from "../assets/Ganesh1.png";

const hindiFieldName = {
    name: "पूजन के नाम ",
    price: "दक्षिणा",
};
const englishFieldName = {
    name: "Name of Pujan",
    price: "Dakshina",
};
const SubPujan = (props) => {
    const theme = useTheme();
    var location = useLocation();
    var navigate = useNavigate();
    const [fieldName, setFieldName] = React.useState({});
    const [subCategory, setSubCategory] = React.useState([]);
    const matches = useMediaQuery(theme.breakpoints.down(900));
    const matches3 = useMediaQuery(theme.breakpoints.down(700));
    const bgImage = matches3 ? mobile : bpohome;
    console.log(location.state.language);
    useEffect(function () {
        if (location.state.language == "hindi") {
            setFieldName(hindiFieldName);
        } else {
            setFieldName(englishFieldName);
        }
    }, []);
    useEffect(() => {
        const handlePopstate = (event) => {
            // check if the user navigated back to the previous page
            if (event.state && event.state.previousPage) {
                // navigate to the home page
                navigate("/");
            } else {
                // set the previousPage state object when navigating to this page
                window.history.pushState({ previousPage: false }, "");
            }
        };

        window.addEventListener("popstate", handlePopstate);

        return () => {
            window.removeEventListener("popstate", handlePopstate);
        };
    }, [navigate]);
    const fetchSubCategoriesData = async () => {
        var formData = new FormData();

        formData.append("categoryId", location.state.categoryId);

        var result = await postData(
            "subcategory/getsubcategoriesbycategory",
            formData,
            true
        );
        console.log(result);
        console.log(result.data);
        setSubCategory(result);
    };
    React.useEffect(function () {
        fetchSubCategoriesData();
    }, []);
    console.log(subCategory);
    const handleClick = (id) => {
        navigate("/Tithi", {
            state: {
                subCategoryId: id,
                categoryId: location.state.categoryName,
                language: location.state.language,
            },
        });
    };
    const Content = () => {
        return subCategory.map((item) => {
            return (
                <Grid
                    style={{
                        marginTop: 20,
                        marginLeft: matches?1:40,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        background:"orange",
                        padding:matches?"10px 30px":"10px 40px",
                        borderRadius:15
                    }}
                    onClick={() => handleClick(item.subcategoryName)}
                >
                    <Typography
                        style={{
                            fontSize: matches?18:25,
                            textAlign: "left",
                            cursor: "pointer",
                            width: "50%",
                            color:"#74241b",
                            fontWeight:600,
                            marginRight:matches?8:0
                        }}
                        
                    >
                        {item.subcategoryName}
                    </Typography>
                    <img src={Arrow} style={{width:28}} />
                    <Typography
                        style={{
                            fontSize:matches?18:25,
                            textAlign: "center",
                            cursor: "pointer",
                            width: "30%",
                            color:"#74241b",
                            fontWeight:600
                        }}
                    >
                        {item.price == "Pravakta Anusaar"
                            ? ""
                            : item.price == "प्रवक्‍ता अनुसार"
                                ? ""
                                : "₹"}
                        {item.price}
                    </Typography>
                </Grid>
            );
        });
    };
    return (
        <Grid style={{ marginTop: 15 }}>
            <Grid
                container
                spacing={2}
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Grid
                    item
                    xs={12}
                    md={6}
                    style={{
                        display: "flex",
                        justifyContent: "start",
                        marginTop: 100,
                        marginBottom: 100,
                        alignItems: "center",
                        flexDirection: "column",
                        color: "#fff",
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid
                            item
                            xs={12}
                            md={12}
                            style={{
                                marginLeft: matches3 ? "25%" : "40%",
                                marginTop: matches3 ? "-15%" : "-5%",
                            }}
                        >
                            <img src={ganesh} width={200} />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent:matches?"space-between": "space-around",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                style={{
                                    fontSize: matches?18:25,
                                    textAlign: "left",
                                    cursor: "pointer",
                                    width: "60%",
                                    textDecoration: "underline",
                                    marginLeft: matches?30:60,
                                }}
                            >
                                {fieldName.name}
                            </Typography>
                            <Typography
                                style={{
                                    fontSize: matches?18:
                                    25,
                                    textAlign: "center",
                                    cursor: "pointer",
                                    textDecoration: "underline",
                                    width: "40%",
                                }}
                            >
                                {fieldName.price}
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            style={{
                                marginBottom: 10,
                                margin:"10px 20px",
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "column",
                            }}
                        >
                            {Content()}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} style={{ marginTop: matches ? "" : "20%" }}>
                    <img
                        src={shree}
                        style={{
                            display: matches ? "none" : "flex",
                            width: "100%",
                            alignItems: "center",
                        }}
                    />
                </Grid>
            </Grid>
            <Grid>
                <Footer />
            </Grid>
        </Grid>
    );
};

export default SubPujan;
