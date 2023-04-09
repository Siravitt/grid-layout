import { ChangeEvent, useState } from 'react';
import { Select, Row, Col, Divider } from "antd"
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  const [test, setTest] = useState<boolean>(false);
  const [position, setPosition] = useState<boolean>(false);
  const [shapes, setShapes] = useState<string[]>(["square", "circle", "oval", "trapezoid", "rectangle", "parallelogram"])

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

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

  const randomClick = () => {
    const newShapes = structuredClone(shapes);
    newShapes.sort(() => Math.random() - 0.5);
    setShapes(newShapes)
  }

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log(e.target.value)
    changeLanguage(e.target.value)
  }

  return (
    <div className='container'>
      <div className='header'>
        {test ? <div>Layout & Style</div> : null}
        <div className='translate'>
          {/* <Select defaultValue={t('EN')} options={[
            { value: 'en', label: `${t('EN')}` },
            { value: 'th', label: `${t('TH')}` },
          ]} onSelect={changeLanguage} /> */}
          <select className='select' onChange={handleSelect}>
            <option className='option' value='en'>{t('EN')}</option>
            <option className='option' value='th'>{t('TH')}</option>
          </select>
        </div>
      </div>
      {test ? <div className='btn-container'>
        <Row justify='center' gutter={8}>
          <Col span={6}>
            <div className='btn' onClick={onLeftClick}>
              <div className='triangle-left'></div>
              <div className='title'>{t('Move shape')}</div>
            </div>
          </Col>
          <Col span={12}>
            <div className='btn-position' onClick={onChangePosition}>
              <div className='triangle-up'></div>
              <div className='triangle-down'></div>
              <div className='title'>{t('Move position')}</div>
            </div>
          </Col>
          <Col span={6}>
            <div className='btn' onClick={onRightClick}>
              <div className='triangle-right'></div>
              <div className='title'>{t('Move shape')}</div>
            </div>
          </Col>
        </Row>
        <Divider />
        <Row justify={`${position ? 'center' : 'end'}`} gutter={8}>
          <Col span={6}>
            <div className='btn' onClick={randomClick}>
              <div className={shapes[0]}></div>
            </div>
          </Col>
          <Col span={6}>
            <div className='btn' onClick={randomClick}>
              <div className={shapes[1]}></div>
            </div>
          </Col>
          <Col span={6}>
            <div className='btn' onClick={randomClick}>
              <div className={shapes[2]}></div>
            </div>
          </Col>
        </Row>
        <Row justify={`${position ? 'end' : 'center'}`} gutter={8}>
          <Col span={6}>
            <div className='btn' onClick={randomClick}>
              <div className={shapes[3]}></div>
            </div>
          </Col>
          <Col span={6}>
            <div className='btn' onClick={randomClick}>
              <div className={shapes[4]}></div>
            </div>
          </Col>
          <Col span={6}>
            <div className='btn' onClick={randomClick}>
              <div className={shapes[5]}></div>
            </div>
          </Col>
        </Row>
      </div> : <div className='test-container'>
        <div className='test-items' onClick={() => setTest(true)}>
          <div>{t('Test')} 1</div>
          <div>{t('Layout & Style')}</div>
        </div>
        <div className='test-items'>
          <div>{t('Test')} 2</div>
          <div>{t('Connect API')}</div>
        </div>
        <div className='test-items'>
          <div>{t('Test')} 3</div>
          <div>{t('Form & Table')}</div>
        </div>
      </div>}
    </div>
  );
}

export default App;
