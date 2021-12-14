import React from "react";
import "./index.css";

function Home(){
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
            <div class="col-sm-4">
            <div class="rounded-circle">
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEVRh98qxCbwQ/profile-displayphoto-shrink_800_800/0/1634542850076?e=1645056000&v=beta&t=uuY5fY2dc8IIiSCiWPG0gkSFd1Cw2ijW0MXkEl_lngY"
                 class="rounded-circle mx-auto d-block" alt="gayathri"
                 width="130px" height="150px" />
            </div><br/>
            </div>
            <div class="col-sm-8">
            <h2 class="myskills">Career Objective</h2><br />
            <p class="skills">Seeking a challenging and progressive career using my inner strength, professional skills and practical thinking to gain future exposure, strengths and experiences.</p>
            </div>
            </div>
            <br/>
            <div class="row">
            <div class="col-sm-6">
            <h2 class="myskills">Technical Skills</h2><br />
            <ol class="skills" type="1">
                <li>Frond End Languages - React JS, JavaScript, HTML, CSS, Bootstrap</li>
                <li>Back End Languages - Node JS, PHP(Beginner Level)</li>
                <li>Databases - MySql, MongoDB</li>
            </ol></div><br />
            <div class="col-sm-6">
            <h2 class="myskills">Certificates</h2><br />
            <ol class="skills" type="1">
                <li>Finished React JS training through Linkedin</li>
                <li>Completed Web Development on Internsala</li>
                <li>Completed MySql and Python on Guvi training</li>
            </ol></div></div><br/>
            <div class="container">
            <div class="row">
            <h2 class="myskills">Education Details</h2>
            <table class="table table-dark table-striped">
            <thead><tr><th>Degree/Course</th>
                       <th>Institution</th>
                       <th>Board/University</th>
                       <th>Year of Passing</th>
                       <th>Percentage</th>
                    </tr></thead>
            <tbody><tr><td>B.E-CSE</td>
                       <td>PSNA College of Engineering and Technology, Dindigul</td>
                       <td>Anna university</td>
                       <td>2019</td><td>7.16(CGPA)</td></tr>
                       <tr><td>HSC</td>
                       <td>St. Antony’s girls higher secondary school, Madurai</td>
                       <td>Stateboard</td>
                       <td>2015</td><td>90</td></tr>
                       <tr><td>SSLC</td>
                       <td>St. Antony’s girls higher secondary school, Madurai</td>
                       <td>Stateboard</td>
                       <td>2013</td><td>96</td></tr>
            </tbody>
            </table>
            </div></div><br/>
            <div class="row">            
            <div class="col-sm-6">
            <h2 class="myskills">Co-Curricular</h2>
            <table class="table table-dark table-striped">
            <thead><tr><th>Technical Events</th><th>Technical Workshops</th></tr></thead>
            <tbody><tr><td>Yotta</td>
                       <td>Ethical hacking, Cloud</td></tr>
                       <tr><td>Yugam</td>
                       <td>IOT using RaspberryPi</td></tr>
                       <tr><td>Techuthsav</td>
                       <td>Machine Learning, Talk with ALEXA</td></tr>
            </tbody>
            </table> </div></div></div>
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


export default Home;
