import React, { useState } from 'react';
import './styles.css';
import MapPolicy from '../components/MapPolicy';
import ReactTooltip from 'react-tooltip';
import { Dropdown } from 'react-bootstrap';

export default function PolicyPage() {
  const cateStyle = {
    width: '300px',
    float: 'left',
    backgroundColor: '#efc52d',
    height: '50px',
    color: 'white',
    borderRadius: '5px',
    paddingTop: '6px',
    fontSize: '30px',
    marginLeft: '30px',
    fontStyle: 'bold'
  };

  const [content, setContent] = useState('');
  const [passport, setPassport] = useState('USA');
  const [location, setLocation] = useState('USA');

  const handleSelecPassport = (e) => {
    console.log(e);
    setPassport(e);
  };

  const handleSelectLocation = (e) => {
    console.log(e);
    setLocation(e);
  };
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
      <div className="subTitile">Entry Policies</div>
      <div style={plainText}>
        <p>
          The map graph visualizes the government's different procedures for the
          Monkeypox. These government policies will be categorized as needing
          vaccination to enter, no requirements, no entry from certain nations,
          proof of negative test results, and mandatory Quarantine after entry.
        </p>
      </div>
      <div className="Chart">
        <div className="Selections" style={{ float: 'left', height: 60 }}>
          <div style={{ width: '100%', height: '100px', marginTop: '20%' }}>
            <div style={cateStyle}>Passport</div>

            <Dropdown
              style={{
                height: '100px',
                width: '150px',
                float: 'right',
                align: 'right'
              }}
              onSelect={handleSelecPassport}
            >
              <Dropdown.Toggle
                style={{
                  backgroundColor: '#efc52d',
                  height: '50px',
                  color: '#183263',
                  fontSize: '30px',
                  width: '150px',
                  float: 'right',
                  align: 'right'
                }}
              >
                {passport}
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{
                  backgroundColor: '#efc52d',
                  height: '180px',
                  color: '#183263',
                  fontSize: '25px',
                  width: '150px',
                  float: 'right',
                  align: 'right'
                }}
              >
                <Dropdown.Item eventKey="USA">USA</Dropdown.Item>
                <Dropdown.Item eventKey="UK">UK</Dropdown.Item>
                <Dropdown.Item eventKey="Canada">Canada</Dropdown.Item>
                <Dropdown.Item eventKey="France">France</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div style={{ width: '100%', height: '100px', marginTop: '20%' }}>
            <div style={cateStyle}>Traveling From</div>
            <Dropdown
              style={{
                height: '100px',
                width: '150px',
                float: 'right',
                align: 'right'
              }}
              onSelect={handleSelectLocation}
            >
              <Dropdown.Toggle
                style={{
                  backgroundColor: '#efc52d',
                  height: '50px',
                  color: '#183263',
                  fontSize: '30px',
                  width: '150px',
                  float: 'right',
                  align: 'right'
                }}
              >
                {location}
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{
                  backgroundColor: '#efc52d',
                  height: '180px',
                  color: '#183263',
                  fontSize: '25px',
                  width: '150px',
                  float: 'right',
                  align: 'right'
                }}
              >
                <Dropdown.Item eventKey="USA">USA</Dropdown.Item>
                <Dropdown.Item eventKey="UK">UK</Dropdown.Item>
                <Dropdown.Item eventKey="Canada">Canada</Dropdown.Item>
                <Dropdown.Item eventKey="France">France</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div id="Ledgend">
            <div className="Row">
              <div className="section" style={{ width: '50%', float: 'left' }}>
                <div
                  style={{
                    backgroundColor: '#183263',
                    borderRadius: 4,
                    marginLeft: 12,
                    width: '40px',
                    height: '40px',
                    float: 'left'
                  }}
                ></div>
                <p
                  style={{
                    borderRadius: 4,
                    marginLeft: 12,
                    height: '40px',
                    width: '120px',
                    float: 'left',
                    color: '#ffffff'
                  }}
                >
                  No Requirments
                </p>
              </div>
              <div className="section" style={{ width: '50%', float: 'left' }}>
                <div
                  style={{
                    backgroundColor: '#efc52d',
                    borderRadius: 4,
                    marginLeft: 12,
                    width: '40px',
                    height: '40px',
                    float: 'left'
                  }}
                ></div>
                <p
                  style={{
                    borderRadius: 4,
                    marginLeft: 12,
                    width: '120px',
                    height: '40px',
                    float: 'left',
                    color: '#ffffff'
                  }}
                >
                  Testing Proofs
                </p>
              </div>
            </div>

            <div className="Row">
              <div className="section" style={{ width: '50%', float: 'left' }}>
                <div
                  style={{
                    backgroundColor: '#E65A5F',
                    borderRadius: 4,
                    marginLeft: 12,
                    width: '40px',
                    height: '40px',
                    float: 'left'
                  }}
                ></div>
                <p
                  style={{
                    borderRadius: 4,
                    marginLeft: 12,
                    height: '40px',
                    width: '120px',
                    float: 'left',
                    color: '#ffffff'
                  }}
                >
                  Vaccine Required
                </p>
              </div>
              <div className="section" style={{ width: '50%', float: 'left' }}>
                <div
                  style={{
                    backgroundColor: '#000000',
                    borderRadius: 4,
                    marginLeft: 12,
                    width: '40px',
                    height: '40px',
                    float: 'left'
                  }}
                ></div>
                <p
                  style={{
                    borderRadius: 4,
                    marginLeft: 12,
                    width: '120px',
                    height: '40px',
                    float: 'left',
                    color: '#ffffff'
                  }}
                >
                  Mandatory Quarantines
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <MapPolicy setTooltipContent={setContent} />
          <ReactTooltip>{content}</ReactTooltip>
        </div>
        <div className="fakeOptions"></div>
      </div>
    </div>
  );
}
