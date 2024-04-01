import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import "../styles/registerevent.css";
import dayjs from 'dayjs';
import { Card, Row, Col } from "antd";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Button, DatePicker, Form, Input, InputNumber, TimePicker, Upload, message } from 'antd';
import Navbar from "../components/Navbar"
import { useNavigate } from 'react-router-dom';
const { Dragger } = Upload;

function onChange(value) {
  console.log('changed', value);
}

dayjs.extend(customParseFormat);

const { TextArea } = Input;

const RegisterEvent = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const navigate = useNavigate()

  const [eventCoverFile, setEventCoverFile] = useState(null)
  const [seatingChartFile, setSeatingChartFile] = useState(null)


    const URL = "https://rdt-backend-production.up.railway.app/"; 
    const onFinish = (values) => {
      let start_hour = 0
      let am_pm = "AM"
      if (values.start_time.$H > 12) {
        start_hour = values.start_time.$H - 12
        am_pm = 'PM'
      } else {
        start_hour = values.start_time.$H
      }

      let end_hour = 0
      let am_pm_end = "AM"
      if (values.end_time.$H > 12) {
        end_hour = values.end_time.$H - 12
        am_pm_end = 'PM'
      } else {
        end_hour = values.end_time.$H
      }

      let newEvent = {
        "name": values.event_name,
        "location": values.location,
        "startDate": values.event_date,
        "basePrice": values.pricing,
        "studentDiscount": values.rice_student_discount,
        "atDoorPrice": values.at_door_price,
        "description": values.description,
        "redemptionCode": values.family_promo_code,
        "startTime": start_hour + ':' + (values.start_time.$m < 10 ? '0' : '') +  values.start_time.$m + " " + am_pm,
        "endTime": end_hour + ':' + (values.end_time.$m < 10 ? '0' : '') + values.end_time.$m + " " + am_pm_end

        // TODO: quang
        // "coverPhoto": ,
        // "seatingPhoto": ,
        // "availableSeats": ,
      }
      console.log(newEvent)

        // POST request to the backend
        axios.post(URL + "addevent", newEvent)
        .then(response => {
          console.log('Event created:', response.data);
          // Optionally, navigate to another page or show success message
          navigate('/home', { state: { newEvent: values.event_name}})
          // messageApi.open({
          //   type: 'success',
          //   content: 'Created new event, ' + values.event_name + "!",
          // });


        })
        .catch(error => {
          console.error('Failed to create event:', error);
          // Optionally, show error message to the user
          messageApi.open({
            type: 'error',
            content: 'Unable to create new event',
          });
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
      {contextHolder}
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
              <Form.Item label="Date" name="event_date"
                rules={[{ required: true, message: 'Please select a start date!' }]}
              >
                {/* <DatePicker /> */}
                <Input placeholder="MM/DD/YYYY"/>
              </Form.Item>
            </Col>
            {/* <Col span={12}>
              <Form.Item label="End Date" name="event_end_date"
                rules={[{ required: true, message: 'Please select an end date!' }]}
              >
                {/* <DatePicker /> */}
                {/* <Input placeholder="MM/DD/YYYY" />
              </Form.Item>
            </Col> */}
          </Row>
          {/* Row for Start and End Time Inputs */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Start Time" name="start_time"
                rules={[{ required: true, message: 'Please select a start time!' }]}
              >
                <TimePicker use12Hours={true} format={'h:mm A'} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="End Time" name="end_time"
                rules={[{ required: true, message: 'Please select an end time!' }]}
              >
                <TimePicker use12Hours={true} format={'h:mm A'} />
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
            {/* <Button type="default" className="delete-button">
              Delete event
            </Button> */}
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