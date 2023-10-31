import styled from 'styled-components'
const Title = styled.h1`
  padding: 10px;
  border: 1px solid ${({border}) => border};
  color: ${({color}) => color};
  background-color: ${({bg}) => bg};
`
const Content = styled.div`
  display: ${({isOpen}) => isOpen ? 'block' : 'none'};
  padding: 10px;
  margin: -1px 0 0 0;
  border: 1px solid ${({border}) => border};
  color: ${({color}) => color};
`
export {Title, Content}