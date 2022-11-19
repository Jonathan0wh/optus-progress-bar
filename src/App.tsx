import React, { useState } from 'react';
import { Button, Col, Container, Dropdown, Row } from 'react-bootstrap';
import ProgressBar from 'Components/ProgressBar';

import './App.scss';

function App() {
  enum ProgressBarMenu {
    ProgressBar1 = '#progress1',
    ProgressBar2 = '#progress2',
    ProgressBar3 = '#progress3',
  }

  const [currentProgressBar, setCurrentProgressBar] = useState(
    ProgressBarMenu.ProgressBar1
  );
  const [progressBar1, setProgressBar1] = useState(25);
  const [progressBar2, setProgressBar2] = useState(50);
  const [progressBar3, setProgressBar3] = useState(75);

  function changeCurrentPercentage(prev: number, change: string) {
    switch (change) {
      case '-25':
        return prev - 25 < 0 ? 0 : prev - 25;
      case '-10':
        return prev - 10 < 0 ? 0 : prev - 10;
      case '+10':
        return prev + 10;
      case '+25':
        return prev + 25;
      default:
        return prev;
    }
  }

  function setProgressBar(change: string) {
    switch (currentProgressBar) {
      case ProgressBarMenu.ProgressBar1:
        setProgressBar1((prev) => changeCurrentPercentage(prev, change));
        break;
      case ProgressBarMenu.ProgressBar2:
        setProgressBar2((prev) => changeCurrentPercentage(prev, change));
        break;
      case ProgressBarMenu.ProgressBar3:
        setProgressBar3((prev) => changeCurrentPercentage(prev, change));
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <h1>Progress Bars Demo</h1>
        </Row>

        {/* Progress Bars */}
        <Row>
          <Col>
            <ProgressBar
              currentPercentage={progressBar1}
              testID="progress-bar-1"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProgressBar
              currentPercentage={progressBar2}
              testID="progress-bar-2"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProgressBar
              currentPercentage={progressBar3}
              testID="progress-bar-3"
            />
          </Col>
        </Row>

        {/* Control Bar */}
        <Row className="row-control-bar" md="auto">
          <Col className="col-control-bar">
            <Dropdown>
              <Dropdown.Toggle>{currentProgressBar}</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() =>
                    setCurrentProgressBar(ProgressBarMenu.ProgressBar1)
                  }
                >
                  {ProgressBarMenu.ProgressBar1}
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    setCurrentProgressBar(ProgressBarMenu.ProgressBar2)
                  }
                >
                  {ProgressBarMenu.ProgressBar2}
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    setCurrentProgressBar(ProgressBarMenu.ProgressBar3)
                  }
                >
                  {ProgressBarMenu.ProgressBar3}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Row>
            <Col className="col-control-bar">
              <Button onClick={() => setProgressBar('-25')}>-25</Button>
            </Col>
            <Col className="col-control-bar">
              <Button onClick={() => setProgressBar('-10')}>-10</Button>
            </Col>
            <Col className="col-control-bar">
              <Button onClick={() => setProgressBar('+10')}>+10</Button>
            </Col>
            <Col className="col-control-bar">
              <Button onClick={() => setProgressBar('+25')}>+25</Button>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default App;
