import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Home({services}) {
  return (
    <div>

    
    <div className='sli'>
        <Carousel data-bs-theme="dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://demo.creativemox.com/wavedesign/wp-content/uploads/sites/4/2023/09/working-together-with-girls-create-the-perfect-design.jpg"
        alt="First slide"
        style={{height:"790px"}}
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://demo.creativemox.com/wavedesign/wp-content/uploads/sites/4/2023/09/a-woman-in-a-clothing-store-chooses-a-t-shirt-buying-summer-clothes-shopping-.jpg"
        alt="Second slide"
        style={{height:"790px"}}
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://demo.creativemox.com/wavedesign/wp-content/uploads/sites/4/2023/09/male-worker-using-the-printing-machine-in-a-workshop.jpg"
        alt="Third slide"
        style={{height:"790px"}}
      />
    </Carousel.Item>
  </Carousel>
    <div>
        <div className='par'>
          <h2>Welcome to Dos Bros Brandos</h2>
    <div>
				<div>
			<h1 className='fa9ra'>Effortlessly Craft and Personalize T-shirt Designs of Your Own.</h1>		
      </div>
				</div>
                <p>DBB is a T.U.N website. All offers are based on TND. International exchange rates will be applied</p>
                <button>Get Started Now  </button>
    </div>
    
    </div>
    <div className='all'>
      <div className='lawla'>
          <img src='/9lamm.png'></img>
          <h1>Easy to Create & Customize</h1>
          <p>Unlock your creative potential without the hassle, and tailor your experience with our brand to effortlessly bring your ideas to life</p>
      </div>
      <div className='thenya'>
      <img src='/jsp.png'></img>
          <h1>Premium Quality T-shirt</h1>
          <p>Indulge in the epitome of comfort and style with our premium quality T-shirts. Crafted with meticulous attention to detail</p>
      </div>
      <div className='theltha'>
      <img src='/jjj.png'></img>
          <h1>Competitive Product Pricing</h1>
          <p>At our brand, we pride ourselves on offering competitive product pricing that ensures you get the best value for your money</p>
      </div>
    </div>
    </div>
    <div>
      <h1 style={{fontSize:"34px" , marginTop:"80px" , textAlign:"center" , width:"800px" ,marginLeft:"260px" , fontWeight:"600"}}>Let's find the service that's right for you</h1>
      <h1 style={{fontSize:"14px" , textAlign:"center" , width:"800px" ,marginLeft:"260px"}}>
      Our brand sets the standard for unparalleled services, delivering a seamless and personalized experience that goes beyond expectations. From prompt customer support to innovative solutions, we are committed to ensuring your satisfaction at every touchpoint.
      </h1>

      <div className='services' style={{display:"flex", flexWrap:"wrap"}}> 
        {services.map((el)=>  <Card style={{ width: '18rem' , margin:"4px"}}>
      <Card.Img variant="top" src={el.Url} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
       {el.paragraph}
        </Card.Text>
  
      </Card.Body>
    </Card>)}
    </div>
    </div>
    
    




















    </div>
  )
}

export default Home









