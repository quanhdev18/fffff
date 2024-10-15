
import * as React from "react";
import {
  Dialog,
  DialogSurface,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogBody,
  Button,
  makeStyles,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  customDialog: {
    width: "328px",
    height: "180px",
    padding: '23px 32px 32px',
  },
  text: {
    fontWeight: '700',
    fontSize: '18px',
  },
  confirmButton: {
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.2rem 0.4rem -0.075rem",
    width: "118px",
  },
  button: {
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.2rem 0.4rem -0.075rem",
    marginTop: '10px',
  },
});

export const WarningForm = ({ handleClose }) => { // Chuyển handleSubmit thành handleClose
  const styles = useStyles();
  
  return (
    <Dialog modalType="non-modal" open={true}> {/* Mở dialog tự động */}
      <DialogSurface className={styles.customDialog}>
        <DialogBody>
          <DialogTitle action={null} className={styles.text}>Thông báo</DialogTitle>
          <DialogContent>
            Vui lòng nhập đủ các trường dữ liệu yêu cầu.
          </DialogContent>
          <DialogActions className={styles.button}>
            <Button appearance="secondary" onClick={handleClose}>Đóng</Button> 
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};

