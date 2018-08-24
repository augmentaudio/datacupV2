import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Button from '../components/Button'
import { H1, H3, P } from '../components/Typography'
import { push } from "gatsby-link"

const Wrapper = styled.div`
  background-size: cover;
  background-position: left top;
  position: relative;
  margin-top: 90px;
  text-align: center;
  height: 700px;
  @media screen and (max-width: 767px) {
    height: 750px;
  }
  @media screen and (max-width: 576px) {
    margin-top: 70px;
    height: 680px;
  }
`

const Title = H1.extend`
position: relative;
  margin-top: 71px;
  text-align: center;
`

const Subtext = H3.extend`
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
  margin-bottom: 2.5rem;
  letter-spacing: 0.1em;
`

const Fieldinline = styled.div`
display: inline;
`

const SignupButton = Button.extend`
  position: relative;
  @media screen and (max-width: 576px) {
    top: 5rem;
    font-size: 14px;
    line-height: 19px;
    padding: 0.5rem 3rem;
  }
`

const Fieldlabel = P.extend`
  display: inline;
  color: #33475B;
  letter-spacing: 0.15em;
  margin-right: 1em;
  text-align: right;
`

const Formwrap = styled.div`
  background-size: cover;
  background-position: left top;
  position: relative;
  margin-top: 20px;
  text-align: center;
  height: 700px;
  @media screen and (max-width: 767px) {
    height: 750px;
  }
  @media screen and (max-width: 576px) {
    margin-top: 70px;
    height: 680px;
  }
`
const MainSection = styled.div`
  display: block;
  position: relative;
  padding-top: 94px;
  height: fit-content;
`

const SignupPage = () => (
    <Wrapper>
    <div className="contents">

        <Helmet>
            <title>Signup</title>
            <meta name="description" content="Signup" />
        </Helmet>
  <MainSection>
    <div id="main" className="alt">
    <div>
      <Title>Get Quality Leads. Instantly.</Title>
    </div>
        <section id="one">
            <div className="inner">
            <Formwrap>
                  <Subtext>When you want to save time on finding leads, this is the way to go...</Subtext>
                  <form name="signup" action="https://formspree.io/jonportelli@gmail.com" method="POST">
                    <Fieldinline>
                          <Fieldlabel>Email</Fieldlabel>
                          <input type="text" name="email" id="email"/>
                    <ul className="actions">
                          <div onClick={ () => push('/blog')}>
                          <SignupButton>Start Your Free 30-Day Trial</SignupButton>
                          </div>

                    </ul>
                  </Fieldinline>
                  </form>
            </Formwrap>
            </div>
        </section>
    </div>
    </MainSection>
    </div>

  </Wrapper>
)

export default SignupPage
