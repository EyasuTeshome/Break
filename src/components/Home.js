import React from 'react'
import Section from './Section'
import styled from 'styled-components'
import './section.modules.css'
function Home() {
  return (
   
    <Container>
      <Section />
      <Section />
      <Section />
      <Section />
    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;
`