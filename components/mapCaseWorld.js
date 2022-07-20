import React, { memo } from 'react';
import '../src/styles.css';
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from 'react-simple-maps';
import { scaleLinear } from 'd3-scale';

import dataC from './caseData.json';
import mapCaseWorld from './globalCase.json';
import { Colorscale } from 'react-colorscales';

const viridisColorscale = [
  '#ffffff',
  '#FDEFF0',
  '#ED8B8E',
  '#E55257',
  '#DC1A21',
  '#D9040C',
  '#C40000'
];
const rounded = (num) => {
  if (num < 0) return 0;
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + 'Bn';
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + 'M';
  } else if (num > 1000) {
    return Math.round(num / 100) / 10 + 'K';
  } else {
    return num;
  }
};

const minValue = -0; // based on the data array above
const maxValue = 200; // based on the data array above

const minColor = '#ffffff';
const maxColor = '#E65A5F';

const customScale = scaleLinear()
  .domain([minValue, maxValue])
  .range([minColor, maxColor]);

const tableStyle = {
  width: '20%',
  float: 'right',
  borderStyle: 'solid',
  borderColor: 'white',
  marginRight: '5%'
};

const tableRowStyle1 = {
  width: '50%',
  float: 'left',
  borderStyle: 'solid',
  borderColor: '#85AAC8',
  backgroundColor: '#4682B4',
  height: '80px',
  paddingTop: '15px',
  color: 'white',
  textAlign: 'center'
};

const tableRowStyle2 = {
  width: '50%',
  float: 'left',
  borderStyle: 'solid',
  borderColor: '#85AAC8',
  backgroundColor: 'white',
  height: '60px',
  color: 'black',
  padding: '10px',
  textAlign: 'center'
};

const tableRowStyle3 = {
  width: '70%',
  float: 'left',
  borderStyle: 'none',
  backgroundColor: '#0B5394',
  height: '30px',
  color: 'black',
  textAlign: 'left',
  paddingLeft: '10px'
};

const tableRowStyle4 = {
  width: '30%',
  float: 'right',
  borderStyle: 'none',
  backgroundColor: '#0B5394',
  height: '30px',
  color: 'black',
  textAlign: 'right',
  paddingRight: '10px'
};

const tableRowStyle5 = {
  width: '70%',
  float: 'left',
  borderStyle: 'none',
  backgroundColor: '#4682B4',
  height: '30px',
  color: 'black',
  textAlign: 'left',
  paddingLeft: '10px'
};

const tableRowStyle6 = {
  width: '30%',
  float: 'right',
  borderStyle: 'none',
  backgroundColor: '#85AAC8',
  height: '30px',
  color: 'black',
  textAlign: 'right',
  paddingRight: '10px'
};

const MapChart = ({ setTooltipContent }) => {
  return (
    <>
      <Colorscale colorscale={viridisColorscale} width="100%" />
      <p style={{ width: '10%', float: 'left', color: 'white' }}>0</p>
      <p style={{ width: '10%', float: 'left', color: 'white' }}>100</p>
      <p style={{ width: '10%', float: 'left', color: 'white' }}>200</p>
      <p style={{ width: '10%', float: 'left', color: 'white' }}>300</p>
      <p style={{ width: '10%', float: 'left', color: 'white' }}>400</p>
      <p style={{ width: '10%', float: 'left', color: 'white' }}>500</p>
      <p style={{ width: '10%', float: 'left', color: 'white' }}>600</p>
      <p style={{ width: '10%', float: 'left', color: 'white' }}>700</p>
      <p style={{ width: '10%', float: 'left', color: 'white' }}>800</p>
      <ComposableMap
        data-tip=""
        projectionConfig={{ scale: 200 }}
        style={{ width: '60%' }}
      >
        <ZoomableGroup>
          <Geographies geography={dataC}>
            {({ geographies }) =>
              geographies.map((dataC) => {
                return (
                  <Geography
                    key={dataC.rsmKey}
                    geography={dataC}
                    onMouseEnter={() => {
                      const {
                        NAME,
                        COMFIRMED_CASE,
                        DEATH_CASE
                      } = dataC.properties;
                      setTooltipContent(
                        `${NAME} — Confirmed Cases:  ${rounded(
                          COMFIRMED_CASE
                        )}; \n Death Cases:  ${rounded(DEATH_CASE)}`
                      );
                    }}
                    onMouseLeave={() => {
                      setTooltipContent('');
                    }}
                    style={{
                      default: {
                        fill: dataC.properties
                          ? customScale(dataC.properties.COMFIRMED_CASE)
                          : '#ECEFF1',
                        stroke: '#4585D4',
                        strokeWidth: 0.75,
                        outline: 'none'
                      },
                      hover: {
                        fill: '#F53',
                        outline: 'none'
                      },
                      pressed: {
                        fill: '#E42',
                        outline: 'none'
                      }
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <div style={tableStyle}>
        <div style={tableRowStyle1}>Total confirmed Cases </div>
        <div style={tableRowStyle1}>Number of Countries </div>
        <div style={tableRowStyle2}>1019 </div>
        <div style={tableRowStyle2}>29 </div>
        <div style={tableRowStyle3}>Country </div>
        <div style={tableRowStyle4}>Cases </div>
        <div style={{ height: '100%' }}>
          {mapCaseWorld.map((country) => {
            return (
              <>
                <div style={tableRowStyle5}>{country.Country} </div>
                <div style={tableRowStyle6}>{country.Cofirmed_Cases} </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default memo(MapChart);
