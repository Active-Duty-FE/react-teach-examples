import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
// button
export function Button(props) {
  return (
    <SButton {...props} />
  )
}
const SButton = styled.button`
  display: inline-block;
  flex: ${props => props.flex};
  width: ${props => props.width ? props.width : '100px'};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border: 0;
  color: ${props => props.color};
  text-align: center;
  outline: 0;
  background-color: ${props => props.bg};
`
// Link
export const Link = styled(NavLink)`
  display: inline-block;
  box-sizing: border-box;
  min-width: ${props => props.width ? props.width : '100px'};
  padding: ${props => props.padding ? props.padding : '5px 10px'};
  text-align: center;
  text-decoration: none;
  color: ${props => props.color};
  font-size:  ${props => props.fontSize};
  background-color: #ccc;
  &:not(:first-of-type) {
    margin-left:5px;
  }
  &.active {
    background-color: ${props => props.bg};
  }
`
// nav
export const Nav = styled.nav`
  display: flex;
  justify-content: center;
`
// p
export const P = styled.div`
  flex: ${props => props.flex};
  font-size: ${ props => props.fontSize };
  color: ${ props => props.color };
  font-weight: ${ props => props.fontWeight };
  margin: ${ props => props.margin };
`
export const Ul = styled.ul`
 display: ${props => props.display ? props.display : 'flex'};
 flex-wrap: wrap;
 width: ${props => props.width};
 flex-direction: ${props => props.direction};
`
// li
export const Li = styled.li`
  width: ${props => props.width};
  &:not(:first-of-type) { margin:8px 0 0; };
`
// input
export const Input = styled.input`
  box-sizing: border-box;
  height: 36px;
  padding: 3px 3px 3px 7px;
  line-height: 36px;
  outline: 0;
  border: 1px solid #ccc;
`
// img
export const Img = styled.img`
  max-width: 100%;
`