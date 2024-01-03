import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

function DropdownButton(props) {
  const [currentStudent, setCurrentStudent] = useState();
  const InputStudents = () => {
    const result = props.students.map((e) => {
      return (
        <Dropdown.Item eventKey={e} key={e}>
          {e}
        </Dropdown.Item>
      );
    });
    return result;
  };
  return (
    <Dropdown
      style={{ marginBottom: "1rem" }}
      onSelect={(e) => {
        setCurrentStudent(e);
        props.changeChild(e);
      }}
    >
      <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
        {currentStudent ? currentStudent : "Select"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <InputStudents />
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownButton;
