
// import { require } from 'browserify';

import '../styles/Carousel.css'

export default function Carousel() {
    return (
        <div>
            <ul id="carousel-list">
                <li><img src={require("../images/main-image-portrait.jpg")} alt="first" /></li>
                <li><img src={require("../images/main-image.jpg")} alt="second" /></li>
                <li><img src={require("../images/main-image-portrait.jpg")} alt="third" /></li>
                <li><img src={require("../images/main-image-portrait.jpg")} alt="first" /></li>
                <li><img src={require("../images/main-image.jpg")} alt="second" /></li>
                <li><img src={require("../images/main-image-portrait.jpg")} alt="third" /></li>
                <li><img src={require("../images/main-image-portrait.jpg")} alt="first" /></li>
                <li><img src={require("../images/main-image.jpg")} alt="second" /></li>
                <li><img src={require("../images/main-image-portrait.jpg")} alt="third" /></li>
                <li><img src={require("../images/main-image-portrait.jpg")} alt="first" /></li>
                <li><img src={require("../images/main-image.jpg")} alt="second" /></li>
                <li><img src={require("../images/main-image-portrait.jpg")} alt="third" /></li>
            </ul>
        </div>
    )
}