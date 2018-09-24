import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import Block from '../components/block/block'
import Category from '../components/category/category'
import Card from '../components/card/card'

import portrait from '../images/portrait.jpeg'
import studio18 from '../images/studioeighteen.png'
import godaddy from '../images/godaddy.jpg'
import molsoft from '../images/molsoft.png'
import sqzee from '../images/sqzee.jpg'

import './styles/index.css'

const IndexPage = () => (
   <Layout>
      <Block width="100vw" height="300px" bg="#282B34">
         <div className="content">
            <img id="portrait" src={portrait}></img>
            
            <div className="contentText">
               <h3 style={{marginBottom: "10px"}}>Hi, I'm Sam.</h3>
               I'm a full-stack developer and software engineer. I love learning new technologies and taking on challenging work!
            </div>
         </div>
      </Block>

      <Block width="100vw">
         <Category title="Work" />
         <div className="cardRow">
            <Card img={godaddy} company="GoDaddy" position="Software Engineer Intern" time="June 2018 - September 2018"/>
            <Card img={studio18} company="Studio Eighteen" position="Software Engineer Intern" time="June 2017 - September 2017"/>
         </div>

         <div className="cardRow">
            <Card img={sqzee} company="Sqzee" position="Lead Software Engineer" time="November 2016 - February 2018"/>
            <Card img={molsoft} company="MolSoft LLC" position="Software Engineer Intern" time="June 2016 - September 2016"/>
         </div>

         <Category title="Projects" />
         <div className="cardRow">
            <Card img={godaddy} company="GoDaddy" position="Software Engineer Intern" time="June 2018 - September 2018"/>
            <Card img={studio18} company="Studio Eighteen" position="Software Engineer Intern" time="June 2017 - September 2017"/>
         </div>
      </Block>
   </Layout>
)

export default IndexPage
