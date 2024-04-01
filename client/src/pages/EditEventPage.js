import React, { useEffect } from 'react';
import axios from 'axios'; 
import "../styles/editevent.css";
import dayjs from 'dayjs';
import {Card, Row, Col} from "antd";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Button, DatePicker, Form, Input, InputNumber, TimePicker} from 'antd';
import { useLocation, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

dayjs.extend(customParseFormat);

const { TextArea } = Input;

const EditEvent = () => {
  let currEvent = useLocation().state;

  const navigate = useNavigate()
  // console.log(currEvent)

  const URL = "https://rdt-backend-production.up.railway.app/"; 
  // const URL = "http://localhost:3000/"; 


  useEffect(() => {
    console.log(currEvent)
  }, [])

  const formatTime = (time) => {
    console.log(time)
    let hour = 0
    let am_pm = "AM"
    console.log(time.$H)
    if (time.$H > 12) {
      hour = time.$H - 12
      am_pm = 'PM'
    } else if (time.$H == 0) {
      hour = 12
      am_pm = 'AM'
    }
    else {
      hour = time.$H
    }
    let formatedTime = hour + ':' + (time.$m < 10 ? '0' : '') + time.$m + " " + am_pm
    console.log(formatedTime)
    return formatedTime
  }

  const onFinish = (values) => {
      // console.log('Received values of form:', values);
      console.log('received', values)
      console.log(Object.entries(values))

      let name = currEvent.name


      let update = {}
      Object.entries(values).forEach(([key, value]) => {
        if (value != undefined) {
          console.log('adding: ', key, value)
          const formattedValue = ['startTime', 'endTime'].includes(key) ? formatTime(value) : value
          update[key] = formattedValue
        }
      });
    // console.log('to update: ', valuesToUpdate)
    console.log('updat with: ', update)


      // POST request to the backend
    if (update) {
      axios.put(URL + "updateevent", update, { params: { name } })
        .then(response => {
          console.log('Event edited:', response.data);
          // Optionally, navigate to another page or show success message
          navigate('/home')
        })
        .catch(error => {
          console.error('Failed to create event:', error);
          // Optionally, show error message to the user
        });

    }
    
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
          <Form.Item label="Event name" name="name">
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
              <Form.Item label="Date" name="date"
              >
                <Input placeholder={currEvent.date}/>
              </Form.Item>
            </Col>
          </Row>
          {/* Row for Start and End Time Inputs */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Start Time" name="startTime"
              >
                <TimePicker format={'h:mm a'} placeholder={currEvent.startTime}/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="End Time" name="endTime"
              >
                <TimePicker format={'h:mm a'} placeholder={currEvent.endTime} />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Description" name="description">
            <TextArea rows={4} placeholder={currEvent.description}/>
          </Form.Item>

          <Form.Item label="Pricing" name="basePrice">
            <InputNumber min={0} onChange={onChange} placeholder={currEvent.basePrice}/>
          </Form.Item>

          {/* Additional Pricing Inputs */}
          <Form.Item label="Rice Student Discount" name="studentDiscount">
            <InputNumber min={0} placeholder={currEvent.studentDiscount} />
          </Form.Item>
          <Form.Item label="At-Door Price" name="atDoorPrice">
            <InputNumber min={0} placeholder={currEvent.atDoorPrice} />
          </Form.Item>
          <Form.Item label="Family Promo Code" name="redemptionCode">
            <Input placeholder={currEvent.redemptionCode} />
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

