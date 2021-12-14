import React from "react";
import "./index.css";

class Contact extends React.Component{
    constructor(){
        super();
        this.state={subject:"",body:""};
    }
validateForm= event =>{
    var subject=document.getElementById("subject").value;
    var body=document.getElementById("body").value;
    window.location.href="mailto:gayathrialagar55@gmail.com?subject="+subject+"&body="+body;
    event.preventDefault();
    return false;
   }
render(){
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
            </div></div><br />
            <div class="heading">
           <div class="container" id="mailme"><div class="row">
           <div class="col-md-6 offset-sm-3">
        <form class="justify-content-center" onSubmit={this.validateForm} target="_blank" method="GET">
        <div class="form-group form-group-lg">
        <label class="skills" for="subject">
            <strong style={{color:"white"}}>Name</strong>
        </label>
            <input type="text" id="subject" class="form-control" required />
        </div>
        <div class="form-group form-group-lg">
        <label class="skills" for="body">
            <strong style={{color:"white"}}>Feedback</strong>
        </label>
            <textarea id="body" class="form-control" row="5" required />
        </div>
            <input type="submit" value="send" id="navigation" class="btn btn-primary" />
        </form>
        </div>
        </div></div>
        </div><br/><br/>
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
}

export default Contact;
