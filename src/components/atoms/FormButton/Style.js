import style from 'styled-components';

export const Button = style.button`
appearance: none;
-webkit-appearance: none;
font-family: sans-serif;
cursor: pointer;
padding: 12px;
min-width: 150px;
border: 1px dashed;
border-radius: 24px;
margin:12px;
background-color: ${props => props.isDisabled ? 'lightgray' : '#027aff'} ;
color: white;
-webkit-transition: background-color 100ms linear;
-ms-transition: background-color 100ms linear;
 transition: background-color 100ms linear;
 display:block;
 display:flex;
 justify-content: center;
`