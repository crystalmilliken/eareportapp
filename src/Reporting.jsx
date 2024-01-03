import Chart from "./components/Chart";
import { useState, useEffect } from "react";
import DropdownButton from "./components/DropDownButton";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { MainData } from "./Data";

export default function Report() {
  const [currentData, setCurrentData] = useState([]);
  const [currentWarnings, setCurrentWarnings] = useState([]);
  useEffect(() => {}, []);
  const students = MainData.map((e) => {
    return e.Student;
  });
  const changeChild = (child) => {
    changeData(child);
  };
  const changeData = (child) => {
    MainData.map((e) => {
      if (e.Student == child) {
        setCurrentData(e.AssignedLessons);
        setCurrentWarnings(e.Warnings);
      }
    });
  };
  return (
    <div>
      <Container>
        <Row fluid="true">
          <Col></Col>
          <Col className="d-flex align-items-center justify-content-center text-center">
            <DropdownButton students={students} changeChild={changeChild} />
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <Chart data={currentData} warnings={currentWarnings} />
    </div>
  );
}
