import React from 'react';
import {
  Persona,
  TabList,
  Tab,
  Field,
  Dropdown,
  Button,
  Switch,
  Slider,
  Checkbox,
  RadioGroup,
  Radio,
  Link,
  Input,
  Option
} from '@fluentui/react-components';
import { SearchRegular } from '@fluentui/react-icons';

export default function List() {
  return (
    <div style={{
      display: 'flex',
      rowGap: '32px',
      width: '750px',
      padding: '16px',
      flexDirection: 'column'
    }}>
      <h3>SP365 v2.0</h3>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        columnGap: '16px',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '16px'
        }}>
          <div>
            <Persona
              textPosition="after"
              name="SPS Viet Nam"
              presence={{ status: 'available' }}
              secondaryText="Online"
            />
          </div>
          <div>
            <TabList defaultSelectedValue="tab1">
              <Tab value="tab1">Home</Tab>
              <Tab value="tab2">Pages</Tab>
              <Tab value="tab3">Documents</Tab>
            </TabList>
          </div>
          <div>
            <Field>
              <Input placeholder="Tìm kiếm" contentAfter={<SearchRegular/>}/>
            </Field>
          </div>
          <div>
            <Dropdown
              clearable
              placeholder="Chọn từ danh sách"
            >
              <Option>Red</Option>
              <Option>Green</Option>
              <Option>Blue</Option>
            </Dropdown>
          </div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '16px',
          columnGap: '16px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            rowGap: '16px',
            columnGap: '16px'
          }}>
            <div>
              <Button appearance={'primary'}>Lưu</Button>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
              <Field>
                <Switch
                  checked={true}
                  label={'Bật'}
                />
              </Field>
              <Field>
                <Switch
                  checked={false}
                  label={'Tắt'}
                />
              </Field>
            </div>
          </div>
          <div>
            <Field>
              <Slider defaultValue={50}/>
            </Field>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            columnGap: '16px'
          }}>
            <div>
              <Field>
                <Checkbox label="Option 1" checked={true}/>
              </Field>
              <Field>
                <Checkbox label="Option 2"/>
              </Field>
            </div>
            <div>
              <Field>
                <RadioGroup>
                  <Radio label="Option 1"/>
                  <Radio label="Option 2"/>
                </RadioGroup>
              </Field>
            </div>
          </div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '16px'
        }}>
          <Field label="Mô tả" required>
            <Input/>
          </Field>
          <div>
            <Link>
              Go to detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
