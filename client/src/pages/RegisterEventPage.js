import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/registerevent.css";
import dayjs from "dayjs";
import { Card, Row, Col } from "antd";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  TimePicker,
  Upload,
  Image,
  Select,
  message,
} from "antd";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
const { Dragger } = Upload;
const { Option } = Select;

function onChange(value) {
  console.log("changed", value);
}

const seatOptions = [
  "L-B15",
  "L-A15",
  "L-B14",
  "L-A14",
  "L-B13",
  "L-A13",
  "L-B12",
  "L-A12",
  "L-B11",
  "L-A11",
  "L-B10",
  "L-A10",
  "L-B9",
  "L-A9",
  "L-B8",
  "L-A8",
  "L-B7",
  "L-A7",
  "L-B6",
  "L-A6",
  "L-B5",
  "L-A5",
  "L-B4",
  "L-A4",
  "L-B3",
  "L-A3",
  "L-B2",
  "L-A2",
  "L-B1",
  "L-A1",
  "C-A16",
  "C-A15",
  "C-A14",
  "C-A13",
  "C-A12",
  "C-A11",
  "C-A10",
  "C-A9",
  "C-B16",
  "C-B15",
  "C-B14",
  "C-B13",
  "C-B12",
  "C-B11",
  "C-B10",
  "C-B9",
  "C-C16",
  "C-C15",
  "C-C14",
  "C-C13",
  "C-C12",
  "C-C11",
  "C-C10",
  "C-C9",
  "C-D12",
  "C-D11",
  "C-D10",
  "C-D9",
  "C-D8",
  "C-D7",
  "C-D6",
  "C-D5",
  "C-E12",
  "C-E11",
  "C-E10",
  "C-E9",
  "C-E8",
  "C-E7",
  "C-E6",
  "C-E5",
  "C-A8",
  "C-A7",
  "C-A6",
  "C-A5",
  "C-A4",
  "C-A3",
  "C-A2",
  "C-A1",
  "C-B8",
  "C-B7",
  "C-B6",
  "C-B5",
  "C-B4",
  "C-B3",
  "C-B2",
  "C-B1",
  "C-C8",
  "C-C7",
  "C-C6",
  "C-C5",
  "C-C4",
  "C-C3",
  "C-C2",
  "C-C1",
  "C-D4",
  "C-D3",
  "C-D2",
  "C-D1",
  "C-E4",
  "C-E3",
  "C-E2",
  "C-E1",
  "R-A15",
  "R-B15",
  "R-A14",
  "R-B14",
  "R-A13",
  "R-B13",
  "R-A12",
  "R-B12",
  "R-A11",
  "R-B11",
  "R-A10",
  "R-B10",
  "R-A9",
  "R-B9",
  "R-A8",
  "R-B8",
  "R-A7",
  "R-B7",
  "R-A6",
  "R-B6",
  "R-A5",
  "R-B5",
  "R-A4",
  "R-B4",
  "R-A3",
  "R-B3",
  "R-A2",
  "R-B2",
  "R-A1",
  "R-B1",
  "CO-A3",
  "CO-A2",
  "CO-A1",
  "CO-B5",
  "CO-B4",
  "CO-B3",
  "CO-B2",
  "CO-B1",
  "CO-C5",
  "CO-C4",
  "CO-C3",
  "CO-C2",
  "CO-C1",
  "CO-D5",
  "CO-D4",
  "CO-D3",
  "CO-D2",
  "CO-D1",
];

dayjs.extend(customParseFormat);

const { TextArea } = Input;

