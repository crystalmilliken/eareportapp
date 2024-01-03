import { ResponsiveRadialBar } from "@nivo/radial-bar";
import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
function Chart(props) {
  const allData = props.data;
  const warnings = props.warnings;
  const [graphData, setGraphData] = useState([]);


  useEffect(() => {
    createPoints();
    Warnings();
  }, [props]);

  const circle = {
    width: ".5em",
    height: ".5em",
    background: "red",
    borderRadius: "50",
    MozBorderRadius: "50%",
    WebkitBorderRadius: "50%",
    lineHeight: ".75em",
    verticalAlign: "bottom",
    textAlign: "left",
    color: "white",
  };
  const Warnings = () => {
    let color = "white";
    if (warnings.length !== 0) {
      const results = warnings.map((e) => {
        const unKey = e.Subject + e.Lesson;
        if (color === "#E5E4E2") {
          color = "white";
        } else {
          color = "#E5E4E2";
        }
        return (
          <div
            className="d-flex align-items-center  text-center"
            style={{ marginTop: ".25em", background: color }}
            key={unKey}
          >
            <div style={circle}></div>
            <div style={{ marginLeft: ".5em", fontSize: "1rem" }}>
              {e.Subject} : {e.Lesson}
            </div>
          </div>
        );
      });
      return results;
    } else {
      return <div></div>;
    }
  };
  const createPoints = () => {
    if (allData.length != 0) {
      const graph = allData.map((a) => {
        const percentageOfPoints = (a.completed / a.pointsAssigned) * 100;

        const newObj = {
          id: a.subject,
          data: [{ x: a.subject, y: percentageOfPoints }],
        };
        return newObj;
      });
      setGraphData(graph);
      return graph;
    } else {
      return [{ id: "a.subject", data: [{ x: "a.subject", y: 0 }] }];
    }
  };

  if (allData.length == 0) {
    return (
      <Container>
        <Row fluid="true">
          <Col></Col>
          <Col
            xs="auto"
            sm="auto"
            md="auto"
            lg="auto"
            xl="auto"
            xxl="auto"
            style={{ height: "5vh", width: "100vw" }}
          ></Col>
          <Col></Col>
        </Row>

        <Row fluid="true">
          <Col></Col>
          <Col
            xs="auto"
            sm="auto"
            md="auto"
            lg="auto"
            xl="auto"
            xxl="auto"
            style={{ borderTop: "solid", paddingTop: "1em" }}
          >
            Please choose a child
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container>
        <Row fluid="true">
          <Col
            xs="auto"
            sm="auto"
            md="auto"
            lg="auto"
            xl="auto"
            xxl="auto"
            style={{ height: "50vh", width: "100vw" }}
          >
            <ResponsiveRadialBar
              data={graphData}
              endAngle={270}
              // ariaLabel={false}
              enableArcLabels={false}
              valueFormat=">-.2f"
              maxValue={100}
              padding={0.4}
              cornerRadius={2}
              enableRadialGrid={true}
              enableCircularGrid={true}
              margin={{ top: 25, right: 0, bottom: 40, left: 0 }}
              radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
              labelsSkipAngle={0}
              labelsRadiusOffset={0}
              labelsTextColor={{ theme: "grid.line.stroke" }}
              circularAxisOuter={{
                tickSize: 5,
                tickPadding: 12,
                tickRotation: 0,
              }}
              // circularAxisOuter={false}
              isInteractive={false}
              animate={false}
              axisBottom={null}
              legends={[]}
            />
          </Col>
        </Row>

        <Row fluid="true">
          <Col></Col>
          <Col
            xs="auto"
            sm="auto"
            md="auto"
            lg="auto"
            xl="auto"
            xxl="auto"
            style={{ borderTop: "solid", paddingTop: "1em" }}
          >
            <Warnings />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}
export default Chart;
