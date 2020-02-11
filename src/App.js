import React from 'react';
import { Grid, Paper, Typography} from '@material-ui/core';
import './App.css'
import Dashboard from './Dashboard.js'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Timeline } from 'react-twitter-widgets'
import campaignDataGif from './campaign-data.gif';
import reviewSageGif from './reviewsage.gif';
import interactGif from './recording.gif';

const App = () => {
  return (
    <div>
      <Router basename="/" hashType="slash">
        <Switch>
          <Route path="/campaign-data-app">
            <Dashboard />
          </Route>
          <Route path="/">
            <Grid container component={Paper} elevation={3} className="webmdee-card">
              <Grid item xs={12}>
                <p>Hello there!</p>
                <p>My name's <span>Mark Dhillon</span>, &amp; I'm an engineer.</p>
                <p>
                  <a href="https://s3-us-west-1.amazonaws.com/webmdee/Mark+Dhillon's+CV+(2019).pdf">C.V.</a>, <a href="https://www.github.com/mdee">GitHub</a>, &amp; <a href="https://www.linkedin.com/in/webmdee">LinkedIn</a>.
                </p>
              </Grid>
            </Grid>
            <Grid container component={Paper} elevation={3} className="webmdee-card">
              <Grid item xs={6} style={{textAlign: "left"}}>
                <Typography variant="h5">
                  Visualizing 2020 Campaign Data
                </Typography>
              </Grid>
              <Grid item xs={6} style={{textAlign: "right"}}>
                <Typography variant="h6">
                  02/10/20
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <p>
                  As a way to learn React and refamiliarize myself with Django, I made <Link to="/campaign-data-app">this interactive tool</Link>.
                </p>

                <p>
                  It visualizes data from Google's <a href="https://transparencyreport.google.com/political-ads/region/US">Transparency Report on Political Advertising</a>, and also data about invididual donations through Q3 2019 to candidates from <a target="_blank" rel="noopener noreferrer" href="https://www.fec.gov/data/browse-data/?tab=bulk-data">fec.gov</a>
                </p>

                <p>
                  Why did I do this? For starters, I have long been interested in designing interfaces, and building interactive data visualizations. I used to pretty much exclusively write web apps, but for the past ~5 years I've spent most of my time in embedded code land (alongside some Python & MATLAB).</p>
                <p>
                  In fact, back when I was keeping up with web apps, there was a spirited debate about which framework to use: Angular, Ember, or React. At the time, I chose Ember.
                </p>
                <p>
                  I think it's safe to say that React won <span role="img" aria-label="haha-emoji">😂</span>.
                </p>

                <p>
                  So, this app came out of a desire to learn something new (React) and play around with some interface design and data visualization (which I am always game for). The data required a bit of preprocessing, but it was a fun challenge that gave me some time with the following:
                </p>

                <ul>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://www.djangoproject.com/">Django</a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://www.django-rest-framework.org/">Django REST Framework</a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="http://recharts.org/">Recharts</a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">React</a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://material-ui.com/">Material UI</a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://d3js.org/">d3</a> (scale, scale-chromatic, time, time-format)</li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://www.postgresql.org/">Postgre SQL</a></li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div style={{textAlign: 'center'}}>
                  <img src={campaignDataGif} style={{display: "block", maxWidth: "95%", height: "auto", margin: "0 auto"}} alt="Recording of campaign data app interaction"/>
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div>The tool allows you to explore how many Google ad campaigns each of the 6 major Democratic candidates have been running this election cycle. Each ad has the following attributes:</div>
                <ul>
                  <li>A spend range (less than $100, $100 - $1000, etc.)</li>
                  <li>An impressions range (10K, 1M, etc.)</li>
                  <li>A date range during which it was served</li>
                  <li>The type of ad it was (text, image, video)</li>
                </ul>
                <p>
                  The use case that I had in mind was for somebody who is working on one of these campaigns to be able to compare ad strategies to competitors. For funsies, I also added in the ability to see individual donations as reported by the FEC. It's interesting to look at ad surges as well as how each campaign combines the different kinds of ads. Here's one anecdote:
                </p>
                <ul>
                  <li>Joe Biden announced his campaign for president on 4/25/19. The data shows he immediately began running around ~40 ad campaigns concurrently in the early going, almost all of them inexpensive text ads. As the months continued, that number halved until it dropped to 0 on 10/21/19</li>
                  <li>On 10/24/19, he reversed his earlier position and <a href="https://www.cnn.com/2019/10/23/politics/joe-biden-fundraising-super-pac/index.html">signaled an openness</a> to accepting Super PAC support</li>
                  <li>On 10/25/19, a Super PAC <a href="https://www.cnn.com/2019/10/29/politics/joe-biden-ally-launches-super-pac/index.html">was formally launched</a> to support him</li>
                  <li>On 11/07/19, 106(!) ads began running concurrently, all of them video. He wasn't kidding about using Super PAC dollars!</li>
                </ul>
                <p>
                  This was fun for me to build. The backend is deployed on a free Heroku tier, and the front end is served up via Github Pages. Here's the source code for the <a href="https://github.com/mdee/bernie_backend">backend</a> & <a href="https://github.com/mdee/webmdee-react">frontend</a>.
                </p>
              </Grid>
            </Grid>
            <Grid container component={Paper} elevation={3} className="webmdee-card">
              <Grid item xs={6}>
                <div style={{textAlign: "left"}}>
                <Typography variant="h5">ReviewSage</Typography>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div style={{textAlign: "right"}}>
                  <Typography variant="h6">03/04/15</Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <p><b>TL;DR</b> Raised $$ for app after graduating, <strike>here's a demo</strike>.</p>
                <div>
                  In my final semester before completing a Computer Science Master's degree @ UW Madison, I took a
                  course taught by Professors Remzi Arpaci-Dusseau and Paul Barford on Software
                  Entrepreneurship. The purpose of the course was to examine processes and case studies to transform ideas into
                  successful businesses, as well as to create a working prototype of an idea and present it at the
                  end of the course.<br/>
                  At the time, I had been focusing on mining information from text (through
                  work with Professor Michael Gleicher) and trying to visualize the data with <a
                    href="http://d3js.org/">D3</a>. That work, combined with the class project lead me to create
                  ReviewSage.<br/>
                  <p><b>ReviewSage was made to harness the wisdom trapped in Yelp reviews, quickly.</b></p>
                  I worked on hard on the prototype, and my efforts were rewarded with a rare opportunity: Great
                  Oaks Venture Capital was willing to provide me with some seed funding to develop ReviewSage into a
                  business. You can play around with a representative version <strike>here</strike>,
                  or watch the animation to get the gist.<br/>
                  The <strike>live app</strike> demonstrates
                  what ReviewSage was originally intended for: giving consumers quick answers about Yelp reviews.
                  After submitting a URL, ReviewSage looks for commonly used phrases and shows you the spread of
                  ratings when people use those phrases.
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div style={{textAlign: 'center'}}>
                  <img src={reviewSageGif} style={{display: "block", maxWidth: "100%", height: "auto", margin: "0 auto"}} alt="Recording of ReviewSage app interaction"/>
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div>
                  <p>At the time, I was preparing to join a start-up somewhere in CA. Then I got a message from
                    Professor Barford saying that I could start my own.</p>
                  <p><b>Getting $$ to start a business around my idea was too tempting to pass up.</b></p>
                  After incorporating the business, I decided to position it as a B2B app: businesses could use my
                  software to keep up with their online presence. That seemed like a good idea at the time.
                  In the end, it didn't work out. However, I'm very pleased with the experience I gained from
                  taking on such a challenge. I spent 1.5 years chasing this dream, and I think I came out
                  ahead.
                  <p>
                  I was able to take a project that I cared about and raise seed funding to start a business. I
                  received a lot of great guidance from my Professors, as well as Andy Boszhardt and John
                    Philosophos from Great Oaks.</p>
                  I was able to hire an engineer to work with me, and his experience helped him secure a job at a
                  premier start-up in Madison now. I was able to get the largest restaurant group in Madison to
                  become a beta tester and eventually a paying customer, and also raised a subsequent round.
                  ReviewSage even got some <a href="http://www.isthmus.com/isthmus/article.php?article=41117">local press</a>.
                  <p>Things don't always work out the way you hope. But that's ok; life's too short to dwell on the
                    past. The future? Now that's exciting.</p>
                </div>
              </Grid>
            </Grid>
            <Grid container component={Paper} elevation={3} className="webmdee-card">
              <Grid item xs={6}>
                <div style={{textAlign: "left"}}>
                  <Typography variant="h5">Expense Logging</Typography>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div style={{textAlign: "right"}}>
                  <Typography variant="h6">01/15/15</Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <p>
                  I recently found out about <a href="http://interactjs.io/">interact.js</a> and came away very impressed.
                  You might even say that my <a href="https://www.youtube.com/watch?v=k4t8KisRznQ">mind was blown</a>.
                </p>
                <div>It's a fantastic Javascript libary which takes away <span
                  style={{textDecoration: "line-through"}}>a lot</span> all of the pain for drag-and-drop, resizing, and
                  multi-touch gestures (all with <a href="https://www.youtube.com/watch?v=7COUk5eh6jY">inertia</a>) for
                  browsers over IE8. That's huge!
                </div>
                <p>
                  <b>In the endless debate over developing web vs native, <a
                    href="http://interactjs.io/">interact.js</a> is a panacea for web apps to support gestures and
                    touch-screen interactions.
                  </b>
                </p>
                <div>
                  Most of the time when I see a new library spring up, I'll leave it open in a tab or maybe even
                  bookmark it to check later (if it seems cool, of course). Not this time. This time I wanted to
                  start using the new hotness right away. I had just come out of my first start-up (relatively) unscathed, and as a consequence of that
                  experience I was regularly tracking my expenses to see where my money was going.</div>
                <p>Along the way, I kicked around ideas about what I'd like to see from an expense tracking app, and
                  once I saw <a href="http://interactjs.io/">interact.js</a>, I decided to make it happen. You can see a
                  gif of the finished product on this page, or <strike>play around with it
                    yourself</strike>.</p>

              </Grid>
              <Grid item xs={12} sm={4}>
                <div style={{textAlign: 'center'}}>
                  <img src={interactGif} style={{display: "block", maxWidth: "100%", height: "auto", margin: "0 auto"}} alt="Recording of expense management app interaction"/>
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <p>The app uses localStorage to keep track of what you've entered after you close
                  it, and also supports generating an email of your data in CSV form. That means any data you enter <b>lives
                    on your device alone</b>, but supports exporting if you feel so inclined.</p>
                <p>I ended up using a few different gestures from interact.js:</p>
                <ul style={{fontWeight: 300, margin: "10px"}}>
                  <li><b>Double-tapping</b> to minimize a new expense so it can dragged to the proper account.</li>
                  <li><b>Dragging</b> a new expense into the proper account.</li>
                  <li><b>Pressing and holding</b> a new expense to toggle between showing a place to describe the
                    transaction (e.g. 'Coffee')
                  </li>
                </ul>
                <p><b>I'd recommend interact.js for anybody wanting to integrate gestures for a web-app.</b>
                </p>
                <p>The examples and API documentation are all solid; it only took me a couple hours to get the gestures
                  that I wanted working consistently.</p>
                <p>Since it's a relatively new library, there's not a whole lot of answers online if something doesn't
                  work as expected. Sometimes though, it's nice not having Stack Overflow as a crutch.</p>
              </Grid>
            </Grid>
            <Grid container component={Paper} elevation={3} className="webmdee-card">
              <Grid item xs={6}>
                <div style={{textAlign: "left"}}>
                  <Typography variant="h5">Gary Busey Clips + Twitter</Typography>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div style={{textAlign: "right"}}>
                  <Typography variant="h6">01/13/15</Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <p>
                  Gary Busey is an <a href="http://en.wikipedia.org/wiki/Gary_Busey#Awards_and_nominations">accomplished actor</a>, and also seems to be a <a href="https://www.youtube.com/watch?v=TkYt0unokRM">funny guy</a>.
                  I haven't kept up with any of his later career, beyond knowing that he's done some reality TV shows and sells "<a href="http://garybusey.com/gary_busey_buseyisms.html">Busey-isms</a>" online.
                </p>
                <p>
                  I have, however, seen him act in quite a few movies, and I'm pretty sure that I enjoyed his roles. Point Break, Black Sheep…those are all good in my book. His recent TV commericals for Amazon also make me laugh a lot.</p>
                <p>One day, I decided to look up clips of his movie roles on YouTube. It turns out that there are a lot of them, and the prevailing reason for that seems to be that the uploaders find these clips hilarious, weird, or both.</p>
                <p><b>So there are a bunch of goofy clips available on the internet, and Twitter is a thing so...yes, that's right. Let's make a Twitter bot to spread the Gospel of Gary (Busey).</b></p>
                <p><a href="http://twitter.com/buseybot">BuseyBot</a> is a Django app using <a href="https://github.com/tweepy/tweepy">tweepy</a>. At different times of day, it looks for folks talking about Gary Busey and sends one of them a juicy Busey movie clip.</p>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div>
                  <Timeline
                    dataSource={{
                      sourceType: 'profile',
                      screenName: 'buseybot'
                    }}
                    options={{
                      username: 'UniversalSerialBusey',
                      height: '450'
                    }}
                  />
                </div>
              </Grid>
            </Grid>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};


export default App;
