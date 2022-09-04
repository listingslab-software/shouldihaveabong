import React from 'react'
import './Yes.css'
import {
    Box,
    Typography,
} from "@mui/material"

export default function Yes() {    
    return (
        <div className="App"><header className="App-header">
            <Box sx={{display:"flex"}}>
                <Box sx={{m:2}}>
                    <Typography variant="h3" sx={{fontWeight: "lighter"}}>
                        Yes.                  
                    </Typography>
                </Box>
            </Box>
        </header></div>
    )
}
