import React from "react";
import "./index.css";

function AboutMe(){
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
            <div class="col-sm-8">
            <h3 class="myskills">EXPERIENCES</h3><br />
            <h5 class="myskills"><li>PROCESS ENGINEER</li></h5>
            <p class="skills">6 Months (April 2021 to September 2021) experience in HIYA TECH SOLUTION, Madurai</p>
            <h5 class="myskills"><li>CUSTOMER SUPPORT EXECUTIVE</li></h5>
            <p class="skills">8 Months (July 2019 to March 2020) experience in SUN BUSINESS SOLUTION, Chennai</p>
            </div></div><br /><br/>
            <div class="row">
            <div class="col-sm-6">
            <h3 class="myskills">BIO DATA</h3><br/>
                <table class="table table-dark table-bordered">
                <thead><tr><th>Date of Birth</th><td>17.11.1997</td></tr>
                       <tr><th>Gender </th><td>Female</td></tr>                
                       <tr><th>Nationality </th><td>Indian</td></tr>
                       <tr><th>Religion </th><td>Hindu</td></tr>
                       <tr><th>Linguistic proficiency </th><td>Tamil, English</td></tr>
                       <tr><th>Hobbies </th><td>Painting, Cooking, Watching TV</td></tr>
                       <tr><th>Marital Status </th><td>Single</td></tr>
                </thead></table>
            </div></div></div>
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


export default AboutMe;
