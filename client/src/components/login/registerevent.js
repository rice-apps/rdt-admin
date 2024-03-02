import React, { useState } from 'react';
import "./registerevent.css";
import dayjs from 'dayjs';
import {Card} from "antd";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Button, DatePicker, Form, Input, InputNumber, List, Tag, Modal } from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const RegisterEvent = () => {
  const [codes, setCodes] = useState([
    { code: 'RICESTUDENT', discount: -2 },
    { code: 'FAMILYDISCOUNT', discount: -4 }
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newCode, setNewCode] = useState('');
  const [newDiscount, setNewDiscount] = useState('');

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (newCode && newDiscount) {
      setCodes([...codes, { code: newCode, discount: parseFloat(newDiscount) }]);
      setNewCode('');
      setNewDiscount('');
    }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const deleteCode = (codeToDelete) => {
    const newCodes = codes.filter(code => code.code !== codeToDelete);
    setCodes(newCodes);
  };

  const onFinish = (values) => {
    console.log('Received values of form:', values);
    // Here we need to handle the form submission, such as sending data to a backend server.
  };

  return (
    <div className="register-event-container">
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
        onFinish={onFinish}
        className="form-container"
      >
        <h1 className="form-title">Register a new event</h1>
        <Form.Item
          label="Event name"
          name="event_name"
          rules={[{ required: true, message: 'Please input an event name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Location"
          name="location"
          rules={[{ required: true, message: 'Please enter a location!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Event Start Date and Time" name="event_dates"
        rules={[{ required: true, message: 'Please enter a Date and Time!' }]}
        >
          <RangePicker showTime />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Pricing" name="pricing">
          <InputNumber min={0} onChange={onChange} />
        </Form.Item>

        <Form.Item label="Special redemption codes">
          <List
            dataSource={codes}
            renderItem={item => (
              <List.Item actions={[<CloseOutlined onClick={() => deleteCode(item.code)} />]}>
                <Tag color="purple">{item.code}</Tag>
                {item.discount}
              </List.Item>
            )}
          />
          <Button type="dashed" onClick={showModal} icon={<PlusOutlined />} block>
            Create new code
          </Button>
          <Modal title="Create New Code" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Input
              addonBefore="Code"
              value={newCode}
              onChange={(e) => setNewCode(e.target.value)}
              placeholder="Enter code"
            />
            <InputNumber
              addonBefore="Discount"
              value={newDiscount}
              onChange={(value) => setNewDiscount(value)}
              placeholder="Enter discount"
              style={{ width: '100%', marginTop: '10px' }}
            />
          </Modal>
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
  );
};

export default RegisterEvent;

function onChange(value) {
  console.log('changed', value);
}

