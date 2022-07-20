import React, { useState } from 'react';
import './styles.css';
import LineGraphDeath from '../components/LineGraphDeath';
import LineGraphDaily from '../components/LineGraphDaily';
import LineGraphWeekly from '../components/LineGraphWeekly';
import LineGraphMonthly from '../components/LineGraphMonthly';

import { Button } from 'react-bootstrap';
import MapCaseWorld from '../components/mapCaseWorld';
import ReactTooltip from 'react-tooltip';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

import checked from '../images/checked.png';
import unchecked from '../images/unchecked.png';

export default function CasePage() {
  const [viewMode, setViewMode] = useState('Map Chart');
  const [mode, setMode] = useState('By Country');
  const [caseMode, setCaseMode] = useState('Confirmed Cases');
  const [interval, setInterval] = useState('Daily');

  const plainText = {
    color: 'white',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '10px',
    textAlign: 'left',
    fontSize: '20px'
  };

  const [content, setContent] = useState('');
  return (
    <div>
      <div className="subTitile">Confirmed Cases</div>
      <div style={plainText}>
        <p>
          The Confirmed Cases of Monkeypox are presented through a map graph and
          a line graph. Both charts show the same data, but the map graph lets
          you quickly check the total confirmed cases and the number of infected
          countries.
        </p>

        <p>
          The line graph will enable you to check the death cases and trends
          between different regions quickly. Also, you can interact with the
          label under the line graph.
        </p>
      </div>
      <div
        id="line"
        style={{
          width: '70%',
          float: 'none',
          marginLeft: '30%',
          height: '80px'
        }}
      >
        <div>
          {viewMode === 'Map Chart' ? (
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
              onClick={() => setViewMode('Map Chart')}
            />
          )}

          <Button
            style={{
              width: '200px',
              float: 'left',
              background: 'none',
              color: '#ffffff',
              fontSize: '30px',
              borderStyle: 'none'
            }}
          >
            Map Chart
          </Button>
        </div>
        <div>
          {viewMode === 'Line Graph' ? (
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
              onClick={() => setViewMode('Line Graph')}
            />
          )}

          <Button
            style={{
              width: '200px',
              float: 'left',
              background: 'none',
              color: '#ffffff',
              fontSize: '30px',
              borderStyle: 'none'
            }}
          >
            Line Graph
          </Button>
        </div>
      </div>

      <div style={{ width: '100%', float: 'none' }}>
        {viewMode === 'Map Chart' ? (
          <>
            <div className="Chart">
              <MapCaseWorld setTooltipContent={setContent} />
              <ReactTooltip>{content}</ReactTooltip>
            </div>
            <div className="fakeOptions"></div>
          </>
        ) : (
          <>
            <div className="Chart">
              <div
                className="Selections BlueBox"
                style={{
                  height: 60,
                  float: 'right',
                  width: '20%',
                  marginTop: '5%'
                }}
              >
                <div style={{ float: 'left', width: '100%' }}>
                  {caseMode === 'Confirmed Cases' ? (
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
                      onClick={() => setCaseMode('Confirmed Cases')}
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
                    Confirmed Cases
                  </Button>
                </div>

                <div style={{ float: 'left', width: '100%' }}>
                  {caseMode === 'Death Cases' ? (
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
                      onClick={() => setCaseMode('Death Cases')}
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
                    Death Cases
                  </Button>
                </div>

                <div style={{ float: 'left', width: '100%', marginTop: '30%' }}>
                  {interval === 'Daily' ? (
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
                      onClick={() => setInterval('Daily')}
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
                    Daily
                  </Button>
                </div>
                <div style={{ float: 'left', width: '100%' }}>
                  {interval === 'Weekly' ? (
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
                      onClick={() => setInterval('Weekly')}
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
                    Weekly
                  </Button>
                </div>
                <div style={{ float: 'left', width: '100%' }}>
                  {interval === 'Monthly' ? (
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
                      onClick={() => setInterval('Monthly')}
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
                    Monthly
                  </Button>
                </div>
              </div>

              <div
                style={{
                  width: '70%',
                  height: '600px',
                  marginLeft: '10%',
                  float: 'left'
                }}
              >
                {caseMode === 'Death Cases' ? ( // if this is  adj mode = this is in adj mode
                  <>
                    <LineGraphDeath />
                  </>
                ) : (
                  <>
                    {interval === 'Daily' ? ( // if this is  adj mode = this is in adj mode
                      <>
                        <LineGraphDaily />
                      </>
                    ) : (
                      <></>
                    )}

                    {interval === 'Weekly' ? ( // if this is  adj mode = this is in adj mode
                      <>
                        <LineGraphWeekly />
                      </>
                    ) : (
                      <></>
                    )}

                    {interval === 'Monthly' ? ( // if this is  adj mode = this is in adj mode
                      <>
                        <LineGraphMonthly />
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                )}
              </div>

              <div
                style={{
                  height: '800px',
                  width: '70%',
                  marginLeft: '10%'
                }}
              >
                <Dropdown
                  style={{
                    width: '150px',
                    float: 'left',
                    align: 'left',
                    marginLeft: '0%'
                  }}
                >
                  <Dropdown.Toggle
                    style={{
                      backgroundColor: '#efc52d',
                      color: '#183263',
                      fontSize: '25px',
                      width: '150px',
                      float: 'right',
                      align: 'right'
                    }}
                  >
                    World
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    style={{
                      backgroundColor: '#efc52d',
                      color: '#183263',
                      fontSize: '25px',
                      width: '150px',
                      float: 'right',
                      align: 'right'
                    }}
                  >
                    <Dropdown.Item eventKey="World">World</Dropdown.Item>
                    <Dropdown.Item eventKey="US">US</Dropdown.Item>
                    <Dropdown.Item eventKey="UK">UK</Dropdown.Item>
                    <Dropdown.Item eventKey="Canada">Canada</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown
                  style={{
                    width: '150px',
                    float: 'left',
                    align: 'left',
                    marginLeft: '10%'
                  }}
                >
                  <Dropdown.Toggle
                    style={{
                      backgroundColor: '#06CCEE',
                      color: '#183263',
                      fontSize: '25px',
                      width: '150px',
                      float: 'right',
                      align: 'right'
                    }}
                  >
                    US
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    style={{
                      backgroundColor: '#06CCEE',
                      color: '#183263',
                      fontSize: '25px',
                      width: '150px',
                      float: 'right',
                      align: 'right'
                    }}
                  >
                    <Dropdown.Item eventKey="World">World</Dropdown.Item>
                    <Dropdown.Item eventKey="US">US</Dropdown.Item>
                    <Dropdown.Item eventKey="UK">UK</Dropdown.Item>
                    <Dropdown.Item eventKey="Canada">Canada</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown
                  style={{
                    width: '150px',
                    float: 'left',
                    align: 'left',
                    marginLeft: '10%'
                  }}
                >
                  <Dropdown.Toggle
                    style={{
                      backgroundColor: '#34B755',
                      color: '#183263',
                      fontSize: '25px',
                      width: '150px',
                      float: 'right',
                      align: 'right'
                    }}
                  >
                    UK
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    style={{
                      backgroundColor: '#34B755',
                      color: '#183263',
                      fontSize: '25px',
                      width: '150px',
                      float: 'right',
                      align: 'right'
                    }}
                  >
                    <Dropdown.Item eventKey="World">World</Dropdown.Item>
                    <Dropdown.Item eventKey="US">US</Dropdown.Item>
                    <Dropdown.Item eventKey="UK">UK</Dropdown.Item>
                    <Dropdown.Item eventKey="Canada">Canada</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown
                  style={{
                    width: '150px',
                    float: 'left',
                    align: 'left',
                    marginLeft: '10%'
                  }}
                >
                  <Dropdown.Toggle
                    style={{
                      backgroundColor: '#E65A5F',
                      color: '#183263',
                      fontSize: '25px',
                      width: '150px',
                      float: 'right',
                      align: 'right'
                    }}
                  >
                    Canada
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    style={{
                      backgroundColor: '#E65A5F',
                      color: '#183263',
                      fontSize: '25px',
                      width: '150px',
                      float: 'right',
                      align: 'right'
                    }}
                  >
                    <Dropdown.Item eventKey="World">World</Dropdown.Item>
                    <Dropdown.Item eventKey="US">US</Dropdown.Item>
                    <Dropdown.Item eventKey="UK">UK</Dropdown.Item>
                    <Dropdown.Item eventKey="Canada">Canada</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
