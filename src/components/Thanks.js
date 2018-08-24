import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { ThemeProvider } from 'styled-components'
import mainTheme from '../styles/theme'
import Button from '../components/Button'

const Wrapper = styled.div`
  height: 70vh;
  background-size: cover;
  background-position-y: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  font-size: 30px;
  line-height: 41px;
  color: #ffffff;
  padding-top: 50px;
  font-family: Avenir;
`

const Detail = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-family: Avenir;
  line-height: 30px;
  max-width: 560px;
  text-align: center;
  margin: 0;
`

const BackButton = Button.extend`
  margin-top: 3rem;
  box-shadow: 2px 4px rgba(0, 0, 0, 0.1);
`

export default class NotFound extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: mainTheme.secondary,
      secondary: false,
    }
  }
  UNSAFE_componentWillMount() {
    this.updateDimensions()
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.updateDimensions.bind(this))
    }
  }
  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.updateDimensions.bind(this))
    }
  }
  updateDimensions() {
    if (typeof screen !== `undefined`) {
      if (screen.width > 576) {
        if (this.state.secondary) {
          this.setState({
            theme: mainTheme.secondary,
          })
        } else {
          this.setState({
            theme: mainTheme.primary,
          })
        }
      }
    }
  }
  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Wrapper>
          <Title>Thanks!</Title>
          <Detail>Your form was received.</Detail>
          <Link to="/">
            <BackButton>Back to Home</BackButton>
          </Link>
        </Wrapper>
      </ThemeProvider>
    )
  }
}
