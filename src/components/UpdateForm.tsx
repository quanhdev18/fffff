import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
  Button,
  Label,
  Input,
  Text,
  makeStyles,
  MessageBar,
  MessageBarBody,
  MessageBarTitle,
} from "@fluentui/react-components";
import { WarningForm } from "./WarningUpdateForm";
import { Dismiss24Regular } from "@fluentui/react-icons";
import { updateItem, getItemById } from "@/service/WorkGroupservice";
import { IUpdateItemRequest, IApiResponseUpdate } from "@/interfaces/WorkGroupinterfaces";

const useStyles = makeStyles({
  container: {
    height: '263px',
  },
  formContainer: {
    alignItems: "center",
    width: "552px",
    padding: '8px',
    paddingTop: '3px',
  },
  content: {
    paddingBottom: '30px',
    paddingLeft: '3px',
    paddingRight: '3px',
  },
  titleHeader: {
    fontWeight: '700',
    fontSize: '18px',
    alignItems: 'center',
    justifyItems: 'center',
  },
  formTitle: {
    fontWeight: '600',
    marginTop: '0px',
    fontSize: '14px',
  },
  inputTitle: {
    marginTop: '14px',
  },
  inputField: {
    width: "100%",
    backgroundColor: "#f5f5f5",
    border: 'none',
    borderRadius: 'none',
  },
  successMessage: {
    marginBottom: "16px",
    zIndex: '1',
  },
  buttonContainer: {
    paddingTop: '25px',
  },
  confirmButton: {
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.2rem 0.4rem -0.075rem",
    width: "118px",
  },
  formContent: {
    gap: '10px',
  },
});

const UpdateForm: React.FC<{ itemId: number | string }> = ({ itemId }) => {

  const styles = useStyles();

  const [title, setTitle] = React.useState("");
  const [workGroupValue, setWorkGroupValue] = React.useState("");
  const [placeholderTitle, setPlaceholderTitle] = React.useState(""); // State mới cho placeholder của Title
  const [placeholderWorkGroupValue, setPlaceholderWorkGroupValue] = React.useState(""); // State mới cho placeholder của WorkGroupValue
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
  const [showWarningForm, setShowWarningForm] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Gọi API để lấy chi tiết item khi form được mở
    const fetchData = async () => {
      try {
        const itemDetails = await getItemById(itemId);
        if (itemDetails) {
          setPlaceholderTitle(itemDetails.Title); // Đặt giá trị placeholder cho Title
          setPlaceholderWorkGroupValue(itemDetails.WorkGroupValue); // Đặt giá trị placeholder cho WorkGroupValue
        }
      } catch (error) {
        console.error("Error fetching item details:", error);
      } finally {
        setLoading(false); // Kết thúc trạng thái loading khi dữ liệu đã tải xong
      }
    };

    fetchData();
  }, [itemId]);

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    const updatedItem: IUpdateItemRequest = {
      ListUrl: "/Lists/WorkGroup",
      ItemId: itemId,
      Data: {
        Title: {
          FieldType: "Text",
          Data: title,
        },
        WorkGroupValue: {
          FieldType: "Text",
          Data: workGroupValue,
        },
      },
    };

    try {
      const response: IApiResponseUpdate | undefined = await updateItem(updatedItem);

      if (response && response.success) {
        setShowSuccessMessage(true);
        setShowWarningForm(false);
      } else {
        console.error("Failed to update the item.");
        setShowSuccessMessage(false);
      }
    } catch (error) {
      console.error("Error updating item:", error);
      setShowWarningForm(true);
      setShowSuccessMessage(false);
    }
  };

  const handleCloseWarningForm = () => {
    setShowWarningForm(false);
  };

  return (
    <Dialog >
      <div className={styles.container}>
      <DialogTrigger disableButtonEnhancement>
        <Button style={{ backgroundColor: "var(--colorBrandBackground)", color: "var(--colorNeutralForegroundOnBrand)", borderRadius: "none" }}>
          Cập nhật
        </Button>
      </DialogTrigger>
      <DialogSurface>
        <DialogBody className={styles.formContainer}>
          {showSuccessMessage && (
            <MessageBar intent="success" className={styles.successMessage}>
              <MessageBarBody>
                <MessageBarTitle>Cập nhật thành công</MessageBarTitle>
              </MessageBarBody>
            </MessageBar>
          )}

          <DialogTitle
            action={
              <DialogTrigger action="close">
                <Button
                  appearance="subtle"
                  aria-label="close"
                  icon={<Dismiss24Regular />}
                />
              </DialogTrigger>
            }
            className={styles.titleHeader}
          >
            Cập nhật thông tin
          </DialogTitle>

          <DialogContent className={styles.formContent}>
            {loading ? (
              <Text>Đang tải dữ liệu...</Text>
            ) : (
              <>
                <Text className={styles.formTitle}>Thông tin chung</Text>

                <div className={styles.inputTitle}>
                  <Label required htmlFor="title">Tiêu đề</Label>
                  <Input
                    id="title"
                    className={styles.inputField}
                    placeholder={placeholderTitle || "Nhập tên workgroup"}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className={styles.inputTitle}>
                  <Label required htmlFor="workGroupValue">WorkGroupValue</Label>
                  <Input
                    id="workGroupValue"
                    className={styles.inputField}
                    placeholder={placeholderWorkGroupValue || "Nhập workgroup"}
                    value={workGroupValue}
                    onChange={(e) => setWorkGroupValue(e.target.value)}
                  />
                </div>

                {showWarningForm && <WarningForm handleClose={handleCloseWarningForm} />}
              </>
            )}
          </DialogContent>

          <DialogActions className={styles.buttonContainer}>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">Hủy</Button>
            </DialogTrigger>
            <Button onClick={handleSubmit} appearance="primary" className={styles.confirmButton}>Xác nhận</Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
      </div>
    </Dialog>
  );
};

export default UpdateForm;
