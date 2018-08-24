import React from 'react'
import PropTypes from 'prop-types'
import graphql from 'graphql'
import styled from 'styled-components'

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

const Title = styled.h1`
  font-size: 30px;
  line-height: 41px;
  color: #CCCCC;
  padding-top: 50px;
  font-family: Avenir;
`

const ThanksPage = () => {
  return (
    <div>
    <Wrapper>
      <Title>Thanks, We will be in touch shortly.</Title>
      </Wrapper>
    </div>

  )
}

ThanksPage.propTypes = {
  data: PropTypes.object,
}

export default ThanksPage

export const ThanksPageQuery = graphql`
  query ThanksPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: { absolutePath: { regex: "/images/" } }) {
      edges {
        node {
          extension
          dir
          absolutePath
          relativePath
        }
      }
    }
  }
`
