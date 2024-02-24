import "./registerevent.css";
import React from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { TimePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Slider,
  Upload,
} from 'antd';

dayjs.extend(customParseFormat);

const onChange = (value: number | string) => {
  console.log('changed', value);
};

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const RegisterEvent = () => {
  return (
    <>
      <h1>Edit event</h1> 

      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item
      label="Event Name"
      name="Event Name"
      rules={[
        {
          required: true,
          message: 'Please input an event name!',
        },
      ]}
    >
      <Input />
    </Form.Item>

        <Form.Item label="Event Time">
        <TimePicker onChange={onChange} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
        </Form.Item>
        <Form.Item label="Event Date">
          <RangePicker />
        </Form.Item>


      <Form.Item
      label="Location"
      name="Location"
      rules={[
        {
          required: true,
          message: 'Please enter a location!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>



        <Form.Item label="Description">
          <TextArea rows={4} />
        </Form.Item>
        
        <Form.Item label="Pricing">
          <InputNumber />
        </Form.Item>



        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <button
              style={{
                border: 0,
                background: 'none',
              }}
              type="button"
            >
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </button>
          </Upload>
        </Form.Item>



        <Form.Item>
          <Button>Save and Publish</Button>
        </Form.Item>



     


      </Form>
    </>
  );
};
export default () => <RegisterEvent/>;

