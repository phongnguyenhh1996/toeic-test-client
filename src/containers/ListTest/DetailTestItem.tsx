import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { DialogTop, DialogContentTop, DialogContentBody, Dialogbottom, TopImg, DialogTest } from "./style";
import {FaPlay,FaUsers} from "react-icons/fa";
import { Test } from '../../utils/function';
import { DEFAULT_AVATAR_IMG } from '../Dashboard/components/TestItem';
import CustomButton from '../../components/CustomButton';
import { postAttemptTest } from '../../services/tests';
import { useDispatch } from 'react-redux';
import { getDetailTestRequest } from '../../actions/tests';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
      fontFamily: 'Roboto',
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
    isOpen: boolean,
    handleClose: () => void,
    test?: Test
}
 const  DetailTestItem:React.FC<openDetail> = ({isOpen, handleClose, test}) => {

    const dispatch = useDispatch()
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    const handleAttempTest = () => {
      if (test?.id) {
        setIsLoading(true)
        postAttemptTest(test.id).then(res => {
          if (res.status === 200 && test.id) {
            dispatch(getDetailTestRequest(test.id, {
              onSuccess: () => {
                setIsLoading(false)
                history.push('/exam')
              },
              onFailure: () => {
                setIsLoading(false)
              }
            }))
          }
        })
      }
    }

    return (
          <DialogTest onClose={handleClose} aria-labelledby="customized-dialog-title" open={isOpen}>
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                  <TopImg style={{backgroundImage:`url(${test?.avatarSrc || DEFAULT_AVATAR_IMG})`}}/>
                  <span className="dialog-top-span dialog-top-span-1">{test?.questions } questions</span>
                  <span className="dialog-top-span dialog-top-span-2">{test?.viewCount } likes</span>
              </DialogTitle>
              <DialogContent >
                  <DialogContentTop>
                    <h3>{test?.name}</h3>
                    <div>
                      <p><span>{test?.author}</span></p>
                      <p><span>Grades: </span><span>5th to 14th</span></p>
                    </div>
                  </DialogContentTop>
                  <DialogContentBody>
                    {test?.description
                      ? <p>Description : <span>{test.description}</span></p>
                      : "No description."
                    }
                  </DialogContentBody>

              </DialogContent>
              <Dialogbottom>
                  <CustomButton
                    $isLoading={isLoading}
                    theme="green-solid-no-shadow"
                    onClick={handleAttempTest}
                    endIcon={<FaPlay/>}
                    className="btn-dialog"
                    disabled={isLoading}
                  >
                    Practice
                  </CustomButton>
                  <CustomButton
                    disabled={isLoading}
                    theme="purple"
                    onClick={handleClose}
                    endIcon={<FaUsers/>}
                    className="btn-dialog"
                  >
                    See detail
                  </CustomButton>
              </Dialogbottom>
          </DialogTest>
    );
}

export default DetailTestItem;