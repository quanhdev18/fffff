import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,

} from "@fluentui/react-components";
import {
  AppsList24Filled, QuestionCircle24Filled,
  ShareAndroid24Filled,
  Add24Filled,
  Dismiss20Regular,
} from '@fluentui/react-icons';
import { Body1Stronger, Button, Caption1Stronger, Input, Label, makeStyles, Subtitle1, Subtitle2Stronger, } from '@fluentui/react-components'
import { useNavigate } from 'react-router-dom';
import { ICreateNewJobTitle, IDataOnChange } from '@/interfaces/JobTitleInterface';
import { createNewJobTitle } from '@/service/JobTitleService';
const useStyle = makeStyles({
  dialogContent: {
    width: '531px',
    height: '200px',
    paddingLeft: '10px',
    display: 'flex',
    flexDirection: 'column'
  },
  dialogInput: {
    background: '#f5f5f5',
    border: 'none',
    borderRadius: '0.0625rem',
    marginBottom: '0.75rem'
  },
  dialogDissmiss: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  title: {
    marginBottom: '12px'
  },
  label: {
    marginBottom: '4px'
  },
  dismiss: {
    cursor: 'pointer'
  },
  error: {
    width: '100%', height: '20px', paddingRight: '12px', marginBottom: '10px'
  }
})

const Create: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [formData, setFormData] = useState<ICreateNewJobTitle>({
    title: '',
    code: ''
  });
  const style = useStyle();
  const navigate = useNavigate();
  const handleCloseDialog = () => {
    setIsOpen(!isOpen);
    navigate('/jobtitle')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, data: IDataOnChange) => {
    const { name, value } = data;
    setFormData({ ...formData, [name]: value || '' });
  };

  const click = () =>{
    createNewJobTitle(formData);
    navigate('/jobtitle')
  }
  return (
    <Dialog open={isOpen}>
      <DialogSurface>
        <DialogBody>
          <Subtitle1>Thêm mới</Subtitle1>
          <DialogTrigger disableButtonEnhancement>
            <div className={style.dialogDissmiss}>
              <Dismiss20Regular onClick={handleCloseDialog} className={style.dismiss} />
            </div>
          </DialogTrigger>
          <DialogContent>
            <div className={style.dialogContent}>
              <Body1Stronger className={style.title}>Thông tin chung</Body1Stronger>
              <Label className={style.label} htmlFor='input'>Tiêu đề*</Label>
              <Input className={style.dialogInput} placeholder='Nhập tên chức vụ' name='title' onChange={(e) => handleChange(e, { name: 'title', value: e.target.value })} />
              {error && (<div className={style.error}></div>)}
              <Label className={style.label} htmlFor='input'>Code*</Label>
              <Input className={style.dialogInput} placeholder='Nhập code' name='code' onChange={(e) => handleChange(e, { name: 'code', value: e.target.value })} />
            </div>
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary" onClick={handleCloseDialog}>Huỷ</Button>
            </DialogTrigger>
            <Button appearance="primary" onClick={click}>Xác nhận</Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  )
}

export default Create