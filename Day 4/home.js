import React, { Component } from 'react';
import Nav from './Nav';
import Cards from '../card';
import Slider from '../carcard';
import TopPicks from './topPicks';
import ToolSlider from '../toolscard';
import PlantSlider from '../plant';
import Organic from '../organic';
import DecorSlider from '../decorcard';
const Home = ()=>
{
    return(
        <div>
            <Nav></Nav>
            {/* <Cards></Cards> */}
            <TopPicks></TopPicks>
            <Slider></Slider>
            <ToolSlider></ToolSlider>
            <PlantSlider></PlantSlider>
            <Organic></Organic>
            <DecorSlider></DecorSlider>
        </div>
    )
}

export  default Home;