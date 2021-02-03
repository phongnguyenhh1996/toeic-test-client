import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { DialogTop,DialogContentTop,DialogContentBody,Dialogbottom } from "./style";
import {FaPlay,FaUsers} from "react-icons/fa";
import { Test } from '../../utils/function';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

export const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <DialogTop disableTypography className={classes.root} {...other}>
      <div>
        {children}
        {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
      </div>
    </DialogTop>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

interface openDetail {
    isOpen:boolean,
    handleClose: () => void,
    test ?: Test
}
 const  DetailTestItem:React.FC<openDetail> = ({isOpen, handleClose,test= {}}) => {

    return (
        <div>
          <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={isOpen}>
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                  <h3>{test.name}</h3>
                  <span className="dialog-top-span dialog-top-span-1">{test.questions } questions</span>
                  <span className="dialog-top-span dialog-top-span-2">{test.viewCount } likes</span>
             
              </DialogTitle>
              <DialogContent >
                  <DialogContentTop>
                    <h3>past simple form</h3>
                    <div>
                      <p><span>{test.author}</span></p>
                      <p><span>Grades: </span><span>5th to 14th</span></p>
                    </div>
                  </DialogContentTop>
                  <DialogContentBody>
                    <p>Decriptons : <span>{test.description}</span></p>
                  </DialogContentBody>

              </DialogContent>
              <Dialogbottom>
                  <Button onClick={handleClose} endIcon={<FaPlay/>} className="btn-dialog btn-dialog-1">
                        Practice
                  </Button>
                  <Button onClick={handleClose} endIcon={<FaUsers/>} className="btn-dialog btn-dialog-2">
                      Challenge Friends
                  </Button>
              </Dialogbottom>
          </Dialog>
        </div>
    );
}

export default DetailTestItem;