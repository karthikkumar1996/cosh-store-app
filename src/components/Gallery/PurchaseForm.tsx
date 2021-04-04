import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

interface IPurchaseFormProps {
  open: boolean;
  handleClose: () => void;
  handlePurchase: () => void;
}

const PurchaseForm: React.FunctionComponent<IPurchaseFormProps> = (
  props: IPurchaseFormProps
) => {
  let [isEmailValid, setEmailValidity] = useState(false);
  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Purchase</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To Purchase this Art, please enter your email address here. We will
          reach back to you.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          error={!isEmailValid}
          onChange = {(event) => {setEmailValidity(validateEmail(event.currentTarget.value))}}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={(event) => isEmailValid && props.handlePurchase()} color="primary">
          Place order
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PurchaseForm;
