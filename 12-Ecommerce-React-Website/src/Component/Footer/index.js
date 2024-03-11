// eslint-disable-next-line no-unused-vars
// import Carousel from 'react-bootstrap/Carousel';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
  return (<footer>
    <br />


    <br /><br /><br /><br />
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none justify-content-center d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/profile.php?id=100087591455419' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>

          <a href='https://github.com/shahmeerrizwan/' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='https://www.instagram.com/_i_am_shahmeer/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://www.linkedin.com/in/muhammadshahmeerrizwan/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='https://github.com/shahmeerrizwan/' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                MSR
              </h6>
              <p>
                Muhammad Shahmeer Rizwan, the Visionary Founder and Maker of the E-commerce Website, has Redefined the Online Shopping Experience with his Innovative Approach and Entrepreneurial Spirit. Embarked on a Journey to Create a Platform that Seamlessly Connects Buyers and Sellers.

              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  CARS
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  BIKES
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  FURNITURE
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  HOUSE
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                KARACHI PAKISTAN , 17-JAN-2024
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                shahmeerrizwan921@.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +92 3243217819
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +92 3243217819
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright: MSR
        <a className='text-reset fw-bold' href='https://muhammadshahmeerrizwan@bloogspot.com/'>

        </a>
      </div>
    </MDBFooter>




  </footer>
  )
}

export default Footer;