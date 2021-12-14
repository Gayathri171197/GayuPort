import React from "react";
import "./index.css";

function Project(){
        return(
          <body>
            <div class="heading">
            <div class="jumbotron text-center" id="heading">
            <h1 class="myname">GAYATHRI.A</h1>
            <h3 class="myoccupation">B.E-Computer Science and Engineering</h3><br/><br/>
            <ul class="nav nav-pills nav-justified" id="navigation">
            <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/aboutme">AboutMe</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/project">Project</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/contact">Contact</a>
            </li>
            </ul>
            </div></div>
            <div class="container">
            <div class="row">
            <h3 class="myskills">OWN PROJECT</h3><br/><br/>
            <table class="table table-dark table-striped">
            <thead><tr><th>PROJECT NAME</th>
                       <th>LANGUAGES</th>
                       <th>TITLE</th></tr>
                    </thead>
            <tbody><tr><td>Responsive Website using React JS</td>
                       <td>React JS, Node JS, JavaScript, HTML, CSS, Bootstrap</td>
                       <td><a href="https://react-q68tif.stackblitz.io/" target="_blank">Portfolio</a></td></tr>
                    <tr><td>Beginner Website </td>
                       <td>HTML, CSS, Bootstrap</td>
                       <td><a href="https://gayathri171197.github.io/Ecommerce/" target="_blank">Ecommerce</a></td></tr>
                    <tr><td>Simple Website</td>
                       <td>HTML, CSS</td>
                       <td><a href="https://gayathri171197.github.io/Sample-Website/" target="_blank">Sample Website</a></td></tr>
            </tbody></table></div><br /><br/>
            <div class="row">
            <h3 class="myskills">ACADEMIC PROJECT</h3><br/><br/></div>
            <div class="row">
            <h5 class="myskills">EFFECTIVE CAR PARKING FOR PUBLIC COMMERCIAL BUILDINGS</h5></div>
            <div class="row">
            <div class="col-sm-4">
            <h6 class="myskills">Hardware Requirements</h6>
            <ul class="skills">
                <li>Arduino UNO</li>
                <li>Arduino NANO</li>
                <li>Ultrasonic Sensor</li>
                <li>PIR Sensor</li>
                <li>Bluetooth</li>
            </ul></div><br />
            <div class="col-sm-4">
            <h6 class="myskills">Software Requirements</h6>
            <ul class="skills" >
                <li>Arduino IDE 1.8.8</li>
                <li>Android</li>
            </ul></div></div></div>
            <div class="jumbotron text-center" id="footer">
            <ul class="nav justify-content-center">
            <li class="nav-item">
                <a href="https://www.linkedin.com/" class="fa fa-linkedin nav-link" style={{color:"blue"}} />
            </li>
            <li class="nav-item">
                <a href="https://www.github.com/" class="fa fa-github nav-link" style={{color:"yellow"}} />
            </li>
            <li class="nav-item">
                <a href="https://www.instagram.com/" class="fa fa-instagram nav-link" style={{color:"pink"}} />
            </li>
            <li class="nav-item">
                <a href="https://www.twitter.com/" class="fa fa-twitter nav-link" style={{color:"green"}} />
            </li>
            <li class="nav-item">
                <a href="https://www.facebook.com/" class="fa fa-facebook nav-link" style={{color:"blue"}} />
            </li>
            </ul>
            </div>
            </body>
        );
    }


export default Project;
