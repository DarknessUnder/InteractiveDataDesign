import React, { useState } from 'react';
import './styles.css';
import BarChartAdj from '../components/BarAdj';
import BarAdjEarly from '../components/BarAdjEarly';
import BarAdjMajor from '../components/BarAdjMajor';
import BarChartBack from '../components/BarBack';
import BarBackEarly from '../components/BarBackEarly';
import BarBackMajor from '../components/BarBackMajor';
import { Button } from 'react-bootstrap';
import checked from '../images/checked.png';
import unchecked from '../images/unchecked.png';

export default function SymptomsPage() {
  const [mode, setMode] = useState('Adjacent Mode');
  const [period, setPeriod] = useState('All Symptoms');

  const plainText = {
    color: 'white',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '10px',
    textAlign: 'left',
    fontSize: '20px'
  };

  return (
    <div>
      <div className="subTitile">Symptoms</div>
      <div style={plainText}>
        <p>
          The graph separates the early and late stages of the signs to show how
          many people experienced specific symptoms at different times. Using
          the two dropdown boxes on the right, you can change the bar mode
          between adjacent and back-to-back modes and change the shown symptoms
          by when patients experience these symptoms. You can also interact with
          the label under the bar graph.
        </p>
      </div>
      <div className="Chart">
        <div
          style={{
            width: '75%',
            height: '600px',
            float: 'left',
            marginRight: '5%'
          }}
        >
          {mode === 'Adjacent Mode' || mode === 'Choose Chart Mode' ? ( // if this is  adj mode = this is in adj mode
            <>
              {period === 'All Symptoms' || period === 'Choose Symptoms' ? ( // if this is early signs = this is in back to back mode both
                <>
                  <BarChartAdj />
                </>
              ) : (
                <>
                  {period === 'Early Signs' ? ( // if this is early signs = this is in back to back mode early
                    <>
                      <BarAdjEarly />
                    </>
                  ) : (
                    // if this is early signs = this is in back to back mode major
                    <>
                      <BarAdjMajor />
                    </>
                  )}
                </>
              )}
            </>
          ) : (
            // if this is not adj mode = this is in back to back mode
            <>
              {period === 'All Symptoms' || period === 'Choose Symptoms' ? ( // if this is early signs = this is in back to back mode both
                <>
                  <BarChartBack />
                </>
              ) : (
                <>
                  {period === 'Early Signs' ? ( // if this is early signs = this is in back to back mode early
                    <>
                      <BarBackEarly />
                    </>
                  ) : (
                    // if this is early signs = this is in back to back mode major
                    <>
                      <BarBackMajor />
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>

        <div
          className="Selections BlueBox"
          style={{
            height: 60,
            float: 'right',
            width: '20%',
            marginTop: '0%'
          }}
        >
          <div style={{ float: 'left', width: '100%' }}>
            {mode === 'Adjacent Mode' ? (
              <img
                src={checked}
                alt="checked"
                width="50px"
                style={{ float: 'left' }}
              />
            ) : (
              <img
                src={unchecked}
                alt="unchecked"
                width="50px"
                style={{ float: 'left' }}
                onClick={() => setMode('Adjacent Mode')}
              />
            )}

            <Button
              style={{
                width: '150px',
                float: 'left',
                background: 'none',
                color: '#ffffff',
                fontSize: '20px',
                borderStyle: 'none'
              }}
            >
              Adjacent Mode
            </Button>
          </div>

          <div style={{ float: 'left', width: '100%' }}>
            {mode === 'Back to Back Mode' ? (
              <img
                src={checked}
                alt="checked"
                width="50px"
                style={{ float: 'left' }}
              />
            ) : (
              <img
                src={unchecked}
                alt="unchecked"
                width="50px"
                style={{ float: 'left' }}
                onClick={() => setMode('Back to Back Mode')}
              />
            )}

            <Button
              style={{
                width: '150px',
                float: 'left',
                background: 'none',
                color: '#ffffff',
                fontSize: '20px',
                borderStyle: 'none'
              }}
            >
              Back to Back Mode
            </Button>
          </div>
          <div style={{ float: 'left', width: '100%', marginTop: '40%' }}>
            {period === 'All Symptoms' ? (
              <img
                src={checked}
                alt="checked"
                width="50px"
                style={{ float: 'left' }}
              />
            ) : (
              <img
                src={unchecked}
                alt="unchecked"
                width="50px"
                style={{ float: 'left' }}
                onClick={() => setPeriod('All Symptoms')}
              />
            )}

            <Button
              style={{
                width: '150px',
                float: 'left',
                background: 'none',
                color: '#ffffff',
                fontSize: '20px',
                borderStyle: 'none'
              }}
            >
              All Symptoms
            </Button>
          </div>
          <div style={{ float: 'left', width: '100%' }}>
            {period === 'Early Signs' ? (
              <img
                src={checked}
                alt="checked"
                width="50px"
                style={{ float: 'left' }}
              />
            ) : (
              <img
                src={unchecked}
                alt="unchecked"
                width="50px"
                style={{ float: 'left' }}
                onClick={() => setPeriod('Early Signs')}
              />
            )}

            <Button
              style={{
                width: '150px',
                float: 'left',
                background: 'none',
                color: '#ffffff',
                fontSize: '20px',
                borderStyle: 'none'
              }}
            >
              Early Signs
            </Button>
          </div>
          <div style={{ float: 'left', width: '100%' }}>
            {period === 'Major Symptoms' ? (
              <img
                src={checked}
                alt="checked"
                width="50px"
                style={{ float: 'left' }}
              />
            ) : (
              <img
                src={unchecked}
                alt="unchecked"
                width="50px"
                style={{ float: 'left' }}
                onClick={() => setPeriod('Major Symptoms')}
              />
            )}

            <Button
              style={{
                width: '150px',
                float: 'left',
                background: 'none',
                color: '#ffffff',
                fontSize: '20px',
                borderStyle: 'none'
              }}
            >
              Major Symptoms
            </Button>
          </div>
        </div>

        <div style={{ width: '100%', height: '700px', float: 'none' }}></div>
      </div>
    </div>
  );
}
