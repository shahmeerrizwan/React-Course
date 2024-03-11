import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';

function NavScrollExample() {
  return (
    <><Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="#">MSR ECOMMERCE </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">HOME</Nav.Link>
            <Nav.Link href="#action1">ORDER NOW </Nav.Link>
            <Nav.Link href="#action1">PURCHASE</Nav.Link>
            <Nav.Link href="#action3">
              CONTACT
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search" />
          </Form>
          <Button className='btn'>Search</Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br /> 
    <br /> 
    <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.cnn.com/api/v1/images/stellar/prod/211007171916-underscored-surface-laptop-studio-lead-1.jpg?q=w_3014,h_1696,x_0,y_0,c_fill"
            alt="laptop" />
          <Carousel.Caption>
            <h1 style={{color:"white",textShadow:"5px 2px black",fontWeight:"bolder"}}>Surface Laptop </h1>
            <br />
            <br />
            <br />
            <p style={{color:"white",textShadow:"4px 0px grey",fontWeight:"bolder",wordSpacing:"5px"}}> NEW YEAR SELL SAVE UPTO 40% .</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.macrumors.com/t/SuHt0iQuSjaO-ExOZzJieONGf_I=/2500x/article-new/2023/09/iPhone-15-Pro-Lineup-Feature.jpg"
            alt="Second slide" />
          <Carousel.Caption>
            <h1 style={{color:"white",textShadow:"5px 2px black",fontWeight:"bolder"}}>I-PHONE 15 PRO MAX </h1>
            <br />
            
            <br />
            <p style={{color:"white",textShadow:"4px 0px grey",fontWeight:"bolder",wordSpacing:"5px"}}>NEW YEAR SELL SAVE UPTO 40% .</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2023_25/3611887/230620-smart-tvs-oo-2x1.jpg"
            alt="Third slide" />
          <Carousel.Caption>
            <h1 style={{color:"white",textShadow:"5px 2px black",fontWeight:"bolder"}}>TCL LCD </h1>
            <br />
            <br />
            <br />
            <p style={{color:"white",textShadow:"4px 0px grey",fontWeight:"bolder",wordSpacing:"5px"}}>
            NEW YEAR SELL SAVE UPTO 40% .
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel></>

  );
}

export default NavScrollExample;