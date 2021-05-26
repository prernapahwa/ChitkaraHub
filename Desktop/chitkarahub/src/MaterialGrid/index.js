import React from "react";
//import { Button } from "@progress/kendo-react-buttons";
import { FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaFireAlt, FaStar, FaSeedling } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const styles = {
  paper: {
    padding: "2vw",
    textAlign: "center",
    color: "#000000",
    whiteSpace: "nowrap",
    background: "#eeeee4", //
    marginTop: "2vh",
    marginBottom: "2vh"
  },

  butt: {
    color: "white",
    background: "black",
    shadowColor: "2px2px2px2px"
    //borderWidth: "1",
    //backgroundColor:'#68a0cf'
  },
  lim: {
    border: "0px"
  },
  new: {
    color: "white",
    background: "#cfb015",
    border: "0px"
  },
  popular: {
    color: "white",
    background: "#85081d",
    border: "0px"
  },
  social: {
    color: "white",
    background: "#08631a",
    border: "0px"
  },
  text: {
    textAlign: "left",
    marginLeft: "350px",
    marginTop: "40px",
    marginBottom: "40px",
    letterSpacing: "0.1rem"
  },
  text2: {
    textAlign: "left",
    marginLeft: "350px",

    letterSpacing: "0.2rem"
  }
};
const useStyles = makeStyles(styles);

