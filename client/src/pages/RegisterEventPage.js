import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import "../styles/registerevent.css";
import dayjs from 'dayjs';
import {Card, Row, Col} from "antd";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Button, DatePicker, Form, Input, InputNumber, TimePicker, Upload, message } from 'antd';
import Navbar from "../components/Navbar"
const { Dragger } = Upload;

function onChange(value) {
  console.log('changed', value);
}

dayjs.extend(customParseFormat);

const { TextArea } = Input;

const RegisterEvent = () => {

  const [eventCoverFile, setEventCoverFile] = useState(null)
  const [seatingChartFile, setSeatingChartFile] = useState(null)




    const URL = "https://rdt-backend-production.up.railway.app/"; 
    const onFinish = (values) => {
        console.log('Received values of form:', values);

        // POST request to the backend
        axios.post(URL, values)
        .then(response => {
          console.log('Event created:', response.data);
          // Optionally, navigate to another page or show success message
        })
        .catch(error => {
          console.error('Failed to create event:', error);
          // Optionally, show error message to the user
        });
    };

  const eventImageUploadProps = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        setEventCoverFile(info.file)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
    beforeUpload(){
      return false
    }
  };

  return (
    <div>
      <Navbar allowCreateEvent={false} />
      <div className="register-event-container">
        <Form
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 16 }}
          layout="horizontal"
          onFinish={onFinish}
          className="form-container"
        >
          <h1 className="form-title">Register a new event</h1>
          <Form.Item label="Event name" name="event_name"
            rules={[{ required: true, message: 'Please input an event name!' }]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Location"
            name="location"
            rules={[{ required: true, message: 'Please enter a location!' }]}
          >
            <Input />
          </Form.Item>

          {/* Row for Date Inputs */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Start Date" name="event_start_date"
                rules={[{ required: true, message: 'Please select a start date!' }]}
              >
                <DatePicker />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="End Date" name="event_end_date"
                rules={[{ required: true, message: 'Please select an end date!' }]}
              >
                <DatePicker />
              </Form.Item>
            </Col>
          </Row>
          {/* Row for Start and End Time Inputs */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Start Time" name="start_time"
                rules={[{ required: true, message: 'Please select a start time!' }]}
              >
                <TimePicker format={'HH:mm'} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="End Time" name="end_time"
                rules={[{ required: true, message: 'Please select an end time!' }]}
              >
                <TimePicker format={'HH:mm'} />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Description" name="description">
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item label="Pricing" name="pricing">
            <InputNumber min={0} onChange={onChange} />
          </Form.Item>

          {/* Additional Pricing Inputs */}
          <Form.Item label="Rice Student Discount" name="rice_student_discount">
            <InputNumber min={0} />
          </Form.Item>
          <Form.Item label="At-Door Price" name="at_door_price">
            <InputNumber min={0} />
          </Form.Item>
          <Form.Item label="Family Promo Code" name="family_promo_code">
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="default" className="delete-button">
              Delete event
            </Button>
            <Button type="primary" htmlType="submit" className="save-button">
              Save and publish
            </Button>
          </Form.Item>
        </Form>
        <div className="register-event-side">

          <div>
            <Dragger {...eventImageUploadProps}>
              {/* <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p> */}
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                banned files.
              </p>
            </Dragger>

          </div>

          {/* need to change these cards to upload sections */}
          {/* <Card
            hoverable
            className="event-photo"
            cover={<img alt="Event placeholder" src="path_to_your_image_placeholder" />}
          >
            <Button className="side-button edit-event">Edit event</Button>
            <Button className="side-button view-attendance">View attendance</Button>
          </Card> */}

          {/* <Card
            hoverable
            className="seating-chart"
            cover={<img alt="Seating chart placeholder" src="path_to_your_seating_chart_placeholder" />}
          >
            <Button className="side-button edit-event">Edit event</Button>
            <Button className="side-button view-attendance">View attendance</Button>
          </Card> */}
        </div>
      </div>
    </div>
    
  );
};

export default RegisterEvent;