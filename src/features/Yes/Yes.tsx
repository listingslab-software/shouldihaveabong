import React from 'react'
import './Yes.css'
import {
    Avatar,
    Box,
    IconButton,
    Typography,
} from "@mui/material";
import {NextCard} from "../";

export default function Yes() {    
    const ncpSize = 66;
    return (
        <div className="App"><header className="App-header">  
            <Box sx={{display: "flex"}}>    
                <Box>
                    <IconButton
                        onClick={(e: React.MouseEvent) => {
                            e.preventDefault();
                            window.open("https://ncpapp.eu", "_self");
                        }}>
                        <Avatar sx={{width:ncpSize, height:ncpSize}} 
                        src="/svg/greenLeaf.svg" alt="Nice Cannabis People" />
                    </IconButton>
                </Box>
                <Box sx={{pt:1.25}}>
                    <Typography variant="h2" sx={{fontWeight: "lighter"}}>
                        Yes. Yes you should               
                    </Typography>
                </Box>
            </Box>
            <Box sx={{mt:2}}>
                <NextCard />
            </Box>
        </header>
        
                    
        
        </div>
    )
};

/*
<Box sx={{}}>
            <Typography variant="body2" sx={{fontWeight: "lighter"}}>
                then&nbsp;
                <Link
                    sx={{cursor: "pointer", color: "#1F760D"}}
                    onClick={(e: React.MouseEvent) => {
                        e.preventDefault();
                        window.open("https://divemalta.app", "_self");
                    }}
                >go diving</Link>.
            </Typography>
            </Box>
*/
