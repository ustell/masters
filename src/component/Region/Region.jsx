import React from 'react';
import WorkSheet from './Worksheet';

import '../../scss/components/region.scss';

function Region() {
  return (
    <div className="region">
      <p className="region__title">Мастера в Анталии</p>
      <span className="region__subtitle">
        В вашем регионе работает 134 специалистов, ещё 2630 готовы помочь дистанционно.
      </span>
      <WorkSheet />
    </div>
  );
}

export default Region;
