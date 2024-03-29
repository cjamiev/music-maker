import React from 'react';
import { MusicIconButton } from 'components/atoms/MusicIconButton';
import {
  measureBarTypes,
  noteModifierTypes,
  noteTypes,
  restTypes,
  pedalTypes,
  ottavaTypes,
  dynamicsTypes
} from 'constants/musicnotation';

const DynamicsIcons = () => {
  return dynamicsTypes.map(item => {
    return (
      <MusicIconButton
        key={item.key}
        type={item.key}
        onClick={() => { console.log({
          conditions: item.conditions || {},
          value: item.value
        }); }}
      />
    );
  }).filter(Boolean);
};

const OttavaIcons = () => {
  return ottavaTypes.map(item => {
    return (
      <MusicIconButton
        key={item.key}
        type={item.key}
        onClick={() => { console.log(item.value); }}
      />
    );
  }).filter(Boolean);
};

const PedalIcons = () => {
  return pedalTypes.map(item => {
    return (
      <MusicIconButton
        key={item.key}
        type={item.key}
        onClick={() => { console.log(item.value); }}
      />
    );
  }).filter(Boolean);
};

const MeasureBarIcons = () => {
  return measureBarTypes.map(item => {
    return (
      <MusicIconButton
        key={item.key}
        type={item.key}
        onClick={() => { console.log(item.value); }}
      />
    );
  }).filter(Boolean);
};

const ModifierIcons = () => {
  return noteModifierTypes.map(item => {
    return (
      <MusicIconButton
        key={item.key}
        type={item.key}
        onClick={() => { console.log(item.value); }}
      />
    );
  }).filter(Boolean);
};

const NoteIcons = () => {
  return noteTypes.map(item => {
    return (
      <MusicIconButton
        key={item.key}
        type={item.key}
        onClick={() => { console.log(item.value); }}
      />
    );
  }).filter(Boolean);
};

const RestIcons = () => {
  return restTypes.map(item => {
    return (
      <MusicIconButton
        key={item.key}
        type={item.key}
        onClick={() => { console.log(item.value); }}
      />
    );
  }).filter(Boolean);
};

const IconTest = () => {
  return (
    <>
      <DynamicsIcons />
      <OttavaIcons />
      <PedalIcons />
      <MeasureBarIcons />
      <ModifierIcons />
      <NoteIcons />
      <RestIcons />
    </>
  );
};

export default IconTest;