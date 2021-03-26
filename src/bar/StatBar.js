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
  const [activeIndex, setActiveIndex] = useState(props.value);
  const [hoverIndex, setHoverIndex] = useState(0);
  const segments = [
    {id : 1, isActive : activeIndex >= 1}, 
    {id : 2, isActive : activeIndex >= 2}, 
    {id : 3, isActive : activeIndex >= 3}, 
    {id : 4, isActive : activeIndex >= 4}, 
    {id : 5, isActive : activeIndex >= 5}, 
    {id : 6, isActive : activeIndex >= 6}, 
    {id : 7, isActive : activeIndex >= 7}, 
    {id : 8, isActive : activeIndex >= 8}, 
    {id : 9, isActive : activeIndex >= 9}, 
    {id : 10, isActive : activeIndex >= 10}, 
    {id : 11, isActive : activeIndex >= 11}, 
    {id : 12, isActive : activeIndex >= 12}, 
    {id : 13, isActive : activeIndex >= 13}, 
    {id : 14, isActive : activeIndex >= 14}, 
    {id : 15, isActive : activeIndex >= 15}
  ];
  
  const handleClick = (id) => {
    if ( activeIndex === id ) {
      id = 0;
    }
    setActiveIndex(id);
    props.onChange(id);
  }

  return (
    <div id={props.id} className={mergeClasses('stat-bar', segments.length === activeIndex && 'max')}>
      {segments.map( (segment) => {
        const index = segment.id;
        segment.isActive = index <= activeIndex;
        segment.isEnd = index === activeIndex || index === hoverIndex;
        segment.isHover = index <= hoverIndex;
        return <Segment key={segment.id} 
                        id={segment.id} 
                        className={mergeClasses('bar', segment.isActive && 'active', segment.isHover && 'hover', segment.isEnd && 'end')} 
                        onClick={() => handleClick(segment.id)} 
                        onMouseEnter={() => setHoverIndex(segment.id)}
                        onMouseLeave={() => setHoverIndex(0)}/>
      })}       
    </div>
  )
}

export default StatBar;