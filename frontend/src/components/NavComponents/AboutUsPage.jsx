import '../../style/navComponents.css';
import Header from '../header/Header';

const AboutUsPage = () => {

  return (
    <>
      <Header />
      <div className='aboutUsPageMainWrapper'>
        <div className='aboutUsHeaderText'>
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className='aboutUsWhatWeDoWrapper'>
          <div>
            <div>
              <img src="https://cdn.pixabay.com/photo/2019/08/08/16/54/cpu-4393375_1280.jpg" alt="Image" />
              <img src="https://cdn.pixabay.com/photo/2020/03/30/22/18/ryzen-4985643_1280.jpg" alt="Image" />
            </div>
            <div>
              <img src="https://cdn.pixabay.com/photo/2019/05/31/16/01/cpu-4242470_1280.jpg" alt="Image" />
              <img src="https://cdn.pixabay.com/photo/2019/08/08/16/54/cpu-4393376_1280.jpg" alt="Image" />
            </div>
          </div>
          <div>
            <h2>Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec diam nec
              ipsum ultrices commodo. Nullam eget purus vel sem placerat facilisis. Curabitur
              sollicitudin, sem ut euismod vulputate, urna sapien rutrum sapien, ac convallis
              arcu mauris a magna. Sed volutpat, justo vel pulvinar dapibus, turpis justo
              efficitur ante, et pretium felis nulla nec justo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec diam nec
              ipsum ultrices commodo. Nullam eget purus vel sem placerat facilisis. Curabitur
              sollicitudin, sem ut euismod vulputate, urna sapien rutrum sapien, ac convallis
              arcu mauris a magna. Sed volutpat, justo vel pulvinar dapibus, turpis justo
              efficitur ante, <strong>et pretium felis nulla nec justo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec diam nec
              ipsum ultrices commodo.</strong>
            </p>
          </div>
        </div>

        <div>
          <h2 style={{ textAlign: 'center', padding: '20px' }}>Our Projects</h2>
          <div className='aboutUsProjectsWrapper'>
            <div className='boutUsProject'>
              <b>Project Title</b>
              <p><b>Lorem ipsum dolor sit amet</b> consectetur adipiscing elit. Praesent nec diam nec
                ipsum ultrices commodo. Nullam eget purus vel sem placerat facilisis. Curabitur
                sollicitudin, sem ut euismod vulputate, urna sapien rutrum sapien, ac convallis
                arcu mauris a magna.
              </p>
              <small>Lorem ipsum dolor sit amet</small>
            </div>
            <div className='boutUsProject'>
              <b>Project Title</b>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec diam nec
                ipsum <b>Lorem ipsum dolor sit amet</b> purus vel sem placerat facilisis. Curabitur
                sollicitudin, sem ut euismod vulputate, urna sapien rutrum sapien, ac convallis
                arcu mauris a magna.
              </p>
              <small>Lorem ipsum dolor sit amet</small>
            </div>
            <div className='boutUsProject'>
              <b>Project Title</b>
              <p><b>Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit. Praesent nec diam nec
                ipsum ultrices commodo. Nullam eget purus vel sem placerat facilisis. Curabitur
                sollicitudin, sem ut euismod vulputate, urna sapien rutrum sapien, ac convallis
                arcu mauris a magna.
              </p>
              <small>Lorem ipsum dolor sit amet</small>
            </div>
          </div>
        </div>

        <div className='aboutUsTeamWrapper'>
          <h2>Meet the Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nisl ac dolor
            tincidunt fermentum. Vivamus commodo ante ut ex vestibulum cursus. Etiam nec
            malesuada ligula, et blandit elit. Aenean at ex eu metus consectetur bibendum.
            Phasellus accumsan metus ut elit vehicula, nec finibus orci laoreet.
          </p>
          <div className='aboutUsMemberMainWrapper'>
            {/* Member */}
            <div className='aboutUsMemberWrapper'>
              <div className='aboutUsMemberShadow'></div>
              <div className='aboutUsMember'>
                <img src="https://cdn.pixabay.com/photo/2020/02/04/16/41/business-suit-4818747_1280.jpg" alt="Member" />
                <h4>Member Name</h4>
                <p>Position</p>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nisl ac dolor
                  tincidunt fermentum.</h5>
              </div>
            </div>
            {/* Member */}
            <div className='aboutUsMemberWrapper'>
              <div className='aboutUsMemberShadow'></div>
              <div className='aboutUsMember'>
                <img src="https://cdn.pixabay.com/photo/2017/05/19/12/40/beard-2326422_1280.jpg" alt="Member" />
                <h4>Member Name</h4>
                <p>Position</p>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nisl ac dolor
                  tincidunt fermentum.</h5>
              </div>
            </div>
            {/* Member */}
            <div className='aboutUsMemberWrapper'>
              <div className='aboutUsMemberShadow'></div>
              <div className='aboutUsMember'>
                <img src="https://cdn.pixabay.com/photo/2023/05/10/05/56/groom-7983097_1280.jpg" alt="Member" />
                <h4>Member Name</h4>
                <p>Position</p>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nisl ac dolor
                  tincidunt fermentum.</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;