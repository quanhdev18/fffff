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
  MessageBarIntent,
} from "@fluentui/react-components";
import { WarningForm } from "./WarningForm";
import { Dismiss24Regular, Info16Filled, Add20Filled } from "@fluentui/react-icons";
import { createNewItem } from "@/service/WorkGroupservice";
import { ICreateItemRequest } from "@/interfaces/WorkGroupinterfaces";

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
  inputError: {
    borderColor: "#C4314B",
  },
  errorMessage: {
    color: "#d32f2f",
    fontSize: "12px",
    marginTop: "-0.5rem",
  },
  iconRotated: {
    transform: "rotate(180deg)",
    color: "red",
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

const WorkgroupForm = () => {
  const styles = useStyles();

  const [title, setTitle] = React.useState("");
  const [workGroupValue, setWorkGroupValue] = React.useState("");
  const [errors, setErrors] = React.useState({
    title: false,
    workGroupValue: false,
  });
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
  const [showWarningForm, setShowWarningForm] = React.useState(false);

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    // Kiểm tra các trường nhập liệu
    const newErrors = {
      title: !title.trim(),
      workGroupValue: !workGroupValue.trim(),
    };

    console.log("Errors:", newErrors); // Debug lỗi

    setErrors(newErrors);

    // Nếu không có lỗi, thực hiện gọi API để tạo item mới
    if (!newErrors.title && !newErrors.workGroupValue) {
      const newItem: ICreateItemRequest = {
        ListUrl: "/Lists/WorkGroup",
        Data: {
          ID: {
            Type: "Integer",
            Data: "123", // Replace with actual ID if needed
          },
          Title: {
            Type: "Text",
            Data: title,
          },
          WorkGroupValue: {
            Type: "Text",
            Data: workGroupValue,
          },
        },
      };

      try {
        const response = await createNewItem(newItem);

        if (response) {
          console.log("Item created successfully:", response);
          setShowSuccessMessage(true); // Hiển thị thông báo thành công
          setShowWarningForm(false); // Ẩn WarningForm khi thành công
          setTitle(""); // Reset form
          setWorkGroupValue("");
        } else {
          console.error("Failed to create the item.");
          setShowSuccessMessage(false); // Ẩn thông báo thành công nếu không tạo thành công
        }
      } catch (error) {
        console.error("Error creating item:", error);
        setShowWarningForm(true); // Hiển thị WarningForm khi có lỗi gọi API
        setShowSuccessMessage(false); // Ẩn thông báo thành công
      }
    } else {
      // Nếu có lỗi nhập liệu
      setShowSuccessMessage(false); // Ẩn message success nếu có lỗi
      setShowWarningForm(true); // Hiển thị WarningForm khi có lỗi
    }
  };

  const handleCloseWarningForm = () => {
    setShowWarningForm(false); // Đóng WarningForm khi nhấn nút "Đóng"
  };
  
  return (
    <Dialog className={styles.container} >
      <DialogTrigger disableButtonEnhancement>
        <Button icon={<Add20Filled />} style={{ backgroundColor: "var(--colorBrandBackground)", color: "var(--colorNeutralForegroundOnBrand)", borderRadius: "none" }}>
          Thêm mới
        </Button>
      </DialogTrigger>
      <DialogSurface>
        <DialogBody className={styles.formContainer}>
          {showSuccessMessage && (
            <MessageBar intent="success" className={styles.successMessage}>
              <MessageBarBody>
                <MessageBarTitle>Thêm mới thành công</MessageBarTitle>
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
            className={styles.tittleHeader}
          >
            Thêm mới
          </DialogTitle>
  
          <DialogContent className={styles.formContent}>
            <Text className={styles.formTitle}>Thông tin chung</Text>
  
            <div className={styles.inputTittle}>
              <Label required htmlFor="title">Tiêu đề</Label>
              <Input
                id="title"
                className={`${styles.inputField} ${errors.title ? styles.inputError : ""}`}
                placeholder="Nhập tên workgroup"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                contentAfter={errors.title ? (
                  <Info16Filled className={styles.iconRotated} />
                ) : null}
              />
              {errors.title && (
                <span className={styles.errorMessage}>Vui lòng nhập thông tin</span>
              )}
            </div>
  
            <div className={styles.inputTittle}>
              <Label required htmlFor="workGroupValue">WorkGroupValue</Label>
              <Input
                id="workGroupValue"
                className={`${styles.inputField} ${errors.workGroupValue ? styles.inputError : ""}`}
                placeholder="Nhập workgroup"
                value={workGroupValue}
                onChange={(e) => setWorkGroupValue(e.target.value)}
                contentAfter={errors.workGroupValue ? (
                  <Info16Filled className={styles.iconRotated} />
                ) : null}
              />
              {errors.workGroupValue && (
                <span className={styles.errorMessage}>Vui lòng nhập thông tin</span>
              )}
            </div>
  
            {/* Hiển thị WarningForm nếu có lỗi */}
            {showWarningForm && <WarningForm handleClose={handleCloseWarningForm} />}
          </DialogContent>
  
          <DialogActions className={styles.buttonContainer}>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">Hủy</Button>
            </DialogTrigger>
            <Button onClick={handleSubmit} appearance="primary" className={styles.confirmButton} >Xác nhận</Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};

export default WorkgroupForm;
