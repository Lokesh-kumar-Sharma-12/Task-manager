import * as React from 'react';

import { FaRegEdit } from "react-icons/fa";

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


function Edit({ taskName, index, updateTask }) {
    const [open, setOpen] = useState(false);
    const [editValue, setEditValue] = useState(taskName);

    console.log(editValue);

    const handleSave = () => {
        updateTask(index, editValue);
        setOpen(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
        setEditValue(taskName);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <React.Fragment>
                <Button onClick={handleClickOpen}>
                    <FaRegEdit color='black' size={23} />
                </Button>
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                        Edit your task...
                    </DialogTitle>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={(theme) => ({
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: theme.palette.grey[500],
                        })}
                    >
                        <CloseIcon />
                    </IconButton>
                    <DialogContent dividers>
                        {/* Connect the Input to the state */}
                        <input
                            type="text"
                            className='h-10 w-[40vw] border-red-400 rounded-lg bg-blue-200 p-2 text-blue-900'
                            placeholder='Enter your new task.....'
                            value={editValue} // Set value
                            onChange={(e) => setEditValue(e.target.value)} // Update state on type
                        />
                    </DialogContent>
                    <DialogActions>
                        {/* Connect the Save button */}
                        <Button autoFocus onClick={handleSave}>
                            Save changes
                        </Button>
                    </DialogActions>
                </BootstrapDialog>
            </React.Fragment>
        </div>
    );
}


export default Edit
