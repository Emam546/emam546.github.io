import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
interface Props {
    state: boolean;
    handleClose: () => any;
}
export default function MessageDialog({ state, handleClose }: Props) {
    return (
        <Dialog
            open={state}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Message Sent Successfully"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Thank you for sending the message! Your message has been
                    successfully delivered and received. We appreciate your time
                    and effort in reaching out to us. Our team will review your
                    message and respond as soon as possible. If you have any
                    further questions or concerns, please don
                    {"'"}t hesitate to reach out again. Once again, thank you
                    for choosing our services and contacting us. We value your
                    feedback and look forward to assisting you further.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleClose}
                    autoFocus
                >
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    );
}
