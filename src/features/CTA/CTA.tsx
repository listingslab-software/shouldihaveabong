import React from 'react'
import {
    Box,
    Typography,
} from "@mui/material"

export default function CTA() {    
    return (
        <Box sx={{position:"relative"}}>
            <Box sx={{m:2}}>
                <Typography variant="h3" sx={{fontWeight: "lighter"}}>
                    Call To Action                 
                </Typography>
            </Box>
        </Box>
    )
}
