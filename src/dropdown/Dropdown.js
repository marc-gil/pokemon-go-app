import React, { useState, useEffect } from 'react';
import {ReactComponent as ArrowDown} from './arrowDown.svg';
import {ReactComponent as ArrowUp} from './arrowUp.svg';
import './Dropdown.css';


function Dropdown(props) {
  const [isListOpen, setIsListOpen] = useState(props.isListOpen);
  const [selectedValue, setSelectedValue] = useState("");
  const [keyword, setKeyword] = useState('');
  const [selectedItem, setSelectedItem] = useState(props.selectedItem);
  const list = props.list;

  const toggleList = () => {
    setKeyword('');
    setIsListOpen(!isListOpen);
    
    if (isListOpen) {
      debugger;
      setKeyword('');
    }
  }

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    setTimeout(() => {
      if ( isListOpen ) {
        window.addEventListener('click', close);
      } else {
        window.removeEventListener('click', close);
      }
    }, 0);
    return () => {
      window.removeEventListener('click', close);
    };
  })

  const close = () => {
    setIsListOpen(false);
  }

  const selectSingleItem = (item) => {
    setSelectedItem(list.find((i) => i.value === item.value));
    selectItem(selectedItem);
  }

  const filterList = (e) => {
    setKeyword(e.target.value.toLowerCase());
  }

  const selectItem = (item) => {
    const { label } = item;
    setSelectedValue(label);
    setIsListOpen(false);
    setSelectedItem(item);
    props.onSelectItem(item);
  }

  const listItems = () => {
    let tempList = [...list];

    if ( keyword.length ) {
      tempList = list.filter((item) => item.label.toLowerCase().includes(keyword.toLowerCase()));
    }

    if ( tempList.length ) {
      return (
        tempList.map( (item) => (
          <button
            type="button"
            className={"dd-list-item"}
            key={item.value}
            onClick={() => selectItem(item)}>
              {item.label}
              {' '}
          </button>
        ))
      );
    }

    return (
      <div className={"dd-list-item no-result"}>
        {"No matching Pokemon"}
      </div>
    );
  }

  if (props.select) {
    selectSingleItem(props.select);
  }

  return (
    <div className={"dd-wrapper"}>
      <button type="button" 
              className={"dd-header"} 
              onClick={() => toggleList()}>
        <input 
          className={"dd-header-title"} 
          ref={props.searchField}
          placeholder={props.placeHolder}
          onChange={(e) => filterList(e)}
          value={selectedValue}
          required={props.required}
        />
        <span>
          {isListOpen ? <ArrowUp/> : <ArrowDown/>}
        </span>
      </button>
      {isListOpen && (
        <div className={"dd-list searchable"}>
          <input
            ref={props.searchField}
            className="dd-list-search-bar"
            placeholder={props.placeHolder}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => filterList(e)}
            autoFocus={true}/>

          <div className={"dd-scroll-list"}>
            {listItems()}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
