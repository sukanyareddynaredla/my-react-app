import "./App.css"; 
 
function App() { 
  return ( 
    <div className="site"> 
      {/* Navbar */} 
      <nav className="nav"> 
        <div className="container nav-inner"> 
          <div className="brand">My Simple Site</div> 
          <ul className="menu"> 
            <li><a href="#about">About</a></li> 
            <li><a href="#features">Features</a></li> 
            <li><a href="#contact" className="btn">Contact</a></li> 
          </ul> 
        </div> 
      </nav> 
 
      {/* Hero */} 
      <header className="hero"> 
        <div className="container hero-inner"> 
          <h1>Build. Learn. Deploy.</h1> 
          <p> 
            A minimal React starter page you can use for your AWS CodeBuild demo. 
            Clean, fast, and easy to customize. 
          </p> 
          <div className="cta"> 
            <a href="#features" className="btn">View Features</a> 
            <a href="#contact" className="btn btn-outline">Get in Touch</a> 
          </div> 
        </div> 
      </header> 
 
      {/* About */} 
      <section id="about" className="section"> 
        <div className="container"> 
          <h2>About</h2> 
          <p> 
            This simple website is built with React (CRA). You can edit the text, 
            colors, and sections easily in <code>src/App.js</code> and <code>src/App.css</code>. 
          </p> 
        </div> 
      </section> 
 
      {/* Features */} 
      <section id="features" className="section alt"> 
        <div className="container"> 
          <h2>Features</h2> 
          <div className="grid"> 
            <div className="card"> 
              <h3>Fast</h3> 
              <p>Lightweight layout that loads quickly and is perfect for demos.</p> 
            </div> 
            <div className="card"> 
              <h3>Responsive</h3> 
              <p>Looks great on mobile and desktop with a simple grid.</p> 
            </div> 
            <div className="card"> 
              <h3>Easy to Deploy</h3> 
              <p>Ideal for S3 static hosting and AWS CodeBuild pipelines.</p> 
            </div> 
          </div> 
        </div> 
      </section> 
 
      {/* Contact */} 
      <section id="contact" className="section"> 
        <div className="container"> 
          <h2>Contact</h2> 
          <p> 
            Have questions? Replace this with your own contact form or email link. 
          </p> 
          <a className="btn" href="mailto:you@example.com">you@example.com</a> 
        </div> 
      </section> 
 
      {/* Footer */} 
      <footer className="footer"> 
        <div className="container"> 
          <p>© {new Date().getFullYear()} My Simple Site. All rights reserved.</p> 
        </div> 
      </footer> 
    </div> 
  ); 
} 
 
export default App;
