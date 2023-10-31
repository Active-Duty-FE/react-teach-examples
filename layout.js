import styled,{createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * { margin:0; padding:0; }
  html { width:100%;height:100%; }
  body { max-width:1263px; }
  body, code { font:12px AppleGothic,sans-serif; color:#000; background-color:#fff; }
  li { list-style:none; }
  img,fieldset { border:none; vertical-align:top; }
  hr.layout { display:none; }
  table { border-spacing:0; border:0; border-collapse:collapse; width:100%; }
  th,td { border:0; }
  button { padding:0; margin:0; border:0; cursor:pointer; overflow:visible; }
  input,select,textarea { font-size:100%; color:#000; }
  a { text-decoration:none;color:#000; }
  a:hover { text-decoration:none; }
  a:active { text-decoration:none; }
`

const Header = styled.header`
  padding:${props => props.padding};

`
const Box = styled.div`
  display: ${props => props.display ? props.display : 'flex'};
  flex:1;
  justify-content: ${props => props.align};
  padding:${props => props.padding};
  flex-direction: ${props => props.direction};
`
const Footer = styled.footer`
  padding:${props => props.padding};

`
export {Header, Box, Footer, GlobalStyle}