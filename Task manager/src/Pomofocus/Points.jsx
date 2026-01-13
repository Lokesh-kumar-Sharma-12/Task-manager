import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaLock } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { FaEllipsisV } from "react-icons/fa";


function Points(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
            <FaEllipsisV color='white'/>
            </Button>
            <Menu sx={{color:"grey"}}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    list: {
                        'aria-labelledby': 'basic-button',
                    },
                }}
            >
                <MenuItem onClick={handleClose} sx={{color:'grey',gap:"5px"}}> <RiDeleteBinLine color='black' /> clear finished tasks</MenuItem>
                <MenuItem onClick={handleClose} sx={{color:'grey',gap:"5px"}}> <FaRegCopy color='black' />Use Template<FaLock color='gray'  /></MenuItem>
                <MenuItem onClick={handleClose} sx={{color:'grey',gap:"5px"}}> <FaBars color='black'  />Import from Todoist </MenuItem>
                <MenuItem onClick={handleClose} sx={{color:'grey',gap:"5px"}}> <FaCheck color='black'  />Clear act pomodoros</MenuItem>
                <MenuItem onClick={handleClose} sx={{color:'grey',gap:"5px"}}> <FaBoxArchive color='gray'  />Hide tasks <FaLock color='gray'  /></MenuItem>
                <hr />
                <MenuItem onClick={()=>{
                    handleClose();
                    props.removeallTask()
                }} sx={{color:'grey',gap:"5px"}}> <RiDeleteBinLine color='black'  />Clear all tasks</MenuItem>
            </Menu>
        </div>
    )
}

export default Points
