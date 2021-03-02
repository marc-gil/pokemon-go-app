import React, { useState } from 'react';
import { mergeClasses } from '../common/classUtils.js';
import './StatBar.css';

function Segment(props) {
    return <div id={props.id} 
                className={props.className} 
                onClick={props.onClick} 
                onMouseEnter={props.onMouseEnter} 
                onMouseLeave={props.onMouseLeave}/>
}

function StatBar(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(0);
  
  return (
    <div id={props.id} className={mergeClasses('stat-bar', props.segments.length === activeIndex && 'max')}>
      {props.segments.map( (segment) => {
        const index = segment.id;
        segment.isActive = index <= activeIndex;
        segment.isEnd = index === activeIndex || index === hoverIndex;
        segment.isHover = index <= hoverIndex;
        return <Segment key={segment.id} 
                        id={segment.id} 
                        className={mergeClasses('bar', segment.isActive && 'active', segment.isHover && 'hover', segment.isEnd && 'end')} 
                        onClick={() => setActiveIndex(segment.id)} 
                        onMouseEnter={() => setHoverIndex(segment.id)}
                        onMouseLeave={() => setHoverIndex(0)}/>
      })}       
    </div>
  )
}

export default StatBar;