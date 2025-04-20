import Footer from '../Footer';
import Header from '../header/Header';

const HelpSupportPage = () => {

  return (
    <div className='helpSupportMainWrapper'>
      <Header />
        <div className='helpSupportHeader'>
          <h1>How Can We Help You?</h1>
          <input type="text" placeholder='Search your keyword here...' />
        </div>
        <main>
          <section>
            <div>
              <h1><i className="fa-solid fa-phone"></i></h1>
              <b>Give us a call</b>
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ratione numquam commodi quo molestiae, blanditiis, veniam neque</h5>
              <h6>Lorem ipsum dolor sit</h6>
            </div>
            <div>
              <h1><i className="fa-solid fa-inbox"></i></h1>
              <b>Email us</b>
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ratione numquam commodi quo molestiae, blanditiis, veniam neque</h5>
              <h6>Lorem ipsum dolor sit</h6>
            </div>
            <div>
              <h1><i className="fa-brands fa-facebook-f"></i></h1>
              <b>Visit us on Facebook</b>
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ratione numquam commodi quo molestiae, blanditiis, veniam neque</h5>
              <h6>Lorem ipsum dolor sit</h6>
            </div>
          </section>
          <div className="helpSupportCommonQuestionWrapper">
            <div>
              <div>
                <h5>Lorem ipsum dolor sit amet adipisicing elit. Pariatur ratione numquam commodi quo molestiae</h5>
                <i class="fas fa-chevron-down"></i>
              </div>
              <div>
                <h5>Lorem ipsum dolor sit consectetur adipisicing elit. Pariatur ratione numquam commodi quo molestiae</h5>
                <i class="fas fa-chevron-down"></i>
              </div>
              <div>
                <h5>Lorem adipisicing elit. Pariatur ratione numquam commodi quo molestiae</h5>
                <i class="fas fa-chevron-down"></i>
              </div>
              <div>
                <h5>Lorem ipsum dolor sit  consectetur adipisicing elit. Pariatur ratione numquam commodi quo molestiae</h5>
                <i class="fas fa-chevron-down"></i>
              </div>
              <div>
                <h5>Lorem ipsum dolor consectetur adipisicing elit. Pariatur ratione numquam commodi quo molestiae</h5>
                <i class="fas fa-chevron-down"></i>
              </div>
              <div>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ratione numquam commodi quo molestiae</h5>
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
          </div>
          <div className="helpSupportEmployeeWrapper">
            <div>
              <h2>Didn't find your answer?</h2>
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ratione numquam commodi quo molestiae</h5>
            </div>
            <div>
              <div>
                <img src="https://cdn.pixabay.com/photo/2018/02/21/08/40/woman-3169726_1280.jpg" alt="Employee" />
                <p>Employee name</p>
                <h5>Lorem ipsum</h5>
              </div>
              <div>
                <img src="https://cdn.pixabay.com/photo/2018/04/05/09/32/portrait-3292287_1280.jpg" alt="Employee" />
                <p>Employee name</p>
                <h5>Lorem ipsum</h5>
              </div>
              <div>
                <img src="https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721_1280.jpg" alt="Employee" />
                <p>Employee name</p>
                <h5>Lorem ipsum</h5>
              </div>
              <div>
                <img src="https://cdn.pixabay.com/photo/2015/03/03/20/42/man-657869_1280.jpg" alt="Employee" />
                <p>Employee name</p>
                <h5>Lorem ipsum</h5>
              </div>
              <div>
                <img src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg" alt="Employee" />
                <p>Employee name</p>
                <h5>Lorem ipsum</h5>
              </div>
              <div>
                <img src="https://cdn.pixabay.com/photo/2014/11/03/17/50/man-515518_1280.jpg" alt="Employee" />
                <p>Employee name</p>
                <h5>Lorem ipsum</h5>
              </div>
            </div>
          </div>
        </main>
        <Footer />
    </div>
  )
}

export default HelpSupportPage;