const RegisterEvent = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const navigate = useNavigate();

  const [eventCoverFile, setEventCoverFile] = useState(null);
  const [seatingChartFile, setSeatingChartFile] = useState(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [coverImageURL, setCoverImageURL] = useState("");
  const [seatImageURL, setSeatImageURL] = useState("");
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const URL = "https://rdt-backend-production.up.railway.app/";

  const formatTime = (time) => {
    let hour = 0;
    let am_pm = "AM";
    console.log(time.$H);
    if (time.$H > 12) {
      hour = time.$H - 12;
      am_pm = "PM";
    } else if (time.$H == 0) {
      hour = 12;
      am_pm = "AM";
    } else {
      hour = time.$H;
    }
    let formatedTime =
      hour + ":" + (time.$m < 10 ? "0" : "") + time.$m + " " + am_pm;
    console.log(formatedTime);
    return formatedTime;
  };
  const onFinish = (values) => {
    let newEvent = {
      name: values.event_name,
      location: values.location,
      date: values.event_date,
      basePrice: values.pricing,
      studentDiscount: values.rice_student_discount,
      atDoorPrice: values.at_door_price,
      description: values.description,
      redemptionCode: values.family_promo_code,
      startTime: formatTime(values.start_time),
      endTime: formatTime(values.end_time),

      // TODO: quang
      coverPhoto: coverImageURL,
      seatingPhoto: seatImageURL,
      availableSeats: seatOptions,
    };
    console.log(newEvent);

    // POST request to the backend
    axios
      .post(URL + "addevent", newEvent)
      .then((response) => {
        console.log("Event created:", response.data);
        // Optionally, navigate to another page or show success message
        navigate("/home", { state: { newEvent: values.event_name } });
        // messageApi.open({
        //   type: 'success',
        //   content: 'Created new event, ' + values.event_name + "!",
        // });
      })
      .catch((error) => {
        console.error("Failed to create event:", error);
        // Optionally, show error message to the user
        messageApi.open({
          type: "error",
          content: "Unable to create new event",
        });
      });
  };

  const propsCover = {
    name: "file",
    headers: {
      authorization: "authorization-text",
    },
    beforeUpload: (file) => {
      setSelectedFile(file);
      handleUploadImage("coverPhoto");
      return false;
    },
    onChange(info) {
      if (info.file.status === "done") {
        setSelectedFile(info.file.originFileObj);
        message.success(`${info.file.name} file selection successful`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file selection failed.`);
      }
    },
  };

  const propsSeating = {
    name: "file",
    headers: {
      authorization: "authorization-text",
    },
    beforeUpload: (file) => {
      setSelectedFile(file);
      handleUploadImage("seatingPhoto");
      return false;
    },
    onChange(info) {
      if (info.file.status === "done") {
        setSelectedFile(info.file.originFileObj);
        message.success(`${info.file.name} file selection successful`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file selection failed.`);
      }
    },
  };

  const handleUploadImage = async (photoType) => {
    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);
    if (photoType === "coverPhoto") {
      try {
        console.log("inside coverPhoto");
        const response = await fetch(
          "https://rdt-backend-production.up.railway.app/imageRegisterCoverUpload",
          {
            method: "PUT",
            credentials: "include",
            body: formData,
          }
        );

        const data = await response.json();
        setCoverImageURL(data?.coverPhoto);

        if (!response.ok) {
          throw new Error(data.message || "Error uploading cover image");
        }
      } catch (error) {
        console.error("Error uploading cover image:", error);
      }
    } else if (photoType === "seatingPhoto") {
      try {
        const response = await fetch(
          "https://rdt-backend-production.up.railway.app/imageRegisterSeatingUpload",
          {
            method: "PUT",
            credentials: "include",
            body: formData,
          }
        );

        const data = await response.json();
        setSeatImageURL(data?.seatingPhoto);

        if (!response.ok) {
          throw new Error(data.message || "Error uploading server image");
        }
      } catch (error) {
        console.error("Error uploading server image:", error);
      }
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
          <Form.Item
            label="Event name"
            name="event_name"
            rules={[{ required: true, message: "Please input an event name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Location"
            name="location"
            rules={[{ required: true, message: "Please enter a location!" }]}
          >
            <Input />
          </Form.Item>

          {/* Row for Date Inputs */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Date"
                name="event_date"
                rules={[
                  { required: true, message: "Please select a start date!" },
                ]}
              >
                {/* <DatePicker /> */}
                <Input placeholder="MM/DD/YYYY" />
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
              <Form.Item
                label="Start Time"
                name="start_time"
                rules={[
                  { required: true, message: "Please select a start time!" },
                ]}
              >
                <TimePicker use12Hours={true} format={"h:mm A"} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="End Time"
                name="end_time"
                rules={[
                  { required: true, message: "Please select an end time!" },
                ]}
              >
                <TimePicker use12Hours={true} format={"h:mm A"} />
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
            <Dragger {...propsCover}>
              {/* <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p> */}
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from
                uploading company data or other banned files.
              </p>
              {coverImageURL && (
                <Image alt="Image placeholder" src={coverImageURL} />
              )}
            </Dragger>
            <Button onClick={() => handleUploadImage("coverPhoto")}>
              Upload Cover Image
            </Button>
          </div>

          <div style={{ marginTop: 50 }}>
            <Dragger {...propsSeating}>
              {/* <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p> */}
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from
                uploading company data or other banned files.
              </p>
            </Dragger>
            <Button onClick={() => handleUploadImage("seatingPhoto")}>
              Upload Seating Image
            </Button>
            {seatImageURL && (
              <Image alt="Image placeholder" src={seatImageURL} />
            )}
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
