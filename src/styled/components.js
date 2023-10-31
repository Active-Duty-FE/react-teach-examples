import styled from 'styled-components'

const h1 = styled.h1`
  font-size: 20px; color: #abcabc;
`
const section = styled.div`
  margin: 0 0 20px; 
`
const select = styled.select`
  min-width: 80px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
`
const button = styled.button`
  cursor: pointer;
  display: inline-block;
  height: ${props => props.size === 'big' ? '40px' : props.size === 'small' ? '28px' : '36px'};
  min-width: 80px;
  margin: 0 5px 0 0;
  padding: 0 16px;
  border: 0;
  border-radius: 4px;
  color:  ${props => props.type === 'primary' ? '#fff' : props.type === 'warn' ? '#fff' : '#fff'};;
  outline: none;
  background: ${props => props.type === 'primary' ? '#abcabc' : props.type === 'warn' ? '#933' : '#ccc'};

`
const container = styled.div`
  padding: 30px;
`
export 
{
  container,
  h1,
  section,
  select,
  button,
}