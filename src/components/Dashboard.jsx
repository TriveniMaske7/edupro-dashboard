import * as React from 'react';
import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid'; 
// import useMediaQuery from '@mui/material';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip, BarChart, Bar, PieChart, Pie} from 'recharts';



const pdata = [
    {
        name:"python",
        student:13,
        fees:10
    },
    {
        name:"java",
        student:14,
        fees:18
    },
    {
        name:"nodejs",
        student:9,
        fees:11
    },
    {
        name:".net",
        student:12,
        fees:8
    },
    {
        name:"PHP",
        student:16,
        fees:17
    },
    {
        name:"html",
        student:15,
        fees:19
    },
    {
        name:"css",
        student:10,
        fees:20
    }
]



function Dashboard(){
    // const isActive = useMediaQuery('(max-width: 100px)')
    return(
        <>
        <Box>
        <Grid container >
            <Grid item xs={12} sm={4}>
                <Typography ml={2} mt={2}>Dashboard</Typography>
                <Typography variant="h4" component="h3" ml={2} mt={2}>Blog Overview</Typography>
                <Typography ml={2} mt={2}>BarChart</Typography>
            </Grid>
        </Grid>
        </Box>

                                
        <ResponsiveContainer width="100%" aspect={3}>
            <BarChart data={pdata} width={500} height={300} margin={{top:10, right:200, left:30, bottom:5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <Legend/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Bar dataKey="student" fill='#88884d8'/>
                <Bar dataKey="fees" fill='blue'/>
            </BarChart>
        </ResponsiveContainer>
        
        <Box>
        <Grid container >
            <Grid item xs={12} sm={4}>
                <Typography ml={2}>LineChart</Typography>
            </Grid>
        </Grid>
        </Box>
                                
        <ResponsiveContainer width="100%" aspect={3}>
            <LineChart data={pdata} width={500} height={300} margin={{top:5, right:200, left:30, bottom:5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <Legend/>
                <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value)=> value + "Programming"}/>
                <YAxis/>
                <Tooltip contentStyle={{backgroundColor:'yellow'}}/>
                <Line type="monotone" dataKey="student" stroke='red' activeDot={{r:8}}/>
                <Line type="monotone" dataKey="fees" stroke='green'activeDot={{r:8}}/>
            </LineChart>
        </ResponsiveContainer>
        <Box>
        <Grid container >
            <Grid item xs={12} sm={4}>
                <Typography ml={2}>PieChart</Typography>
            </Grid>
        </Grid>
        </Box>
        <PieChart width={730} height={250}>
            <Pie data={pdata} dataKey="student" nameKey="name" cx="20%" cy="50%" outerRadius={50} fill="#8884d8" />
            <Pie data={pdata} dataKey="fees" nameKey="name" cx="20%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
        </PieChart>

        
    </>
    )
    
}
export default Dashboard;