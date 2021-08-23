import style from 'styled-components';

export const HiddenCheckbox = style.input.attrs({ type: 'checkbox' })`
border: 0;
clip: rect(0 0 0 0);
clippath: inset(50%);
height: 1px;
margin: -1px;
overflow: hidden;
padding: 0;
position: absolute;
white-space: nowrap;
width: 1px;
`
export const StyledCheckbox = style.div`
display: inline-block;
width: 19px;
height: 19px;
background: ${props => props.checked ? '#027aff' : '#333'};
border-radius: 3px;
transition: all 150ms;
margin-right:8px
`

export const CheckboxContainer = style.div`
display: inline-block;
vertical-align: middle;
//   margin:30px 0px;
cursor:pointer
`
export const Icon = style.svg`
fill: none;
stroke: white;
stroke-width: 2px;
`
export const Label = style.label`
display: flex;
font-size: 15px
`