export const MaterialGrid = () => {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.text2}>
        <b>CUIET Clubs</b>
      </h1>

      <h5 className={classes.text}>
        Hey Chitkarians, I think most of your college life is well going, by now
        you might have got some good friends and explored Chitkara as well.{" "}
        <br />
        As your Chitkara life goes on, you might be feeling some enjoyment
        missing. So here is the list of clubs and chapters in Chitkara.
        <br /> To get into these clubs, there will be different requirements to
        match the qualifications of the clubs. There will be a lot of positions{" "}
        <br />
        in these clubs to get into such as:
        <br />
        <p>
          • Technical <br />• Design <br />• Management <br />• Editorial
          <br />
        </p>
        <br />
        <b>How to join clubs in Chitkara?</b>
        <br />
        <br />
        <p>
          In order to get a position in your favorite clubs, there is a
          recruitment process for each club that you have to go through.
          <br /> Every clubs have their own recruitment process . Some have
          interview rounds followed by a group discussion round, or <br />
          some other task related to the domain will be given which has to be
          done depending upon the position and the nature of the club.
          <br /> In order to participate in the recruitment process of any club
          all you have to do is fill up the recruitment form provided on the
          Instagram <br />
          handle of the club and further instructions related to the process
          will be communicated to you by the club through WhatsApp or mail.
        </p>
        <br />
        <br />
        <b>
          But how would you come to know that which clubs and chapters match
          your interests?
        </b>
        <br />
        <br />
        Chitkara Hub is here to help you through this. Here is the list of all
        the clubs and chapters along with their Instagram handles, <br />
        organized into categories just to make things easier for you. So brush
        up your skills and be ready to show everyone what you've got!
        <br />
        <br />
        <button className={classes.popular}>
          <FaStar />
          <b> POPULAR </b>
        </button>
        -Well established and renowned club
        <br />
        <br />
        <button className={classes.social}>
          <FaFireAlt />
          <b> SOCIAL </b>
        </button>
        -Clubs with good social media presence
        <br />
        <br />
        <button className={classes.new}>
          <FaSeedling />
          <b> NEW</b>
        </button>
        -New budding club / society
      </h5>

      <Grid container spacing={4} justify="center">
        <div>
          <Grid item xs={20}>
            <Paper className={classes.paper}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://www.linkedin.com/company/ieee";
                  }}
                >
                  <FaLinkedinIn />
                </button>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://instagram.com/ieeeciet?utm_medium=copy_link";
                  }}
                >
                  <FaInstagram />
                </button>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://mail.google.com/mail/u/0/#inbox";
                  }}
                >
                  <FaEnvelope />
                </button>
              </div>
              <b>IEEE </b>
              <br />
              IEEE is the world's largest proffesional organization dedicated to{" "}
              <br />
              advancing technological innovation and excellence for the benifit
              of humanity.
              <br />
              <button
                className={classes.butt}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://forms.gle/hz5YaSjiKL3aGGna8";
                }}
              >
                JOIN NOW
              </button>
              <br />
              <br />
              <button className={classes.popular}>
                <FaStar />
                <b> POPULAR </b>
              </button>
              <button className={classes.social}>
                <FaFireAlt />
                <b> SOCIAL </b>
              </button>
            </Paper>
          </Grid>

          <Grid item xs={20}>
            <Paper className={classes.paper}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://www.linkedin.com/company/dsc-ciet/";
                  }}
                >
                  <FaLinkedinIn />
                </button>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://instagram.com/dsc_ciet?utm_medium=copy_link";
                  }}
                >
                  <FaInstagram />
                </button>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://mail.google.com/mail/u/0/#inbox";
                  }}
                >
                  <FaEnvelope />
                </button>
              </div>
              <b>DSC</b>
              <br />
              Developer Student Clubs are university-based community groups for
              students interested in Google developer technologies. <br />
              Students from all undergraduate or graduate programs with an
              interest in growing as a developer are welcome.
              <br />
              <button
                className={classes.butt}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://forms.gle/hz5YaSjiKL3aGGna8";
                }}
              >
                JOIN NOW
              </button>
              <br />
              <br />
              <button className={classes.popular}>
                <FaStar />
                <b> POPULAR </b>
              </button>
              <button className={classes.social}>
                <FaFireAlt />
                <b> SOCIAL </b>
              </button>
            </Paper>
          </Grid>

          <Grid item xs={20}>
            <Paper className={classes.paper}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://www.linkedin.com/in/ieicsecuiet";
                  }}
                >
                  <FaLinkedinIn />
                </button>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://instagram.com/ieiciet?utm_medium=copy_link";
                  }}
                >
                  <FaInstagram />
                </button>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://mail.google.com/mail/u/0/#inbox";
                  }}
                >
                  <FaEnvelope />
                </button>
              </div>
              <b>IEI</b>
              <br />
              IE(I) Student Chapter is a statutory body of engineers to promote
              and advance <br />
              engineering and technology throughout the country.
              <br />
              <button
                className={classes.butt}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://forms.gle/hz5YaSjiKL3aGGna8";
                }}
              >
                JOIN NOW
              </button>
              <br />
              <br />
              <button className={classes.popular}>
                <FaStar />
                <b> POPULAR </b>
              </button>
              <button className={classes.social}>
                <FaFireAlt />
                <b> SOCIAL </b>
              </button>
            </Paper>
          </Grid>
          <Grid item xs={20}>
            <Paper className={classes.paper}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://www.linkedin.com/company/codechef-cuiet";
                  }}
                >
                  <FaLinkedinIn />
                </button>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://instagram.com/codechef_cuiet?utm_medium=copy_link";
                  }}
                >
                  <FaInstagram />
                </button>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://mail.google.com/mail/u/0/#inbox";
                  }}
                >
                  <FaEnvelope />
                </button>
              </div>
              <b>CODECHEF</b>
              <br />
              Brings a Competitive Programming culture on campus. <br />
              help students become better problem solvers fostering learning ans
              proffesional development
              <br />
              <button
                className={classes.butt}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://forms.gle/hz5YaSjiKL3aGGna8";
                }}
              >
                JOIN NOW
              </button>
              <br />
              <br />
              <button className={classes.new}>
                <FaSeedling />
                <b> NEW</b>
              </button>
              <button className={classes.popular}>
                <FaStar />
                <b> POPULAR </b>
              </button>
              <button className={classes.social}>
                <FaFireAlt />
                <b> SOCIAL </b>
              </button>
            </Paper>
          </Grid>
          <Grid item xs={20}>
            <Paper className={classes.paper}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className={classes.lim}>
                  <FaLinkedinIn />
                </button>
                <button className={classes.lim}>
                  <FaInstagram />
                </button>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://mail.google.com/mail/u/0/#inbox";
                  }}
                >
                  <FaEnvelope />
                </button>
              </div>
              <b>ACM</b>
              <br /> Chitkara ACM student chapter is one of the best chapters
              across the country. <br />
              We conduct workshops, expert talks,coding competitions and much
              more.
              <br />
              <button
                className={classes.butt}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://forms.gle/hz5YaSjiKL3aGGna8";
                }}
              >
                JOIN NOW
              </button>
              <br />
              <br />
              <button className={classes.popular}>
                <FaStar />
                <b> POPULAR </b>
              </button>
              <button className={classes.social}>
                <FaFireAlt />
                <b> SOCIAL </b>
              </button>
            </Paper>
          </Grid>

          <Grid item xs={20}>
            <Paper className={classes.paper}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className={classes.lim}>
                  <FaLinkedinIn />
                </button>
                <button className={classes.lim}>
                  <FaInstagram />
                </button>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://mail.google.com/mail/u/0/#inbox";
                  }}
                >
                  <FaEnvelope />
                </button>
              </div>
              <b>CURIN</b>
              <br />
              Chitkara University Research and Innovation Network <br />
              <button
                className={classes.butt}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://forms.gle/hz5YaSjiKL3aGGna8";
                }}
              >
                JOIN NOW
              </button>
              <br />
              <br />
              <button className={classes.popular}>
                <FaStar />
                <b> POPULAR </b>
              </button>
              <button className={classes.social}>
                <FaFireAlt />
                <b> SOCIAL </b>
              </button>
            </Paper>
          </Grid>

          <Grid item xs={20}>
            <Paper className={classes.paper}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className={classes.lim}>
                  <FaLinkedinIn />
                </button>
                <button className={classes.lim}>
                  <FaInstagram />
                </button>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://mail.google.com/mail/u/0/#inbox";
                  }}
                >
                  <FaEnvelope />
                </button>
              </div>
              <b>ECELL</b>
              <br />
              At E-Cell, we aim to provide both graduate and undergraduate a
              preffered ecosystem to dicover the enterpreneur within.
              <br />
              We provide platform for individual to develop leadership skills,
              art of managing events,social development and interaction.
              <br />
              <button
                className={classes.butt}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://forms.gle/hz5YaSjiKL3aGGna8";
                }}
              >
                JOIN NOW
              </button>
              <br />
              <br />
              <button className={classes.popular}>
                <FaStar />
                <b> POPULAR </b>
              </button>
            </Paper>
          </Grid>
          <Grid item xs={20}>
            <Paper className={classes.paper}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className={classes.lim}>
                  <FaLinkedinIn />
                </button>
                <button className={classes.lim}>
                  <FaInstagram />
                </button>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://mail.google.com/mail/u/0/#inbox";
                  }}
                >
                  <FaEnvelope />
                </button>
              </div>
              <b>MECBOTS</b>
              <br />
              Mechbots focuses on making chitkara students more cpmetititve and
              well prepares in the era of globalization.
              <br />
              It focuses on mechanical and robotic knowledge. <br />
              <button
                className={classes.butt}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://forms.gle/hz5YaSjiKL3aGGna8";
                }}
              >
                JOIN NOW
              </button>
              <br />
              <br />
              <button className={classes.popular}>
                <FaStar />
                <b> POPULAR </b>
              </button>
            </Paper>
          </Grid>
          <Grid item xs={20}>
            <Paper className={classes.paper}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className={classes.lim}>
                  <FaLinkedinIn />
                </button>
                <button className={classes.lim}>
                  <FaInstagram />
                </button>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://mail.google.com/mail/u/0/#inbox";
                  }}
                >
                  <FaEnvelope />
                </button>
              </div>
              <b> C2S2- CUSTODY</b>
              <br />
              <br />
              The official dance club
              <br />
              <button
                className={classes.butt}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://forms.gle/hz5YaSjiKL3aGGna8";
                }}
              >
                JOIN NOW
              </button>
              <br />
              <br />
              <button className={classes.popular}>
                <FaStar />
                <b> POPULAR </b>
              </button>
              <button className={classes.social}>
                <FaFireAlt />
                <b> SOCIAL </b>
              </button>
            </Paper>
          </Grid>
          <Grid item xs={20}>
            <Paper className={classes.paper}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className={classes.lim}>
                  <FaLinkedinIn />
                </button>
                <button className={classes.lim}>
                  <FaInstagram />
                </button>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://mail.google.com/mail/u/0/#inbox";
                  }}
                >
                  <FaEnvelope />
                </button>
              </div>
              <b> C2S2- THE BHANGRA REGIMENT</b>
              <br />
              Cultural Bhangra Club
              <br />
              <button
                className={classes.butt}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://forms.gle/hz5YaSjiKL3aGGna8";
                }}
              >
                JOIN NOW
              </button>
              <br />
              <br />
              <button className={classes.popular}>
                <FaStar />
                <b> POPULAR </b>
              </button>
              <button className={classes.social}>
                <FaFireAlt />
                <b> SOCIAL </b>
              </button>
            </Paper>
          </Grid>
          <Grid item xs={20}>
            <Paper className={classes.paper}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className={classes.lim}>
                  <FaLinkedinIn />
                </button>
                <button className={classes.lim}>
                  <FaInstagram />
                </button>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://mail.google.com/mail/u/0/#inbox";
                  }}
                >
                  <FaEnvelope />
                </button>
              </div>
              <b> C2S2- DHWANI</b>
              <br />
              Cultural singing society
              <br />
              <button
                className={classes.butt}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://forms.gle/hz5YaSjiKL3aGGna8";
                }}
              >
                JOIN NOW
              </button>
              <br />
              <br />
              <button className={classes.new}>
                <FaSeedling />
                <b> NEW</b>
              </button>
              <button className={classes.popular}>
                <FaStar />
                <b> POPULAR </b>
              </button>
              <button className={classes.social}>
                <FaFireAlt />
                <b> SOCIAL </b>
              </button>
            </Paper>
          </Grid>
          <Grid item xs={20}>
            <Paper className={classes.paper}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className={classes.lim}>
                  <FaLinkedinIn />
                </button>
                <button className={classes.lim}>
                  <FaInstagram />
                </button>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://mail.google.com/mail/u/0/#inbox";
                  }}
                >
                  <FaEnvelope />
                </button>
              </div>
              <b> C2S2- Panache</b>
              <br />
              Official Modelling club
              <br />
              <button
                className={classes.butt}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://forms.gle/hz5YaSjiKL3aGGna8";
                }}
              >
                JOIN NOW
              </button>
              <br />
              <br />
              <button className={classes.popular}>
                <FaStar />
                <b> POPULAR </b>
              </button>
              <button className={classes.social}>
                <FaFireAlt />
                <b> SOCIAL </b>
              </button>
            </Paper>
          </Grid>
          <Grid item xs={20}>
            <Paper className={classes.paper}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className={classes.lim}>
                  <FaLinkedinIn />
                </button>
                <button className={classes.lim}>
                  <FaInstagram />
                </button>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://mail.google.com/mail/u/0/#inbox";
                  }}
                >
                  <FaEnvelope />
                </button>
              </div>
              <b> C2S2- Nati</b>
              <br />
              Clutural society for street shows/ Natak
              <br />
              <button
                className={classes.butt}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://forms.gle/hz5YaSjiKL3aGGna8";
                }}
              >
                JOIN NOW
              </button>
              <br />
              <br />
              <button className={classes.popular}>
                <FaStar />
                <b> POPULAR </b>
              </button>
              <button className={classes.social}>
                <FaFireAlt />
                <b> SOCIAL </b>
              </button>
            </Paper>
          </Grid>
          <Grid item xs={20}>
            <Paper className={classes.paper}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className={classes.lim}>
                  <FaLinkedinIn />
                </button>
                <button className={classes.lim}>
                  <FaInstagram />
                </button>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://mail.google.com/mail/u/0/#inbox";
                  }}
                >
                  <FaEnvelope />
                </button>
              </div>
              <b> C2S2- GIDDA</b>
              <br />
              Official Society for Gidda
              <br />
              <button
                className={classes.butt}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://forms.gle/hz5YaSjiKL3aGGna8";
                }}
              >
                JOIN NOW
              </button>
              <br />
              <br />
              <button className={classes.popular}>
                <FaStar />
                <b> POPULAR </b>
              </button>
              <button className={classes.social}>
                <FaFireAlt />
                <b> SOCIAL </b>
              </button>
            </Paper>
          </Grid>
          <Grid item xs={20}>
            <Paper className={classes.paper}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className={classes.lim}>
                  <FaLinkedinIn />
                </button>
                <button className={classes.lim}>
                  <FaInstagram />
                </button>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://mail.google.com/mail/u/0/#inbox";
                  }}
                >
                  <FaEnvelope />
                </button>
              </div>
              <b> C2S2- Theatre</b>
              <br />
              Offiaial Theatre club of Chitkara University
              <br />
              <button
                className={classes.butt}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://forms.gle/hz5YaSjiKL3aGGna8";
                }}
              >
                JOIN NOW
              </button>
              <br />
              <br />
              <button className={classes.new}>
                <FaSeedling />
                <b> NEW</b>
              </button>
              <button className={classes.popular}>
                <FaStar />
                <b> POPULAR </b>
              </button>
              <button className={classes.social}>
                <FaFireAlt />
                <b> SOCIAL </b>
              </button>
            </Paper>
          </Grid>
          <Grid item xs={20}>
            <Paper className={classes.paper}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className={classes.lim}>
                  <FaLinkedinIn />
                </button>
                <button className={classes.lim}>
                  <FaInstagram />
                </button>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://mail.google.com/mail/u/0/#inbox";
                  }}
                >
                  <FaEnvelope />
                </button>
              </div>
              <b> C2S2- Tasveer</b>
              <br />
              Cultural Photography Club
              <br />
              <button
                className={classes.butt}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://forms.gle/hz5YaSjiKL3aGGna8";
                }}
              >
                JOIN NOW
              </button>
              <br />
              <br />
              <button className={classes.popular}>
                <FaStar />
                <b> POPULAR </b>
              </button>
              <button className={classes.social}>
                <FaFireAlt />
                <b> SOCIAL </b>
              </button>
            </Paper>
          </Grid>
          <Grid item xs={20}>
            <Paper className={classes.paper}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className={classes.lim}>
                  <FaLinkedinIn />
                </button>
                <button className={classes.lim}>
                  <FaInstagram />
                </button>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://mail.google.com/mail/u/0/#inbox";
                  }}
                >
                  <FaEnvelope />
                </button>
              </div>
              <b> C2S2- LITERAYLLIS</b>
              <br />
              The Literary CLub
              <br />
              <button
                className={classes.butt}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://forms.gle/hz5YaSjiKL3aGGna8";
                }}
              >
                JOIN NOW
              </button>
              <br />
              <br />
              <button className={classes.new}>
                <FaSeedling />
                <b> NEW</b>
              </button>
              <button className={classes.popular}>
                <FaStar />
                <b> POPULAR </b>
              </button>
              <button className={classes.social}>
                <FaFireAlt />
                <b> SOCIAL </b>
              </button>
            </Paper>
          </Grid>
          <Grid item xs={20}>
            <Paper className={classes.paper}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className={classes.lim}>
                  <FaLinkedinIn />
                </button>
                <button className={classes.lim}>
                  <FaInstagram />
                </button>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://mail.google.com/mail/u/0/#inbox";
                  }}
                >
                  <FaEnvelope />
                </button>
              </div>
              <b> C2S2- NATRAJ</b>
              <br />
              Official Classical Dance club
              <br />
              <button
                className={classes.butt}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://forms.gle/hz5YaSjiKL3aGGna8";
                }}
              >
                JOIN NOW
              </button>
              <br />
              <br />
              <button className={classes.popular}>
                <FaStar />
                <b> POPULAR </b>
              </button>
              <button className={classes.social}>
                <FaFireAlt />
                <b> SOCIAL </b>
              </button>
            </Paper>
          </Grid>
          <Grid item xs={20}>
            <Paper className={classes.paper}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className={classes.lim}>
                  <FaLinkedinIn />
                </button>
                <button className={classes.lim}>
                  <FaInstagram />
                </button>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://mail.google.com/mail/u/0/#inbox";
                  }}
                >
                  <FaEnvelope />
                </button>
              </div>
              <b> NSS</b>
              <br />
              National Servise Scheme
              <br />
              <button
                className={classes.butt}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://forms.gle/hz5YaSjiKL3aGGna8";
                }}
              >
                JOIN NOW
              </button>
              <br />
              <br />
              <button className={classes.popular}>
                <FaStar />
                <b> POPULAR </b>
              </button>
              <button className={classes.social}>
                <FaFireAlt />
                <b> SOCIAL </b>
              </button>
            </Paper>
          </Grid>
          <Grid item xs={20}>
            <Paper className={classes.paper}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://www.linkedin.com/company/iste/";
                  }}
                >
                  <FaLinkedinIn />
                </button>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://www.instagram.com/istechitkara/";
                  }}
                >
                  <FaInstagram />
                </button>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://mail.google.com/mail/u/0/#inbox";
                  }}
                >
                  <FaEnvelope />
                </button>
              </div>
              <b> ISTE</b>
              <br />
              A society where people stand by their brains, skills and
              creativity.
              <br />
              We provide grand platforms to you to show your wonderful worths.
              <br />
              <button
                className={classes.butt}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://forms.gle/hz5YaSjiKL3aGGna8";
                }}
              >
                JOIN NOW
              </button>
              <br />
              <br />
              <button className={classes.popular}>
                <FaStar />
                <b> POPULAR </b>
              </button>
              <button className={classes.social}>
                <FaFireAlt />
                <b> SOCIAL </b>
              </button>
            </Paper>
          </Grid>
          <Grid item xs={20}>
            <Paper className={classes.paper}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className={classes.lim}>
                  <FaLinkedinIn />
                </button>
                <button className={classes.lim}>
                  <FaInstagram />
                </button>
                <button
                  className={classes.lim}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://mail.google.com/mail/u/0/#inbox";
                  }}
                >
                  <FaEnvelope />
                </button>
              </div>
              <b> TOASTMASTERS</b>
              <br />
              Toastmasters is a non-profit educational organization that teaches{" "}
              <br />
              public speaking and leadership skills trough a wordwide network of
              clubs.
              <br />
              <button
                className={classes.butt}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://forms.gle/hz5YaSjiKL3aGGna8";
                }}
              >
                JOIN NOW
              </button>
              <br />
              <br />
              <button className={classes.popular}>
                <FaStar />
                <b> POPULAR </b>
              </button>
              <button className={classes.social}>
                <FaFireAlt />
                <b> SOCIAL </b>
              </button>
            </Paper>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};
