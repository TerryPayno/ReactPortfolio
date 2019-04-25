import React from 'react';
import './Work.css';

function Work() {
  return (
    <div class="Work">
        <h1>My Work</h1>
        <h2>As I am new to web development I do not have much work to show at the moment but as I am working on new projects in my free time this page will fill out.</h2>
        <body>
        <p>I have experience with multiple programming languages such as HTML/CSS, AngularJS, C#, SQL (MSSQL), ASP.NEt Web API and I also have experience with the Bootstrap framework and GitHub.

I have worked on projects that require object orientated programming and concurrent programming. Involving adding, editing and deleting from databases and real-time computer vision projects running on low powered hardware. 

 

Adobe Certified Associate in Visual Communication Using Adobe Photoshop.

 

I have a good understanding of project management methodologies such as agile and waterfall.</p>
<h2>The Grind Coffee House</h2>
                <div className="youtube">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fCrQKeAZeIU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
<p>
This project was not designed for anything other than being a learning tool for myself.<br/>

​

If you would like to take a look at the project you can visit it here http://jamespayneprojects.co.uk Please remember that this is still a work in progress so will  still have some bugs. I am aware that there is a bug with session expiring which is causing the user object attributes not being set. This bug I am currently attempting to replicate so that I can be sure that the fix I deploy will work.<br/>

 

The project was almost entirely developed in Visual studio community 2017 and Microsoft Server Management Studio. This project is currently being hosted on a Plesk server where all you need to do is create an account by clicking to login button and you will have access to almost all functionality. When you get to the payment screen you can user the test card details provided by Stripe which are.<br/><br/>

​

Card Number: 4242 4242 4242 4242<br/><br/>

Expiry: 04 / 44<br/><br/>

CVC: 444<br/><br/>

 

Frontend: HTML/CSS and AngularJS as I have not done any web development prior to this project this was my biggest hurdle. The HTML and CSS I picked up quick and is relatively easy to get the hang of over the course of a small amount of time. Also working with the Bootstrap framework really did help to get things looking nice alongside some CSS. When I started this project I didn't intend on making it as large as it is now it was going to be a home screen and that was all. After I was done creating the home screen I decided that I was quite enjoying this so I decided to find a language that would provide me with the tools to get some real functionality implemented. I decided on Angularjs and it did not disappoint. I have had a blast learning Angular and can't wait to continue working with this language to see what more it can offer. <br/><br/>

 

Backend: C# and MSSQl having previous experience working with both of these this was an easy choice. While at university I used C# for a majority of projects I quickly picked this language back up which helped a lot when managing my database and working with the multiple API's that I have used to bring this project together. Although with that I have also learnt how to use stored procedures to get information from my database which is something that I have not done before.<br/><br/>

 

API's: for this project, I decided to try Auth0 as it provided me with something new and exciting. In this project user login to the site through the Auth0 lock widget where they are compared to the auth0 database. If they are a user, then they are logged in and this site is provided with a token which can be used to gain access to user information with having it stored in my database. I have also used Stripe to manage taking payments. The same principle applies to this the user would input their card details they are verified by stripe and provide the site with a token. This token can then be used to charge the card for a short amount of time before it expires without needing to store the card details anywhere in storage. I have also bee using the Auth0 management API to manage user metadata. </p>
    </body>
    </div>
  );
}

export default Work;