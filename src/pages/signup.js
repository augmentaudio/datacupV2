import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Button from '../components/Button'
import { P } from '../components/Typography'

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

const SignupPage = () => (
    <Wrapper>
    <div className="contents">

        <Helmet>
            <title>Signup</title>
            <meta name="description" content="Signup" />
        </Helmet>



        <div id="main" className="alt" padding="100px">
        <div>
          <h1 className="contents"> Get Quality Leads. Instantly.</h1>
        </div>
            <section id="one">
                <div className="inner">
                <Formwrap>
                        <h2>Generic</h2>

                      <form name="signup" action="https://formspree.io/jonportelli@gmail.com"
      method="POST">

                        <div className="field">
                            <Fieldlabel>Email</Fieldlabel>
                          <input type="text" name="email" id="email" />

                        </div>

                        <ul className="actions">
                            <SignupButton><li><input type="submit" value="Send Message" className="SignupButton>" /></li></SignupButton>

                            <Link to="#">
                              <SignupButton>Sign me up</SignupButton>
                            </Link>

                            <li><input type="reset" value="Clear" /> </li>
                            <Link to="/">
                              <SignupButton>Cancel</SignupButton>
                            </Link>
                        </ul>

                      </form>
                </Formwrap>
                </div>
            </section>
        </div>

    </div>

  </Wrapper>
)

export default SignupPage
