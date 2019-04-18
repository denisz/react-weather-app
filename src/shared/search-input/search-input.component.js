import React from 'react';
import keycode from 'keycode';
import styled from 'styled-components';

const Input = styled.input`
    background-color: rgba(255,255,255,0.2);
    border-radius: 15px;
    border: none;
    height: 30px;
    width: 100%;
    margin: 0;
    color: white;
    padding: 0 10px;
    box-sizing: border-box;
    font-family: "Open Sans";
    font-size: 15px;
    outline: none;
    
    ::placeholder {
          color: rgba(255, 255, 255, 0.5);
     }
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const BntSearch = styled.button`
    background-color: rgba(255,255,255,0.5);
    border: 0;
    border-radius: 15px;
    box-sizing: border-box;
    margin: 0 10px;
    width: 100px;
    color: white;
    padding: 0;   
`;

const SearchInputComponent = ({onChange, placeholder="Search", onSearch, value, className}) => (
    <Row className={className}>
        <Input type="text"
               onChange={e => onChange(e.target.value)}
               value={value}
               placeholder={placeholder}
               onKeyUp={(event) => {
                   if (keycode.isEventKey(event, 'enter')) {
                       onSearch(value);
                   }
               }}
        />
        <BntSearch
            disabled={value.length === 0}
            onClick={() => onSearch(value)}>Search</BntSearch>
    </Row>);

export {SearchInputComponent}