import React from 'react';
import Notes from './Notes';

function Keys(props) {

  return (
    <ul id="piano">
      <li data-note="C4" className="key" 
      onClick={props.onClick} 
      onKeyDown={props.onKeyDown} tabIndex={0}>
        A
          <div data-note="C#4" className="black-key" 
          onClick={props.onClick} 
          onKeyDown={props.onKeyDown} tabIndex={0}>
          W
          </div>
      </li>
      <li data-note="D4" className="key" 
      onClick={props.onClick} 
      onKeyDown={props.onKeyDown} tabIndex={0}>
        S
          <div data-note="D#4" className="black-key" 
          onClick={props.onClick} 
          onKeyDown={props.onKeyDown} tabIndex={0}>
          E
          </div>
      </li>
      <li data-note="E4" className="key" 
      onClick={props.onClick} 
      onKeyDown={props.onKeyDown} tabIndex={0}>
        D
      </li>
      <li data-note="F4" className="key" 
      onClick={props.onClick} onKeyDown={props.onKeyDown} tabIndex={0}>
        F
          <div data-note="F#4" className="black-key" 
          onClick={props.onClick} 
          onKeyDown={props.onKeyDown} tabIndex={0}>
          T
          </div>
      </li>
      <li data-note="G4" className="key" 
      onClick={props.onClick} onKeyDown={props.onKeyDown} tabIndex={0}>
        G
          <div data-note="G#4" className="black-key" 
          onClick={props.onClick} 
          onKeyDown={props.onKeyDown} tabIndex={0}>
          Y
          </div>
      </li>
      <li data-note="A4" className="key" 
      onClick={props.onClick} 
      onKeyDown={props.onKeyDown} tabIndex={0}>
        H
          <div data-note="A#4" className="black-key" 
          onClick={props.onClick} 
          onKeyDown={props.onKeyDown} tabIndex={0}>
          U
          </div>
      </li>
      <li data-note="B4" className="key" 
      onClick={props.onClick} 
      onKeyDown={props.onKeyDown} tabIndex={0}>
        J
      </li>
      <li data-note="C5" className="key" 
      onClick={props.onClick} 
      onKeyDown={props.onKeyDown} tabIndex={0}>
        K
          <div data-note="C#5" className="black-key" 
          onClick={props.onClick} 
          onKeyDown={props.onKeyDown} tabIndex={0}>
          O
          </div>
      </li>
      <li data-note="D5" className="key" 
      onClick={props.onClick} onKeyDown={props.onKeyDown} tabIndex={0}>
        L
          <div data-note="D#5" className="black-key" 
          onClick={props.onClick} 
          onKeyDown={props.onKeyDown} tabIndex={0}>
          P
          </div>
      </li>
      <li data-note="E5" className="key" 
      onClick={props.onClick} 
      onKeyDown={props.onKeyDown} tabIndex={0}>
        ;
      </li>
      <li data-note="F5" className="key" 
      onClick={props.onClick} 
      onKeyDown={props.onKeyDown} tabIndex={0}>
        ' 
      </li>
    </ul>
  );
}

export default Keys;