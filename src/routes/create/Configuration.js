import React, { useState } from 'react';
import {
  Dropdown,
  Text
} from 'components/form';
import {
  keySignatures,
  timeSignatures
} from 'constants';
import {
  TEMPO
} from 'constants/musictext';

const tempo = Object.values(TEMPO).map((name) => {
  return { label: name, selected: false };
});
const KEY_SIGNATURES = keySignatures.map((opts) => {
  return { ...opts, selected: false };
});
const TIME_SIGNATURES = timeSignatures.map((opts) => {
  return { ...opts, selected: false };
});

const Configuration = ({ onChange }) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [tempoOptions, setTempoOptions] = useState(tempo);
  const [author, setAuthor] = useState('');
  const [timeSignatureOptions, setTimeSignatureOptions] = useState(TIME_SIGNATURES);
  const [keySignatureOptions, setKeySignatureOptions] = useState(KEY_SIGNATURES);

  return (
    <div className="main">
      <Text
        label="Title"
        selected={title}
        onChange={({ selected }) => {
          setTitle(selected);
          onChange({ title: selected });
        }}
      />
      <Text
        label="SubTitle"
        selected={subtitle}
        onChange={({ selected }) => {
          setSubtitle(selected);
          onChange({ subtitle: selected });
        }}
      />
      <Dropdown
        label='Tempo'
        values={tempoOptions}
        onChange={({ values }) => {
          setTempoOptions(values);
          onChange({ tempo: values.find(item => item.selected).label });
        }}
      />
      <Text
        label="Author"
        selected={author}
        onChange={({ selected }) => {
          setAuthor(selected);
          onChange({ author: selected });
        }}
      />
      <Dropdown
        label='Time Signature'
        values={timeSignatureOptions}
        onChange={({ values }) => {
          setTimeSignatureOptions(values);
          onChange({ timeSignature: values.find(item => item.selected).value });
        }}
      />
      <Dropdown
        label='Key Signature'
        values={keySignatureOptions}
        onChange={({ values }) => {
          setKeySignatureOptions(values);
          onChange({ keySignature: values.find(item => item.selected).value });
        }}
      />
    </div>
  );
};

export default Configuration;
