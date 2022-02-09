import React from 'react';
import {
  DynamicsIcon,
  MeasureIcon,
  ModifierIcon,
  NoteIcon,
  OttavaIcon,
  PedalIcon,
  RestIcon
} from 'components/musicicons';
import { ICON_SIZES, MUSIC_ICON_TYPES } from 'constants/icon';
import ComponentWrapper from 'components/ComponentWrapper';

const ICON_HEIGHT = '26.5px';
const ICON_WIDTH = '26.5px';
const ICON_VIEWBOX = '0 0 53 53';
const iconMap = {
  [MUSIC_ICON_TYPES.WHOLE_NOTE]: ComponentWrapper(NoteIcon, { showWholeNote: true }),
  [MUSIC_ICON_TYPES.HALF_NOTE]: ComponentWrapper(NoteIcon, { showHalfNote: true }),
  [MUSIC_ICON_TYPES.QUARTER_NOTE]: ComponentWrapper(NoteIcon, { showQuarterNote: true }),
  [MUSIC_ICON_TYPES.EIGHTH_NOTE]: ComponentWrapper(NoteIcon, { showEighthNote: true }),
  [MUSIC_ICON_TYPES.SIXTEENTH_NOTE]: ComponentWrapper(NoteIcon, { showSixteenthNote: true }),
  [MUSIC_ICON_TYPES.STACCATO]: ComponentWrapper(ModifierIcon, { showStaccato: true }),
  [MUSIC_ICON_TYPES.DOTTED]: ComponentWrapper(ModifierIcon, { showDotted: true }),
  [MUSIC_ICON_TYPES.ACCENT]: ComponentWrapper(ModifierIcon, { showAccent: true }),
  [MUSIC_ICON_TYPES.FERMATA]: ComponentWrapper(ModifierIcon, { showFermata: true }),
  [MUSIC_ICON_TYPES.GRACE_NOTE]: ComponentWrapper(ModifierIcon, { showGraceNote: true }),
  [MUSIC_ICON_TYPES.NOTE_FLAT]: ComponentWrapper(ModifierIcon, { showNoteFlat: true }),
  [MUSIC_ICON_TYPES.NOTE_NATURAL]: ComponentWrapper(ModifierIcon, { showNoteNatural: true }),
  [MUSIC_ICON_TYPES.NOTE_SHARP]: ComponentWrapper(ModifierIcon, { showNoteSharp: true }),
  [MUSIC_ICON_TYPES.ROLLED]: ComponentWrapper(ModifierIcon, { showRolled: true }),
  [MUSIC_ICON_TYPES.TENUTO]: ComponentWrapper(ModifierIcon, { showTenuto: true }),
  [MUSIC_ICON_TYPES.TRILL]: ComponentWrapper(ModifierIcon, { showTrill: true }),
  [MUSIC_ICON_TYPES.CRESCENDO]: ComponentWrapper(DynamicsIcon, { showCrescendo: true }),
  [MUSIC_ICON_TYPES.DECRESCENDO]: ComponentWrapper(DynamicsIcon, { showDecrescendo: true }),
  [MUSIC_ICON_TYPES.PIANISSISSIMO]: ComponentWrapper(DynamicsIcon, { value:'ppp' }),
  [MUSIC_ICON_TYPES.PIANISSIMO]: ComponentWrapper(DynamicsIcon, { value:'pp' }),
  [MUSIC_ICON_TYPES.PIANO]: ComponentWrapper(DynamicsIcon, { value:'p' }),
  [MUSIC_ICON_TYPES.MEZZOPIANO]: ComponentWrapper(DynamicsIcon, { value:'mp' }),
  [MUSIC_ICON_TYPES.FORTEPIANO]: ComponentWrapper(DynamicsIcon, { value:'fp' }),
  [MUSIC_ICON_TYPES.MEZZOFORTE]: ComponentWrapper(DynamicsIcon, { value:'mf' }),
  [MUSIC_ICON_TYPES.FORTE]: ComponentWrapper(DynamicsIcon, { value:'f' }),
  [MUSIC_ICON_TYPES.FORTISSIMO]: ComponentWrapper(DynamicsIcon, { value:'ff' }),
  [MUSIC_ICON_TYPES.FORTISSISSIMO]: ComponentWrapper(DynamicsIcon, { value:'fff' }),
  [MUSIC_ICON_TYPES.SFORZANDO]: ComponentWrapper(DynamicsIcon, { value:'sfz' }),
  [MUSIC_ICON_TYPES.DIMINUENDO]: ComponentWrapper(DynamicsIcon, { value:'dim.' }),
  [MUSIC_ICON_TYPES.RITARDANO]: ComponentWrapper(DynamicsIcon, { value:'rit.' }),
  [MUSIC_ICON_TYPES.DECRESCENDO_TEXT]: ComponentWrapper(DynamicsIcon, { value:'decresc.' }),
  [MUSIC_ICON_TYPES.CRESCENDO_TEXT]: ComponentWrapper(DynamicsIcon, { value:'cresc.' }),
  [MUSIC_ICON_TYPES.LEGGIERO]: ComponentWrapper(DynamicsIcon, { value:'leggiero' }),
  [MUSIC_ICON_TYPES.A_TEMPO]: ComponentWrapper(DynamicsIcon, { value:'a tempo' }),
  [MUSIC_ICON_TYPES.RISOLUTO]: ComponentWrapper(DynamicsIcon, { value:'risoluto' }),
  [MUSIC_ICON_TYPES.E]: ComponentWrapper(DynamicsIcon, { value:'e' }),
  [MUSIC_ICON_TYPES.POCO_RITARDANO]: ComponentWrapper(DynamicsIcon, { value:'poco rit.' }),
  [MUSIC_ICON_TYPES.DYNAMICS_REMOVE]: ComponentWrapper(DynamicsIcon, { value:'DEL' }),
  [MUSIC_ICON_TYPES.MEASURE_END]: ComponentWrapper(MeasureIcon, { showMeasureEnd: true }),
  [MUSIC_ICON_TYPES.REPEAT_START]: ComponentWrapper(MeasureIcon, { showRepeatBarStart: true }),
  [MUSIC_ICON_TYPES.REPEAT_END]: ComponentWrapper(MeasureIcon, { showRepeatBarEnd: true }),
  [MUSIC_ICON_TYPES.MEASURE_REMOVE]: ComponentWrapper(PedalIcon, { value: 'DEL' }),
  [MUSIC_ICON_TYPES.PEDAL_START]: ComponentWrapper(PedalIcon, { showPedalStart: true }),
  [MUSIC_ICON_TYPES.PEDAL_CONTINUE]: ComponentWrapper(PedalIcon, { showPedalContinue: true }),
  [MUSIC_ICON_TYPES.PEDAL_QUICK_RELEASE]: ComponentWrapper(PedalIcon, { showPedalQuickRelease: true }),
  [MUSIC_ICON_TYPES.PEDAL_REMOVE]: ComponentWrapper(PedalIcon, { value: 'DEL' }),
  [MUSIC_ICON_TYPES.PEDAL_END]: ComponentWrapper(PedalIcon, { showPedalEnd: true }),
  [MUSIC_ICON_TYPES.WHOLE_REST]: ComponentWrapper(RestIcon, { showWholeRest: true }),
  [MUSIC_ICON_TYPES.HALF_REST]: ComponentWrapper(RestIcon, { showHalfRest: true }),
  [MUSIC_ICON_TYPES.QUARTER_REST]: ComponentWrapper(RestIcon, { showQuarterRest: true }),
  [MUSIC_ICON_TYPES.EIGHTH_REST]: ComponentWrapper(RestIcon, { showEighthRest: true }),
  [MUSIC_ICON_TYPES.SIXTEENTH_REST]: ComponentWrapper(RestIcon, { showSixteenthRest: true }),
  [MUSIC_ICON_TYPES.OTTAVA_ALTA_START]: ComponentWrapper(OttavaIcon, { showOttavaAltaStart: true }),
  [MUSIC_ICON_TYPES.OTTAVA_ALTA_CONTINUE]: ComponentWrapper(OttavaIcon, { showOttavaAltaContinue: true }),
  [MUSIC_ICON_TYPES.OTTAVA_ALTA_END]: ComponentWrapper(OttavaIcon, { showOttavaAltaEnd: true }),
  [MUSIC_ICON_TYPES.OTTAVA_ALTA_REMOVE]: ComponentWrapper(OttavaIcon, { value: 'DEL' }),
  [MUSIC_ICON_TYPES.OTTAVA_BASSA_START]: ComponentWrapper(OttavaIcon, { showOttavaBassaStart: true }),
  [MUSIC_ICON_TYPES.OTTAVA_BASSA_CONTINUE]: ComponentWrapper(OttavaIcon, { showOttavaBassaContinue: true }),
  [MUSIC_ICON_TYPES.OTTAVA_BASSA_END]: ComponentWrapper(OttavaIcon, { showOttavaBassaEnd: true }),
  [MUSIC_ICON_TYPES.OTTAVA_BASSA_REMOVE]: ComponentWrapper(OttavaIcon, { value: 'DEL' })
};


const MusicIconButton = ({ type, isActive, onClick }) => {
  const IconSVG = iconMap.hasOwnProperty(type) ? iconMap[type] : null;
  const className = isActive ? 'btn--icon music--icon music--icon-active' : 'btn--icon music--icon';

  if(!IconSVG) {
    return null;
  }

  return (
    <button className={className} onClick={onClick}>
      <svg height={ICON_HEIGHT} width={ICON_WIDTH} viewBox={ICON_VIEWBOX}>
        <IconSVG />
      </svg>
    </button>
  );
};

export default MusicIconButton;
