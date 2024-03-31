import React from 'react';
import axios from 'axios'; 
import "../styles/editevent.css";
import dayjs from 'dayjs';
import {Card, Row, Col} from "antd";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Button, DatePicker, Form, Input, InputNumber, TimePicker} from 'antd';
import { useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"

dayjs.extend(customParseFormat);

const { TextArea } = Input;

const EditEvent = () => {
  let currEvent = useLocation().state;
  console.log(currEvent)

  const URL = "https://rdt-backend-production.up.railway.app/"; 

  const onFinish = (values) => {
      console.log('Received values of form:', values);
      let update = {
        "name": values.event_name,
        "location": values.location,
        "description": values.description,
        "startDate": values.startDate,
        // ""
      }

      // POST request to the backend
      // axios.post(URL + "updateevent", values)
      // .then(response => {
      //   console.log('Event created:', response.data);
      //   // Optionally, navigate to another page or show success message
      // })
      // .catch(error => {
      //   console.error('Failed to create event:', error);
      //   // Optionally, show error message to the user
      // });
  };

  // Creating the edit event container
  return (
    <div>
      <Navbar allowCreateEvent={false} />
      <div className="edit-event-container">

        <Form
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 16 }}
          layout="horizontal"
          onFinish={onFinish}
          className="form-container"
        >
          <h1 className="form-title">Edit Event</h1>
          <Form.Item label="Event name" name="event_name">
            <Input placeholder={currEvent.name}/>
          </Form.Item>

          <Form.Item
            label="Location"
            name="location"
          >
            <Input placeholder={currEvent.location}/>
          </Form.Item>

          {/* Row for Date Inputs */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Start Date" name="event_start_date"
              >
                <DatePicker />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="End Date" name="event_end_date"
              >
                <DatePicker />
              </Form.Item>
            </Col>
          </Row>
          {/* Row for Start and End Time Inputs */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Start Time" name="start_time"
              >
                <TimePicker format={'HH:mm'} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="End Time" name="end_time"
              >
                <TimePicker format={'HH:mm'} />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Description" name="description">
            <TextArea rows={4} placeholder={currEvent.description}/>
          </Form.Item>

          <Form.Item label="Pricing" name="pricing">
            <InputNumber min={0} onChange={onChange} placeholder={currEvent.prices[0]}/>
          </Form.Item>

          {/* Additional Pricing Inputs */}
          <Form.Item label="Rice Student Discount" name="rice_student_discount">
            <InputNumber min={0} placeholder={currEvent.prices[1]} />
          </Form.Item>
          <Form.Item label="At-Door Price" name="at_door_price">
            <InputNumber min={0} placeholder={currEvent.prices[2]} />
          </Form.Item>
          <Form.Item label="Family Promo Code" name="family_promo_code">
            <Input  />
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
          <Card
            hoverable
            className="event-photo"
            cover={<img alt="Event placeholder" src="path_to_your_image_placeholder" />}
          >
            <Button className="side-button edit-event">Edit event</Button>
            <Button className="side-button view-attendance">View attendance</Button>
          </Card>

          <Card
            hoverable
            className="seating-chart"
            cover={<img alt="Seating chart placeholder" src="path_to_your_seating_chart_placeholder" />}
          >
            <Button className="side-button edit-event">Edit event</Button>
            <Button className="side-button view-attendance">View attendance</Button>
          </Card>
        </div>
      </div>

    </div>
    
  );
};

export default EditEvent;

function onChange(value) {
  console.log('changed', value);
}

