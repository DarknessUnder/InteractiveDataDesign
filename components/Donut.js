import { Doughnut } from 'react-chartjs-2';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../src/styles.css';
import checked from '../images/checked.png';
import unchecked from '../images/unchecked.png';

const dataN = {
  labels: ['No Symptoms', 'Mild Symptoms', 'Severe Symptoms', 'Death'],
  datasets: [
    {
      data: [99, 1660, 240, 30],
      backgroundColor: ['#3AC7CB', '#EFC52D', '#F35447', '#000000'],
      hoverBackgroundColor: ['#6AF7FB', '#FFe54D', '#FF7467', '#222222'],
      borderWidth: 1
    }
  ]
};

const dataS = {
  labels: ['No Symptoms', 'Mild Symptoms', 'Severe Symptoms', 'Death'],
  datasets: [
    {
      data: [909, 166, 24, 0],
      backgroundColor: ['#3AC7CB', '#EFC52D', '#F35447', '#000000'],
      hoverBackgroundColor: ['#6AF7FB', '#FFe54D', '#FF7467', '#222222'],
      borderWidth: 1
    }
  ]
};

const dataM = {
  labels: ['No Symptoms', 'Mild Symptoms', 'Severe Symptoms', 'Death'],
  datasets: [
    {
      data: [990, 166, 2, 0],
      backgroundColor: ['#3AC7CB', '#EFC52D', '#F35447', '#000000'],
      hoverBackgroundColor: ['#6AF7FB', '#FFe54D', '#FF7467', '#222222'],
      borderWidth: 1
    }
  ]
};

const options = {
  legend: {
    display: true,
    position: 'left',
    labels: {
      fontColor: '#fff',
      fontSize: 30
    }
  },
  tooltips: {
    callbacks: {
      label: function (tooltipItem, data) {
        var dataset = data.datasets[tooltipItem.datasetIndex];
        var meta = dataset._meta[Object.keys(dataset._meta)[0]];
        var total = meta.total;
        var currentValue = dataset.data[tooltipItem.index];
        var percentage = parseFloat(((currentValue / total) * 100).toFixed(1));
        return currentValue + ' (' + percentage + '%)';
      },
      title: function (tooltipItem, data) {
        return data.labels[tooltipItem[0].index];
      }
    }
  }
};

export default function Donut() {
  const [mode, setMode] = useState('Unvaccinated');

  const handleSelectMode = (e) => {
    console.log(e);
    setMode(e);
  };

  const onClick = (e) => {
    console.log(e);
    setMode(e);
  };

  const setNoVac = (e) => {
    setMode(e);
  };

  const plainText = {
    color: 'white',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '10px',
    textAlign: 'left',
    fontSize: '20px'
  };
  console.log(mode);

  return (
    <>
      <div className="subTitile">Vaccine Effects</div>
      <div style={plainText}>
        <p>
          The graph shows how effective the vaccines are against the Monkeypox.
          To help people better understand the difference between vaccinated and
          unvaccinated patients, we will provide data to indicate the percentage
          of people that experienced different degrees of symptoms.
        </p>

        <p>
          We categorize the patients as those who didn’t have any symptoms,
          recovered without showing significant signs, people who experienced
          severe symptoms that needed to be hospitalized, and people who died as
          a result of Monkeypox.
        </p>
        <p>
          You can interact with the checkbox on the right to check the data you
          want to see. Also, by hovering the mouse on the donut graph, you can
          get the exact data(the number of patients with the percentage).
        </p>
      </div>
      <div className="Chart">
        <div
          className="Selections BlueBox"
          style={{
            height: 60,
            float: 'right',
            width: '20%',
            marginTop: '16%'
          }}
        >
          <div style={{ float: 'left', width: '100%' }}>
            {mode === 'Unvaccinated' ? (
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
                onClick={() => setMode('Unvaccinated')}
              />
            )}

            <Button
              style={{
                width: '150px',
                float: 'left',
                background: 'none',
                color: '#ffffff',
                fontSize: '30px',
                borderStyle: 'none'
              }}
            >
              Unvaccinated
            </Button>
          </div>

          <div style={{ float: 'left', width: '100%' }}>
            {mode === 'Smallpox' ? (
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
                onClick={() => setMode('Smallpox')}
              />
            )}

            <Button
              style={{
                width: '150px',
                float: 'left',
                background: 'none',
                color: '#ffffff',
                fontSize: '30px',
                borderStyle: 'none'
              }}
            >
              Smallpox
            </Button>
          </div>

          <div style={{ float: 'left', width: '100%' }}>
            {mode === 'Monkeypox' ? (
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
                onClick={() => setMode('Monkeypox')}
              />
            )}

            <Button
              style={{
                width: '150px',
                float: 'left',
                background: 'none',
                color: '#ffffff',
                fontSize: '30px',
                borderStyle: 'none'
              }}
            >
              Monkeypox
            </Button>
          </div>
        </div>
        <div style={{ width: '80%' }}>
          {mode === 'Unvaccinated' ? (
            <Doughnut
              data={dataN}
              options={options}
              styles={{ color: 'black' }}
              onClick={(e) => onClick(e)}
            />
          ) : (
            <></>
          )}
          {mode === 'Smallpox' ? (
            <Doughnut
              data={dataS}
              options={options}
              styles={{ color: 'black' }}
              onClick={(e) => onClick(e)}
            />
          ) : (
            <></>
          )}
          {mode === 'Monkeypox' ? (
            <Doughnut
              data={dataM}
              options={options}
              styles={{ color: 'black' }}
              onClick={(e) => onClick(e)}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
