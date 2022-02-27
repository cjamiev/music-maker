import React, { useMemo, useEffect, useState } from 'react';
import Page from 'components/layout';
import {
  DynamicsIcons,
  OttavaIcons,
  PedalIcons,
  MeasureBarIcons,
  ModifierIcons,
  NoteIcons,
  RestIcons
} from './IconTest';
import { BeamTest } from './BeamTest';

const Test = () => {
  return (
    <Page>
      <DynamicsIcons />
      <OttavaIcons />
      <PedalIcons />
      <MeasureBarIcons />
      <ModifierIcons />
      <NoteIcons />
      <RestIcons />
      <BeamTest />
    </Page>
  );
};

export default Test;
