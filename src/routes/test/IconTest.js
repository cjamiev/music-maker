import React from 'react';
import Button, { MusicIconButton } from 'components/button';
import { ICON_SIZES, MUSIC_ICON_TYPES } from 'constants/icon';
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

export {
  DynamicsIcons,
  OttavaIcons,
  PedalIcons,
  MeasureBarIcons,
  ModifierIcons,
  NoteIcons,
  RestIcons
};