import React from 'react';
import './styles.css';
import Donut from '../components/Donut';

export default function VaccinePage() {
  return (
    <div style={{ height: '800px' }}>
      <div style={{ width: '100%', height: '200px' }}>
        <Donut />
      </div>
    </div>
  );
}
