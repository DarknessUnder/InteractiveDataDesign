import React, { memo } from 'react';
import '../src/styles.css';
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from 'react-simple-maps';

import dataC from './policyData.json';

const MapPolicy = ({ setTooltipContent }) => {
  return (
    <>
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
                      const { NAME, Policy } = dataC.properties;
                      setTooltipContent(`${NAME} — ${Policy} `);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent('');
                    }}
                    style={{
                      default: {
                        fill: dataC.properties.COLOR,
                        stroke: '#FFFFFF',
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
    </>
  );
};

export default memo(MapPolicy);
