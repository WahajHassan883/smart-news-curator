export default function App() {
  return (
    <div className="app">
      <NavBar />
      <Heading />
      <Card />
    </div>
  );
}

function NavBar() {
  return (
    <nav className='nav-bar'>
      <div className='menu-icon'>☰</div>
      <div className='company-name'>SmartNewsCurator</div>
      <ul className="nav-links">
        <li>Health</li>
        <li>Sports</li>
        <li>Technology</li>
        <li>Business</li>
        <li>Entertainment</li>
        <li>All Categories</li>
        <li>Pakistan</li>
      </ul>
      <button className="login-signup">login/SignUp</button>
    </nav >
  );
}

function Heading() {
  return (
    <h1>RECOMMENDED NEWS</h1>
  )
}

function Card() {
  return (
    <div className="container">

      <div className="card">
        <img src="https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM="></img>
        <div className="date">
          <p>Web Mar 19 2025</p>
          <p>Geo</p>
        </div>
        <div className="channel-name"> </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
        <a className="links">Go to News</a>
        <a className="links">Listen</a>
      </div>

      <div className="card">
        <img src="https://media.istockphoto.com/id/1673064753/vector/breaking-news-world-map-background.jpg?s=612x612&w=0&k=20&c=bNk_c5Wn2W8LaaHkJonxt0lOA8eH1LH9Jiwfq9l4dDg="></img>
        <div className="date">
          <p>Web Mar 19 2025</p>
          <p>Urdupoint</p>
        </div>
        <div className="channel-name"> </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
        <a className="links">Go to News</a>
        <a className="links">Listen</a>
      </div>

    </div>
  )
}