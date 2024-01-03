import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

////////Needs to get name from auth

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    reason: "",
    email: "",
    explanation: "",
    urgent: "",
  });

  const sendData = (e) => {
    e.preventDefault();
    console.log(data);
    if (data.reason != "Please Choose" && data.reason != "") {
      const { name, value } = e.target;
      setData((prev) => ({ ...prev, [name]: value }));
    } else {
      alert("Please Choose a reason for contacting us");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <Form onSubmit={sendData}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="selectReason">What is this regarding?</Form.Label>
        <Form.Select
          id="selectReason"
          name="reason"
          value={data.reason}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option>Please Choose</option>
          <option>Financial</option>
          <option>Curriculum </option>
          <option>Partnership</option>
          <option>Report Error</option>
          <option>Other</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          required
          name="email"
          value={data.email}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Please let us know how we can help</Form.Label>
        <Form.Control
          required
          as="textarea"
          rows={3}
          name="explanation"
          value={data.explanation}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Urgent?"
          name="urgent"
          value={data.urgent}
          onChange={(e) => {
            handleChange({
              target: { name: e.target.name, value: e.target.checked },
            });
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Contact;
