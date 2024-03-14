import React, { useState } from 'react'
import { Button, Grid, Typography } from '@mui/material'
import bpohome from '../assets/BPO.png'
import shree from '../assets/Ungli.png'
import logo from '../assets/logo.png'
import arrow from '../assets/arrow.png'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { getData, postData } from "../ApiServices/ServerServices";
import { ScheduleMeeting } from 'react-schedule-meeting';
import Footer from "./MyComponent/Footer";
import mobile from '../assets/mobile2.png'
import ganesh from "../assets/Ganesh1.png";
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Swal from 'sweetalert2'

const DateAndSlot = (props) => {
    const theme = useTheme()
    var location = useLocation()
    var navigate = useNavigate()
    const [button, setButton] = useState(true)
    const [selectedDate, setDate] = useState('')
    const [slot, setSlot] = useState('')
    const matches = useMediaQuery(theme.breakpoints.down(1000))
    const matches3 = useMediaQuery(theme.breakpoints.down(700));
    const bgImage = matches3 ? mobile : bpohome
    const availableTimeslots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map((id) => {
        return {
            id,
            startTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(9, 0, 0, 0)),
            endTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(21, 0, 0, 0)),
        };
    });
    const handleSelect = async (data) => {
        const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
        const locale = navigator.language; // get the user's browser language
        const options1 = { day: 'numeric', month: 'numeric', year: 'numeric' };
        const locale1 = navigator.language;
        const date = new Date(data.startTime);

        const dateString = date.toLocaleDateString(locale1, options1);
        const timeString = date.toLocaleTimeString(locale, options);
        var formData = new FormData()
        formData.append('date', dateString)
        formData.append('time', timeString)
        var result1 = await postData('time/check-datetime', formData, true)
        console.log(result1.status)
        if (result1.status != true) {
            setDate(dateString)
            setSlot(timeString)
            setButton(false)

        }
        else {
            Swal.fire(
                'This Slot is Already Booked.',
                'Select Another Slot',
                'error'
            )

            setButton(true)
        }




    }
    const handleClick = async () => {

        navigate('/details', { state: { subCategoryId: location.state.subCategoryId, categoryId: location.state.categoryId, language: location.state.language, date: selectedDate, slot: slot } })
    }
    return (

        <Grid style={{ marginTop: 15 }}>
            <Grid container spacing={2} style={{ backgroundImage: `url(${bgImage})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', }}>
                <Grid item xs={12} md={matches ? 12 : 8} style={{ display: 'flex', justifyContent: 'start', marginTop: 40, marginBottom: 40, alignItems: 'center', flexDirection: 'column', color: '#fff' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12} style={{ marginLeft: matches3 ? '25%' : '30%', marginTop: matches3 ? '-5%' : '0%' }}>
                            <img src={ganesh} width={200} />
                        </Grid>
                        <Grid item xs={10} style={{ marginTop: 80, display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingLeft: 88 }}>
                            <ScheduleMeeting
                                borderRadius={10}
                                primaryColor="#3f5b85"
                                eventDurationInMinutes={60}
                                availableTimeslots={availableTimeslots}
                                // onSelectedDayChange={(data)=>handle(data)}
                                onStartTimeSelect={(data) => handleSelect(data)}
                                backgroundColor="orange"
                            />
                        </Grid>
                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant='contained' disabled={button} onClick={() => handleClick()}>Next</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4} style={{ marginTop: "10%" }}>
                    <img src={shree} style={{ display: matches ? 'none' : 'flex', width: '100%', alignItems: 'center' }} />
                </Grid>
            </Grid>
            <Grid>
                <Footer />
            </Grid>
        </Grid>
    )
}

export default DateAndSlot
