import { Grid } from '@material-ui/core';
import { GitHub, LinkedIn } from '@material-ui/icons';
import React from 'react'
import "./Cards.css";

function Cards() {
  return (
    <Grid container direction="row">
        <Grid item xs={2}>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="our-team">
          <div className="picture">
            <img className="img-fluid" src="https://i.imgur.com/wt7UemZ.png"/>
          </div>
          <div className="team-content">
            <h3 className="name">Alexandre</h3>
            <h4 className="title">Web Developer</h4>
          </div>
          <ul className="social redes-sobre-nos">
            <li><a href="https://github.com/Terra-da-Gente" target="_blank">
                        <LinkedIn className="redes-sobre-nos" />
                </a>
            </li>
            <li>                    
                <a href="https://github.com/Terra-da-Gente" target="_blank">
                        <GitHub className="redes-sobre-nos" />
                </a>
            </li>
          </ul>
        </div>
      </div>
      </Grid>
      <Grid item xs={2}>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="our-team">
          <div className="picture">
            <img className="img-fluid" src="https://i.imgur.com/F1QfUzU.png"/>
          </div>
          <div className="team-content">
            <h3 className="name">Daniel</h3>
            <h4 className="title">Web Developer</h4>
          </div>
          <ul className="social">
          <li><a href="https://github.com/Terra-da-Gente" target="_blank">
                        <LinkedIn className="redes-sobre-nos" />
                </a>
            </li>
            <li>                    
                <a href="https://github.com/Terra-da-Gente" target="_blank">
                        <GitHub className="redes-sobre-nos" />
                </a>
            </li>
          </ul>
        </div>
      </div>
      </Grid>
      <Grid item xs={2}>
        <div className="our-team">
          <div className="picture">
            <img className="img-fluid" src="https://i.imgur.com/SaAp6Zo.png"/>
          </div>
          <div className="team-content">
            <h3 className="name">Gustavo</h3>
            <h4 className="title">Web Developer</h4>
          </div>
          <ul className="social">
          <li><a href="https://github.com/Terra-da-Gente" target="_blank">
                        <LinkedIn className="redes-sobre-nos" />
                </a>
            </li>
            <li>                    
                <a href="https://github.com/Terra-da-Gente" target="_blank">
                        <GitHub className="redes-sobre-nos" />
                </a>
            </li>
          </ul>
        </div>
        </Grid>
      <Grid item xs={2}>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="our-team">
          <div className="picture">
            <img className="img-fluid" src="https://i.imgur.com/WtctWE7.png"/>
          </div>
          <div className="team-content">
            <h3 className="name">Letícia Zuniga</h3>
            <h4 className="title">Web Developer</h4>
          </div>
          <ul className="social">
          <li><a href="https://www.linkedin.com/in/leticia-zuniga/" target="_blank">
                        <LinkedIn className="redes-sobre-nos" />
                </a>
            </li>
            <li>                    
                <a href="https://github.com/LeZuniga" target="_blank">
                        <GitHub className="redes-sobre-nos" />
                </a>
            </li>
          </ul>
        </div>
      </div>
      </Grid>
      <Grid item xs={2}>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="our-team">
          <div className="picture">
            <img className="img-fluid" src="https://i.imgur.com/O6TWCF8.png"/>
          </div>
          <div className="team-content">
            <h3 className="name">Mateus Nogueira</h3>
            <h4 className="title">Web Developer</h4>
          </div>
          <ul className="social">
          <li><a href="https://github.com/Terra-da-Gente" target="_blank">
                        <LinkedIn className="redes-sobre-nos" />
                </a>
            </li>
            <li>                    
                <a href="https://github.com/Terra-da-Gente" target="_blank">
                        <GitHub className="redes-sobre-nos" />
                </a>
            </li>
          </ul>
        </div>
        </div>
        </Grid>
      <Grid item xs={2}>
        <div className="our-team">
          <div className="picture">
            <img className="img-fluid" src="https://i.imgur.com/jnVoxIU.png"/>
          </div>
          <div className="team-content">
            <h3 className="name">Tainã</h3>
            <h4 className="title">Web Developer</h4>
          </div>
          <ul className="social">
          <li><a href="https://github.com/Terra-da-Gente" target="_blank">
                        <LinkedIn className="redes-sobre-nos" />
                </a>
            </li>
            <li>                    
                <a href="https://github.com/Terra-da-Gente" target="_blank">
                        <GitHub className="redes-sobre-nos" />
                </a>
            </li>
          </ul>
        </div>
  </Grid>
  </Grid>
  )
}

export default Cards