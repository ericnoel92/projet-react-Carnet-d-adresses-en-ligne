import React from "react";
import Banniere from '../components/Banniere';
import Cards from '../components/Cards';
import { data } from "../data";
import '../css/pages/home.css';
import image_acceuil from '../img/image_accueil.jpg';

function Home() {
    return (
        <div className='container'>
            <Banniere imgSrc={image_acceuil} imgAlt="montagne verte et brune à côté d'un plan d'eau pendant la journée" pageType="home" />
            <p className='banniere-text'>Chez vous, partout et ailleurs</p>
            <div className='background-home'>
                <Cards locations={data}/>
            </div>
        </div>
    )
}

export default Home