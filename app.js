//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "Hey, I am Md Riyazul Islam, and Welcome to my personal blog. This website is mainted and was made by me. It's a pleasure that audience like you all are enjoying in reading my blogs that are created by me from scratch. I am a web developer, a competitive programmer and sports nerd. I am an aspiring engineering student in Aligarh Muslim University (graduating in 2025) and apart from these I am a technophile and a geek. I have a deep interest in software field and try to develop using different technologies, projects and experiments.If you like my projects and want to support me you can also do that by following me on various platforms like Instagram, Twitter and Linkedln.To know more about me and my blogs continue reading....";

const aboutMyself = "I spent a lot of my time of my life in Bhagalpur, Bihar, India where I completed my primary education and high school. I studied in Mount Assisi School from Nursery to 10th (2019 passout batch) and then from 11th to 12th (2021 passout batch). At this time my main interest area include Mathematics, Physics, Chemistry and Biology.On further by moving age I got an interest in Technology sector especially software field. Apart from these my another residence also includes my parental home in Murshidabad near Farraka in West Bengal in India. Currently I live with my parents and my younger brother in Bhagalpur.";

const moreaboutMe = "Okay to know more about me you visit the About Me section in the navbar and if you want to contact me you can also do that my visiting the Contact Me section in the navbar menu and if you want to give your feedback on anything that relates to me you can do so going in the Feedback section. Apart from these you can personally visit in my college or in Bhagalpur.So thanks for your time.........ENJOY  READING....."

const aboutContent = "Like told earlier and by this point you know my name and a lot of other stuff. So this page deals with other stuffs about me like my education, my skills , my hoobies and other things and suggestions in making this website will be highly appreciated and encouraged.";

const skills = "By this time you all know that I am a technophile having a deep intrest in Software field and Development. As an example taking this website, its not like that I haven't build projects on web development but its my first dynamic responsive website that is build by me and is mainted by me. Speaking about my skills and interests they include Competitive Programing, Web Development, Algorithm Designing and Machine Learning and apart from these my non-technical skills include cooking, playing sports and painting. With these I am an obident and punctual guy. I know how to manage time and continue the balance of work and life and separately I know how to manage pressure. My one of the biggest weakness is that I do every work with perfection and besides this I am a quick learner. "

const hobbies = "Besides learning, in my spare time I give time to my hobbies like watching sports such as football , watching movies (which include some of my best directors' movies like Steven Spilberg and James Cameroon), reading sci-fic novels mostly of Jules Verne like Twenty-Thousand Leagues under the Sea and Journey To the Centre of The Earth.Apart from these I like to hangout with my friends in my free time and also I am a music lover. "


const contactContent = "Since I am a very extrovert person you all can contact or reach me out various platforms like Instagram , Linkedln and Twitter. At the bottom of the page, there are somr anchor tags of different platforms if you want to reach me out. Apart from these you can also email me on my email address which is riyazulislam2003@gmail.com. ";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let posts = [];

app.get("/", function(req, res){
    res.render("home", {

      startingContent: homeStartingContent,
      myselfContent : aboutMyself,
      things: moreaboutMe,
      posts: posts

    });


});

app.get("/about", function(req, res){
    res.render("about", {
      aboutContent: aboutContent,
      skill: skills,
      hobby: hobbies,

    });

});

app.get("/contact", function(req, res){
    res.render("contact", {contactContent: contactContent});

});

app.get("/compose", function(req, res){
    res.render("compose");

});

app.post("/compose", function(req, res){

    const post = {
      title:req.body.postTitle,
      content:req.body.postBody
    };

    posts.push(post);

    res.redirect("/");

});

app.get("/posts/:postName", function(req, res){
 const requestedTitle = req.params.postName;

   posts.forEach(function(post){
      const storedTitle = post.title;

      if(storedTitle === requestedTitle){
        console.log("Match found");
      }
      else{
        console.log("Not a match");
      }

   });

});









app.listen(3000, function() {
  console.log("Server started on port 3000");
});
