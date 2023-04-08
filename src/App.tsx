import './App.css';
import { useState } from 'react';
import { Select, Row, Col, Divider } from "antd"

function App() {
  const [test, setTest] = useState(false);
  const [position, setPosition] = useState(false);
  const [shapes, setShapes] = useState(["square", "circle", "oval", "trapezoid", "rectangle", "parallelogram"])

  const onChangePosition = () => {
    const newShapes = shapes.concat(shapes.splice(0, 3));
    setShapes(newShapes);
    setPosition(!position);
  }

  const onLeftClick = () => {
    const newShapes = structuredClone(shapes);
    newShapes.push(newShapes.shift());
    setShapes(newShapes);
  }

  const onRightClick = () => {
    const newShapes = structuredClone(shapes);
    newShapes.unshift(newShapes.pop());
    setShapes(newShapes);
  }

  return (
    <div className='container'>
      <div className='header'>
        {test ? <div>Layout & Style</div> : null}
        <div className='translate'>
          <Select defaultValue="EN" options={[
            { value: 'EN', label: 'EN' },
            { value: 'TH', label: 'TH' },
          ]} />
        </div>
      </div>
      {test ? <div className='btn-container'>
        <Row justify='center' gutter={8}>
          <Col span={6}>
            <div className='btn' onClick={onLeftClick}>
              <div className='triangle-left'></div>
            </div>
          </Col>
          <Col span={12}>
            <div className='btn-position' onClick={onChangePosition}>
              <div className='triangle-up'></div>
              <div className='triangle-down'></div>
            </div>
          </Col>
          <Col span={6}>
            <div className='btn' onClick={onRightClick}>
              <div className='triangle-right'></div>
            </div>
          </Col>
        </Row>
        <Divider />
        <Row justify={`${position ? 'center' : 'end'}`} gutter={8}>
          <Col span={6}>
            <div className='btn'>
              <div className={shapes[0]}></div>
            </div>
          </Col>
          <Col span={6}>
            <div className='btn'>
              <div className={shapes[1]}></div>
            </div>
          </Col>
          <Col span={6}>
            <div className='btn'>
              <div className={shapes[2]}></div>
            </div>
          </Col>
        </Row>
        <Row justify={`${position ? 'end' : 'center'}`} gutter={8}>
          <Col span={6}>
            <div className='btn'>
              <div className={shapes[3]}></div>
            </div>
          </Col>
          <Col span={6}>
            <div className='btn'>
              <div className={shapes[4]}></div>
            </div>
          </Col>
          <Col span={6}>
            <div className='btn'>
              <div className={shapes[5]}></div>
            </div>
          </Col>
        </Row>
      </div> : <div className='test-container'>
        <div className='test-items' onClick={() => setTest(true)}>
          <div>Test 1</div>
          <div>Layout & Style</div>
        </div>
        <div className='test-items'>
          <div>Test 2</div>
          <div>Connect API</div>
        </div>
        <div className='test-items'>
          <div>Test 3</div>
          <div>Form & Table</div>
        </div>
      </div>}
    </div>
  );
}

export default App;
