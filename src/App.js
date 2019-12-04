import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import SpeedLinks from './components/SpeedLinks'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
// import logo from './logo.svg';
import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}))

function FullWidthGrid(props) {
  const classes = useStyles()
  console.log(props)

  return (
    <div className={classes.root}>

    </div>
  )
}

function handleGetStarted() {
  console.log('hilleo')
  window.scroll({
    top: window.innerHeight,
    left: 0,
    behavior: 'smooth'
  })
}
function App() {
  return (
    <div className="App">
      <div style={{ textAlign: 'center', height: '100vh', color: '#fff875' }}>
        <div style={{ paddingTop: '40vh' }}>
          <Typography variant="h3" style={{ letterSpacing: 4 }}>Nolan Splan</Typography>
          <Typography varianty="subtitle2">Full Stack Software Developer</Typography>
          <br />
          <small><i>My goal is to deliver intuitive and maintainable software that will help to streamline business processes. </i></small>
          <br />
          <Button onClick={() => handleGetStarted()} id="get-started">Get Started</Button>
        </div>
      </div>
      <section>
        <Container>
          <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Work History</h3>
          <div>
            <b>Rails + React.js Software Developer</b>
            <br />
            <small><i>August 2019 - Present</i></small>
            <p>Responsibilities:</p>
            <ul>
              <li>Create well tested Ruby models and controllers to expose data for consumption by a React.js front end</li>
              <li>Write DRY, readable, and reusable React components to fetch and display data from APIs</li>
              <li>Design and create simple, yet elegant user interfaces to give users the best UX possible</li>
              <li>Implement Capistrano v3 for continuous integration across multiple hosts (staging & production)</li>
              <li>Work on in-house Ruby gem that provides an AR wrapper around a secondary Postgres database</li>
            </ul>
          </div>
          <div>
            <b>Ruby On Rails Software Developer</b>
            <br />
            <small><i>June 2018 - August 2019</i></small>
            <p>Responsibilities:</p>
            <ul>
              <li>Participate in feature design during backlog grooming meetings.</li>
              <li>Implement end-user feature requests with well tested and documented code</li>
              <li>Git branch management across 3 staging hosts and 1 production host</li>
              <li>Integrate with external systems via the use of service objects</li>
              <li>Application maintenance and upgrades during scheduled downtimes</li>
            </ul>
          </div>
          <div>
            <b>Business Analyst & Agile Scrum Master</b>
            <br />
            <small><i>May 2017 - June 2018</i></small>
            <p>Responsibilities:</p>
            <ul>
              <li>Champion and revitalize the company's scrum process</li>
              <li>Coordinate with product owners and developers to streamline business processes for the entire organization</li>
              <li>Schedule and facilitate all scrum related meetings</li>
              <li>Provide regular scrum process enhancements through collaboration with the team</li>
              <li>Application documentation upkeep with every sprint</li>
            </ul>
          </div>

        </Container>
      </section>

      <section>
        <Container>
          <h4>Technical Skills</h4>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <div style={{ flex: 1 }}>
              <h5>Languages:</h5>
              <ul>
                <li>Ruby</li>
                <li>JavaScript</li>
                <li>SQL (Postgresql, MS SQL Server)</li>
                <li>Python</li>

              </ul>
            </div>

            <div style={{ flex: 1 }}>
              <h5>Frameworks:</h5>
              <ul>
                <li>Ruby on Rails</li>
                <li>React.js</li>
                <li>Bootstrap</li>
                <li>Material UI</li>
              </ul>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <div style={{ flex: 1 }}>
              <h5>Platforms:</h5>
              <ul>
                <li>Ruby</li>
                <li>JavaScript</li>
                <li>SQL (Postgresql, MS SQL Server)</li>
                <li>Python</li>

              </ul>
            </div>

            <div style={{ flex: 1 }}>
              <h5>Frameworks:</h5>
              <ul>
                <li>Ruby on Rails</li>
                <li>React.js</li>
                <li>Bootstrap</li>
                <li>Material UI</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section style={{ height: '100vh' }}>
        <Container>
          <h4>Programming Languages</h4>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga quisquam nam voluptas autem. Nemo quaerat incidunt illo labore provident.
            </p>
          </div>
        </Container>
      </section>


      <SpeedLinks />
    </div>
  );
}

export default App;
