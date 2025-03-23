import React, { useEffect } from "react";
import { FiGitCommit } from "react-icons/fi";
import { Card, CardContent, Typography } from "@mui/material";
import "./Talor.css";
import Button from "@mui/material/Button";
import Aos from "aos";
import "aos/dist/aos.css";


const NextEight = () => {
  useEffect(() => {
    Aos.init();
  }, [1000]);

  return (
    <div className="section-eight-our-news">
      <div>
        <h1>Our News</h1>
        <p>
          <FiGitCommit style={{ height: "40px", width: "40px" }} />
        </p>
        <p style={{ opacity: "0.5" }}>
          Keep an eye on this section as we regularly update tips and tricks
          related to tailoring, providing you with valuable insights and
          inspiration for enhancing your style and making informed fashion
          choices.
        </p>
      </div>
      <div className="card-container-div">
        <Card className="card-div" data-aos="flip-up" data-aos-duration="2000">
          <CardContent className="card-content-div">
            <Typography gutterBottom variant="h5" component="div">
              <h4>The elegance of Pleated...</h4>
              <p>Regarding timeless fashion staples,the pleated</p>
            </Typography>
          </CardContent>
        </Card>
        <Card className="card-div" data-aos="flip-up" data-aos-duration="2000">
          <CardContent className="card-content-div">
            <Typography gutterBottom variant="h5" component="div">
              Embroidered
            </Typography>
          </CardContent>
        </Card>
        <Card className="card-div" data-aos="flip-up" data-aos-duration="2000">
          <CardContent className="card-content-div">
            <Typography gutterBottom variant="h5" component="div">
              Embroidered
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div>
        <Button variant="contained" color="success" style={{marginTop:"20px"}}>
          Success
        </Button>
      </div>
    </div>
  );
};

export default NextEight;
