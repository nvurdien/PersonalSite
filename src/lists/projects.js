import summit from '../images/summit.jpg';
import acm from '../images/acm.jpg';
import university from '../images/universitydatabase.png';
import cppcamp from '../images/cppcamp.png';
import gamemaster from '../images/gamemaster.png';
import webdevworkshop from '../images/webdevworksho.png'

export default [
    {
        image: summit,
        title: 'CSUF ECS Summit Website',
        blurb: 'A website created for the ECS Leadership and Diversity Summit at CSUF',
        code: 'summit',
        body: '<header>\n' +
        '\t\t\t\t\t\t\t\t\t<h2>ECS Leadership and Diversity Summit Website</h2>\n' +
        '\t\t\t\t\t\t\t\t\t<p>\n' +
        '\t\t\t\t\t\t\t\t\t\t<a href=http://summit.ecs.fullerton.edu/ target="_blank">Click to see the site</a><BR>\n' +
        '\t\t\t\t\t\t\t\t\t\t<a href=https://github.com/nvurdien/ecssummitwebsiteReactApp target="_blank">Click to see the Github</a>\n' +
        '\t\t\t\t\t\t\t\t\t</p>\n' +
        '\t\t\t\t\t\t\t\t</header>\n' +
        '\t\t\t\t\t\t\t\t<p>\n' +
        '                                    I designed website with one other person using UIkit, CSS, HTML, PHP, ReactJS and Javascript. I created a website for a joint club event under ACM-W and ACM. I used UIkit and HTML and CSS to design the site. I followed our university\'s ATI compliance rules for the site. I also incorporated React components to create the site.\n' +
        '\t\t\t\t\t\t\t\t</p>'
    },
    {
        image: webdevworkshop,
        title: 'Web Development Workshop',
        blurb: 'A website created to teach people how to use CSS/HTML/Javascript',
        code: 'webdevworkshop',
        body: '<header>\n' +
        '\t\t\t\t\t\t\t\t\t<h2>Web Development Workshop</h2>\n' +
        '\t\t\t\t\t\t\t\t\t<p>\n' +
        '<a href="https://nvurdien.github.io/webdev-workshop/">Click to see the site</a>' +
        '\t\t\t\t\t\t\t\t\t\t<a href=https://github.com/nvurdien/webdev-workshop target="_blank">Click to see the Github</a>\n' +
        '\n' +
        '\t\t\t\t\t\t\t\t\t</p>\n' +
        '\t\t\t\t\t\t\t\t</header>\n' +
        '\t\t\t\t\t\t\t\t<p>\n' +
        'This is a workshop I created using the Contrast Jekyll template to teach HTML, CSS and Javascript and how to build a personal site on github.' +
        '\t\t\t\t\t\t\t\t</p>'
    },
    {
        image: acm,
        title: 'CSUF ACM Website',
        blurb: 'A website created for the ACM Club at CSUF',
        code: 'acm',
        body: '<header>\n' +
        '\t\t\t\t\t\t\t\t\t<h2>Association for Computing Machinery Club at California State University, Fullerton Website</h2>\n' +
        '\t\t\t\t\t\t\t\t\t<p>\n' +
        '\t\t\t\t\t\t\t\t\t\t<a href=http://acm.ecs.fullerton.edu/ target="_blank">Click to see the site</a><BR>\n' +
        '\t\t\t\t\t\t\t\t\t\t<a href=https://github.com/nvurdien/acmwebsite/ target="_blank">Click to see the Github</a>\n' +
        '\t\t\t\t\t\t\t\t\t</p>\n' +
        '\t\t\t\t\t\t\t\t</header>\n' +
        '\t\t\t\t\t\t\t\t<p>\n' +
        '                                    I designed website with one other person using UIkit, CSS, HTML, PHP, ReactJS and Javascript. It allowed club memebers to easily view events and other information on the site. It increased the professionality which in turn increased interest in the club. We also added contact form functionality to allow members to easily ask questions to the board. The open source program used are FullCalendar to show upcoming events and PHPMailer to implement an emailable contact form into site.\n' +
        '\t\t\t\t\t\t\t\t</p>'
    },
    {
        image: university,
        title: 'University Database',
        blurb: 'Website created to display a SQL database of a university.',
        code: 'uni',
        body: '<header>\n' +
        '\t\t\t\t\t\t\t\t\t<h2>University Database</h2>\n' +
        '\t\t\t\t\t\t\t\t\t<p>\n' +
        '\t\t\t\t\t\t\t\t\t\t<a href=https://universitydatabase.herokuapp.com/ target="_blank">Click to see the site</a><BR>\n' +
        '\t\t\t\t\t\t\t\t\t\t<a href=https://github.com/nvurdien/university-database target="_blank">Click to see the Github</a>\n' +
        '\t\t\t\t\t\t\t\t\t</p>\n' +
        '\t\t\t\t\t\t\t\t</header>\n' +
        '\t\t\t\t\t\t\t\t<p>\n' +
        '\t\t\t\t\t\t\t\t\tContains database file as well as php files for the professors\' and students\' pages\n' +
        '\t\t\t\t\t\t\t\t\tDesigned with bootstrap\n' +
        '\t\t\t\t\t\t\t\t</p>\n' +
        '\t\t\t\t\t\t\t\t<h2>Professors</h2>\n' +
        '\t\t\t\t\t\t\t\t<p>\n' +
        '\t\t\t\t\t\t\t\t\tWith the SSN you can view the classes the professor teaches along with the room, meeting days and time of their class.\n' +
        '\t\t\t\t\t\t\t\t\tWhen inputting a course number and section number you can view how many students got an A, A-, ... etc in the course\n' +
        '\t\t\t\t\t\t\t\t</p>\n' +
        '\t\t\t\t\t\t\t\t<h2>Student</h2>\n' +
        '\t\t\t\t\t\t\t\t<p>\n' +
        '\t\t\t\t\t\t\t\t\tWith the CWID you can view the list of courses the student took as well as the grades in those courses\n' +
        '\t\t\t\t\t\t\t\t\tWith the course number you can view the sections with the classrooms, meeting days, and the times of the class as well as the number of students enrolled in the course.\n' +
        '\t\t\t\t\t\t\t\t</p>\n' +
        '\t\t\t\t\t\t\t\t<h2>Databases</h2>\n' +
        '\t\t\t\t\t\t\t\t<p>\n' +
        '\t\t\t\t\t\t\t\t\t\tIf you go to /databases.php or open the databases php file it will show all the databases included in our MYSQL.\n' +
        '\t\t\t\t\t\t\t\t\t\tThis will help when you are testing input and output on our site!\n' +
        '\t\t\t\t\t\t\t\t</p>\n' +
        '                                <p>\n' +
        '                                    The original site was using a database on university\'s server, California State University, Fullerton. However, because of storage restrictions I found a free MySQL database hoster online and placed my entries on that database.\n' +
        '                                </p>'
    },
    {
        image: cppcamp,
        title: 'CPP Camp',
        blurb: 'A website created for primarily for AP Computer Science students to learn C++',
        code: 'cppcamp',
        body: '<header>\n' +
        '\t\t\t\t\t\t\t\t\t<h2>CPP Camp Website</h2>\n' +
        '\t\t\t\t\t\t\t\t\t<p>\n' +
        '\t\t\t\t\t\t\t\t\t\t<a href=https://cppcamp.herokuapp.com/ target="_blank">Click to see the site</a><BR>\n' +
        '\t\t\t\t\t\t\t\t\t\t<a href=https://github.com/nvurdien/CPPCamp target="_blank">Click to see the Github</a>\n' +
        '\t\t\t\t\t\t\t\t\t</p>\n' +
        '\t\t\t\t\t\t\t\t</header>\n' +
        '\t\t\t\t\t\t\t\t<p>\n' +
        '\t\t\t\t\t\t\t\t\tI used the Django framework to create a website that focuses on teaching AP computer science students C++. I worked on this project with 4 other students. We utilized the Agile method to create the project in order to practice a software development cycle and to practice creating reports for a future job. I created the javascript algorithms that calculated the scores and also implemented basic elements of the design of the site. I created a simple sqlite database for the site in order to hold all the lessons, quizzes, and tests. I later plan on creating user support so users can compare scores and record their scores. In addition, I learned how to create routes, migrations and models with the python framework, Django.\n' +
        '\t\t\t\t\t\t\t\t</p>'
    },
    {
        image: gamemaster,
        title: 'Game Master',
        blurb: 'A console application that contains three games in C++',
        code: 'gamemaster',
        body: '<header>\n' +
        '\t\t\t\t\t\t\t\t\t<h2>Game Master</h2>\n' +
        '\t\t\t\t\t\t\t\t\t<p>\n' +
        '\t\t\t\t\t\t\t\t\t\t<a href=https://github.com/nvurdien/Game-Master target="_blank">Click to see the Github</a>\n' +
        '\n' +
        '\t\t\t\t\t\t\t\t\t</p>\n' +
        '\t\t\t\t\t\t\t\t</header>\n' +
        '\t\t\t\t\t\t\t\t<p>\n' +
        '\t\t\t\t\t\t\t\t\tA game keeper that contains three games in C++ which also had an option for the user to choose from a card guessing game, number guessing game and Nim game. A standard console application created in my Object Oriented Programming class. The main focus was to master classes in C++.\n' +
        '\t\t\t\t\t\t\t\t\tCoded and compiled in Visual Studio 2015.\n' +
        '\t\t\t\t\t\t\t\t</p>'
    }
]