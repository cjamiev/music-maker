import React, { useEffect, useState } from 'react';
import {
  Dropdown,
  Text
} from 'components/atoms/Form';
import {
  keySignatures,
  timeSignatures
} from 'constants/musicnotation';
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

export const Configuration = ({ configuration, onConfigurationChange }) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [tempoOptions, setTempoOptions] = useState(tempo);
  const [author, setAuthor] = useState('');
  const [timeSignatureOptions, setTimeSignatureOptions] = useState(TIME_SIGNATURES);
  const [keySignatureOptions, setKeySignatureOptions] = useState(KEY_SIGNATURES);

  useEffect(() => {
    setTitle(configuration.title);
    setSubtitle(configuration.subtitle);
    setAuthor(configuration.author);
  }, [configuration]);

  return (
    <div className='createmusic__configuration'>
      <Text
        label='Title'
        selected={title}
        onChange={({ selected }) => {
          setTitle(selected);
          onConfigurationChange({ title: selected });
        }}
      />
      <Text
        label='SubTitle'
        selected={subtitle}
        onChange={({ selected }) => {
          setSubtitle(selected);
          onConfigurationChange({ subtitle: selected });
        }}
      />
      <Dropdown
        label='Tempo'
        values={tempoOptions}
        onChange={({ values }) => {
          setTempoOptions(values);
          onConfigurationChange({ tempo: values.find(item => item.selected).label });
        }}
      />
      <Text
        label='Author'
        selected={author}
        onChange={({ selected }) => {
          setAuthor(selected);
          onConfigurationChange({ author: selected });
        }}
      />
      <Dropdown
        label='Time Signature'
        values={timeSignatureOptions}
        onChange={({ values }) => {
          setTimeSignatureOptions(values);
          onConfigurationChange({ timeSignature: values.find(item => item.selected).value });
        }}
      />
      <Dropdown
        label='Key Signature'
        values={keySignatureOptions}
        onChange={({ values }) => {
          setKeySignatureOptions(values);
          onConfigurationChange({ keySignature: values.find(item => item.selected).value });
        }}
      />
    </div>
  );
};
