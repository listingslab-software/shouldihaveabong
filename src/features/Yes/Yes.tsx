import React from 'react'
import './Yes.css'
import {
    Avatar,
    Box,
    IconButton,
    Typography,
    Link,
} from "@mui/material";

export default function Yes() {    
    const ncpSize = 64;
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
                <Box sx={{pt:1, ml:0.5}}>
                    <Typography variant="h2" sx={{fontWeight: "lighter"}}>
                        Yes.               
                    </Typography>
                </Box>
            </Box>
            <Box sx={{mt:2}}>
            <Box sx={{}}>
            <Typography variant="body2" sx={{fontWeight: "lighter"}}>
                then&nbsp;
                <Link
                    sx={{cursor: "pointer", color: "#1F760D"}}
                    onClick={(e: React.MouseEvent) => {
                        e.preventDefault();
                        window.open("https://sensiseeds.com/en/feminized-seeds/whitelabel/northern-lights-automatic?a_aid=cannastore", "_self");
                    }}
                >grow your own</Link>.
            </Typography>
            </Box>
            </Box>
        </header>
        
                    
        
        </div>
    )
};

/*

*/
