import React, { useState } from 'react'

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import Edit from './Edit';
import Delete from './Delete';
import Timerdiv from './Timerdiv';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function Task(props) {

    const [open, setOpen] = useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className='text-white text-lg p-2 h-12 rounded-lg w-full bg-red-300 flex justify-between hover:bg-red-400  '>

                <div onClick={handleClickOpen} className='cursor-pointer w-full text-left'>
                    <span>{props.taskName}</span>
                </div>
                <div className='flex'>
                    {/* <Edit  updateTask={props.updateTask}/> */}
                    <Edit taskName={props.taskName} index={props.index} updateTask={props.updateTask} />
                    <Delete removeTask={props.removeTask} />

                </div>
            </div>

            <div>
                <React.Fragment>
                    <BootstrapDialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                    >
                        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                            Details of task...
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
                            <div>
                                <h1 className='h-10 font-bold justify-center flex border bg-blue-200 items-center rounded-lg mb-2'>{props.taskName}</h1>
                                <div className="flex justify-center">
                                    <Timerdiv />
                                </div>
                                <div>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus aperiam at libero facere porro facilis est ipsam culpa minima aspernatur voluptatibus unde ullam, iste veniam nemo eveniet ducimus quis laboriosam!
                                    Vitae a neque excepturi ipsam, ducimus, natus, dolores similique debitis facere voluptatum minus. Exercitationem, repellendus amet doloremque, aperiam corrupti eligendi temporibus molestias adipisci nostrum porro veniam illo libero, nisi possimus.
                                    Earum sapiente placeat itaque iste quasi quae minima? Alias provident aperiam dolores cumque ab. Corrupti eaque expedita incidunt perspiciatis amet recusandae cumque quibusdam nulla commodi, mollitia odio illo omnis iste.
                                    Quas aspernatur aperiam, natus doloribus facere ipsa quod? Odio porro ab cumque excepturi amet ipsa voluptas distinctio! Reprehenderit, cumque eum. Numquam reiciendis quia nemo quae, tempora eveniet nam consequuntur obcaecati.
                                    Modi molestias, quam numquam quibusdam totam, accusantium adipisci earum possimus praesentium qui, obcaecati eligendi suscipit! Rem, unde excepturi. Sapiente obcaecati autem suscipit vel fugit temporibus vitae itaque sit sequi maxime!
                                </div>

                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={handleClose}>
                                Done
                            </Button>
                        </DialogActions>
                    </BootstrapDialog>
                </React.Fragment>
            </div>

        </>
    )
}

export default Task