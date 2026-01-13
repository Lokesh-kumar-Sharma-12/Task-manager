import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Delete(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} >
                <MdDeleteForever color='black' size={26}/>
            </Button>
            <React.Fragment>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Delete Task?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you sure you want to delete this task? This action cannot be undone.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button color='error' onClick={() => {
                            props.removeTask();
                            handleClose();
                        }}>Delete</Button>
                        <Button onClick={handleClose} autoFocus>
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment> 
        </div>
    )
}

export default Delete