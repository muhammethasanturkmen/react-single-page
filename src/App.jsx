import img1 from './assets/img/img1.png';
import img2 from './assets/img/img2.png';
import img3 from './assets/img/img3.png';
import img4 from './assets/img/img4.png';
import img5 from './assets/img/img5.png';
import img6 from './assets/img/img6.png';
import img7 from './assets/img/img7.png';
import imgAmy from './assets/img/imgamy.png';
import './App.css'

function App() {


  return (

      <div className="container">
        <div className="header">
          <a href="#"><img src={img7} alt="" /></a>
          <a className="header-btn" href="#">Free Consultation</a>
        </div>
        <div className="hero">
          <h1>Design solutions made easy</h1>
          <p>With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</p>
        </div>
        <div className="content">
          <img className="item1" src={img1} alt="" />
          <div className="item2">
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
          <img className="item3" src={img4} alt="" />
          <img className="item4" src={img5} alt="" />
          <img className="item5" src={img6} alt="" />
        </div>
        <div className="cardamy">
          <img src={imgAmy} alt="" />
          <div className="cardamyinside">
            <h1>I’m Amy, and I’d love to work on your next project</h1>
            <p>I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!</p>
            <a href="#">Free Consultation</a>
          </div>
        </div>
        <div className="blackCard">
          <div className="blackcardtext">
            <h1>Book a call with me</h1>
            <p>I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.</p>
          </div>
          <a className="blackCard-a" href="#">Free Consultation</a>
        </div>
        <div className="footer">
          <a href="#"><img src={img7} alt="" /></a>
          <a className="header-btn" href="#">Free Consultation</a>
        </div>
      </div>

  )
}

export default App
