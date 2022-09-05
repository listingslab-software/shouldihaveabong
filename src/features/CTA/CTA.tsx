import React from 'react'
import {
    Box,
    Fab,
    Typography,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import {Icon} from "../Shared";

export default function CTA() {    

    const [ anchorEl, setAnchorEl ] = React.useState<null | HTMLElement>(null)
    const open = Boolean( anchorEl )
      
    const menuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    }
  
    const closeMenu = () => {
      setAnchorEl(null);
    }

    return (
        <Box sx={{position:"relative"}}>
          <Fab
            color="secondary"
            sx={{ mr: 1, mt:-1.5 }}
            onClick={ menuClick }>
            <Icon icon="menu" />
          </Fab>
          <Menu
            id="menu"
            anchorEl={ anchorEl }
            open={open}
            onClose={ closeMenu }>

            <MenuItem sx={{width: 200}} onClick={() =>{
                window.open("https://github.com/listingslab-software/shouldihaveabong", "_blank")
                closeMenu()
              }}>
              <ListItemIcon>
                <Icon icon="github" color="primary" />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="body2">
                  Git
                </Typography>
              </ListItemText>
            </MenuItem>

            <MenuItem sx={{width: 200}} onClick={() =>{            
              window.open("/", "_self");
              closeMenu();
            }}>
              <ListItemIcon>
                <Icon icon="refresh" color="primary"/>
              </ListItemIcon>
              <ListItemText>
                <Typography variant="body2">
                  Reset
                </Typography>
              </ListItemText>
            </MenuItem>

          </Menu>    
      </Box>
    )
}
