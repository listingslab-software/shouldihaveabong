import React from 'react'
import {
    Box,
    Typography,
} from "@mui/material"

export default function Yes() {    
    return (
        
            <Box sx={{
                position:"relative"}
            }>
                <Box sx={{m:2}}>
                    <Typography variant="body1" sx={{fontWeight: "lighter"}}>
                        Yes.                  
                    </Typography>
                </Box>
            </Box>
    )
}
