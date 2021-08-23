import style from 'styled-components';

export const FormFileContainer = style.div`
position: relative;
overflow: hidden;
display: inline-block;
`
export const Button = style.button`
border: 2px solid gray;
color: gray;
background-color: white;
padding: 5px 10px;
border-radius: 8px;
font-size: 20px;
font-weight: bold;
`
export const Input = style.input`
font-size: 100px;
position: absolute;
left: 0;
top: 0;
opacity: 0;
`