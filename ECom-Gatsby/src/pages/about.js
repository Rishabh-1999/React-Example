import React from "react"
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import DualInfoblock from "../components/Reuseable/DualInfoblock"
import Teamphotosection from "../components/About/Teamphotosection"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
      img={data.img.childImageSharp.fluid}
      title="About LearnCodeOnOnline"
      subtitle=""
      heroclass="about-background"
    />
    <DualInfoblock heading="Message From CEO" url="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    <Infoblock heading="About Our Vision" />
    <Teamphotosection />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage
