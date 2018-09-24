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
import foodbuddy from '../images/foodbuddy.png'
import mario from '../images/mario.png'
import nfldb from '../images/nfldb.png'
import physicssim from '../images/physicssim.png'
import movielist from '../images/movielist.png'

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
            <Card img={godaddy} title="GoDaddy" description="Software Engineer Intern" time="June 2018 - September 2018"/>
            <Card img={studio18} title="Studio Eighteen" description="Software Engineer Intern" time="June 2017 - September 2017"/>
         </div>

         <div className="cardRow">
            <Card img={sqzee} title="Sqzee" description="Lead Software Engineer" time="November 2016 - February 2018"/>
            <Card img={molsoft} title="MolSoft LLC" description="Software Engineer Intern" time="June 2016 - September 2016"/>
         </div>

         <Category title="Projects" />
         <div className="cardRow">
            <a href="https://github.com/FoodBuddyApp/FoodBuddy">
               <Card img={foodbuddy} title="FoodBuddy" description="Recipe search engine" time="September 2017 - May 2018"/>
            </a>
            <a href="https://github.com/snayerman/SpriteGen">
               <Card img={mario} height="200px" title="SpriteGen" description="A.I. Sprite Generator" time="August 2017 - November 2017"/>
            </a>
         </div>

         <div className="cardRow">
            <a href="https://cdn.rawgit.com/OrangeJewc/PhysicsSim/e88378b6/main.html#">
               <Card img={physicssim} title="Physics Simulator" description="JavaScript physics simulator" time="February 2017"/>
            </a>
            <a href="https://snayerman.github.io/NFLDatabase/">
               <Card img={nfldb} title="NFL Database" description="Dynamic NFL Database" time="December 2016"/>
            </a>
         </div>

         <div className="cardRow">
            <a href="https://github.com/snayerman/MovieListFront">
               <Card img={movielist} title="Movie List App" description="Angular Movie List App" time="October 2017"/>
            </a>
         </div>
      </Block>
   </Layout>
)

export default IndexPage
