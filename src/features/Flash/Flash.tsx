import React from 'react'
import {
    Box,
    Typography,
} from "@mui/material"

export default function Flash(props:any) {
    const {children} = props;  

    return (
        
            <Box sx={{
                position:"relative"}
            }>
                <Box sx={{m:2}}>
                    <Typography variant="body1" sx={{fontWeight: "lighter"}}>
                        Flash                  
                    </Typography>
                    {children}
                </Box>
            </Box>
    )
}
