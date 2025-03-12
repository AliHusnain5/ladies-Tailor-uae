import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from '@mui/material';
import Button from '@mui/material/Button';
import { FiGitCommit } from 'react-icons/fi';
import photo from './images/89c1a2795d3da3831ae17dd04476358d.jpg';
import photo1 from './images/OIP (6).jpeg';
import photo3 from './images/cc0fb30d6568bbbee35a46a2fbf5cb91.jpg';
import photo4 from './images/OIP (7).jpeg';
import photo5 from './images/boys-tshirt-and-trousers-designed-by-elbha.jpeg';
import photo6 from './images/R (4).jpeg';
import './Talor.css';

const NextTwo = () => {
  const isSmallScreen = useMediaQuery('(max-width:1250px)');
  const isVerySmallScreen = useMediaQuery('(max-width:800px)');
  const isMobile = useMediaQuery('(max-width:480px)');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : isVerySmallScreen ? 2 : isSmallScreen ? 3 : 4,
    slidesToScroll: 1,
    cssEase: 'linear',
  };

  return (
    <div
      className="next-two-container"
      data-aos="flip-left"
      data-aos-duration="2000" 
      
      style={{width:"95%"}}
    >
      <div className="content-container" style={{
        // width:"1200px"
        }}>
        <center>
          <div>
            <h2 className="title">What we offer at Ladies Tailor Dubai</h2>
            <p>
              <FiGitCommit style={{ width: '40px', height: '40px' }} />
            </p>
            <p className="description">
              Ladies Tailor Dubai – At Ladies Tailor Dubai by Elbha Tailoring, we
              offer exquisite
              <br />
              craftsmanship and personalized tailoring, ensuring each client
              receives a bespoke
              <br />
              garment that seamlessly blends style and comfort. Our commitment is
              to elevate
              <br />
              your wardrobe with unparalleled elegance, making every outfit a
              reflection of your
              <br />
              individuality.
            </p>
          </div>
          <div className="slider-container">
            <Slider {...settings}>
              <div className="slick-slide">
                <Card className="card" style={{}}>
                  <CardMedia
                    sx={{ height: 300 }}
                    image={photo}
                    title="T-shirts"
                    style={{ height: '420px' 
                    }}
                  />
                  <CardContent className="card-content">
                    <Typography gutterBottom variant="h5" component="div" id='font'>
                      Fabric
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              <div className="slick-slide">
                <Card className="card">
                  <CardMedia
                    sx={{ height: 300 }}
                    image={photo1}
                    title="Saree-Blouses"
                    style={{ height: '420px' }}
                  />
                  <CardContent className="card-content">
                    <Typography gutterBottom variant="h5" component="div" id='font'>
                      Embroidered Georgette
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              <div className="slick-slide">
                <Card className="card">
                  <CardMedia
                    sx={{ height: 300 }}
                    image={photo3}
                    title="Belly-Dance-Costume Stitching"
                    style={{ height: '420px' }}
                  />
                  <CardContent className="card-content">
                    <Typography gutterBottom variant="h5" component="div" id='font'>
                      Anarkali Shalwar Kameez
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              <div className="slick-slide">
                <Card className="card">
                  <CardMedia
                    sx={{ height: 300 }}
                    image={photo4}
                    title="Kids Traditional Wear"
                    style={{ height: '420px' }}
                  />
                  <CardContent className="card-content">
                    <Typography gutterBottom variant="h5" component="div" id='font'>
                      Best-IN-bEST
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              <div className="slick-slide">
                <Card className="card">
                  <CardMedia
                    sx={{ height: 300 }}
                    image={photo5}
                    title="Boys T-shirt and Trousers"
                    style={{ height: '420px' }}
                  />
                  <CardContent className="card-content">
                    <Typography gutterBottom variant="h5" component="div" id='font'>
                      Boys T-shirt and Trousers
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              <div className="slick-slide">
                <Card className="card">
                  <CardMedia
                    sx={{ height: 300 }}
                    image={photo6}
                    title="Dresses for Girls"
                    style={{ height: '420px' }}
                  />
                  <CardContent className="card-content">
                    <Typography gutterBottom variant="h5" component="div" id='font'>
                      Embroidered
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </Slider>
          </div>
        </center>
      </div>
      <Button
        variant="contained"
        color="success"
        className="cta-button"
        style={{ marginTop: '70px', borderRadius: '40px' }}
      >
        See our services
      </Button>
    </div>
  );
};

export default NextTwo;
