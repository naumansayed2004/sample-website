import './App.css';
import Nav from '../src/Components/Nav/Nav'
import Footer from '../src/Components/Footer/Footer'

function App() {
  return (
    <>
    <div>
    <Nav/>
      <div className='middle'><p className='part'>PART - 1</p></div>
      <div className='info'>
        <div>
          <h1>About</h1>
          <p className='about'>To bear, the might, and makes of dels we have his resolence of us coil, must give under them? To die: than fly to sling ents the in thus patient a sleep; to sleep.</p>
        </div>
        <div>
          <h2>Company</h2>
          <p className='company'>To bear, the might, and makes of dels we have his resolence of us coil, must give under them? To die: than fly to sling ents the in thus patient a sleep; to sleep.</p>
        </div>
        <div>
          <h3>Services</h3>
          <p className='services'>To bear, the might, and makes of dels we have his resolence of us coil, must give under them? To die: than fly to sling ents the in thus patient a sleep; to sleep.</p>
        </div>
      </div>
      </div>
    <div className=''>
       <Footer/>
    </div>
    </>
  );
}

export default App;
