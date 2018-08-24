import styled from 'styled-components'
import { H1, H6, P } from '../Typography'
import { Container, Row, Col } from '../Layout'

export const CardGroup = styled.div`
border: 1px solid rgba(44, 51, 59, 0.2);
text-align: center;
margin-top: 2rem;
${({ enterpriseMode }) =>
  enterpriseMode &&
  css`
    background-color: #495cf2;
    color: white;
    border: none;
  `};
`
