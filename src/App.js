import ShareButton from './ShareButton';
import './App.css';

function App() {

  const userLinks = 
  {facebook: 'https://www.facebook.com', 
  twitter:'https://www.twitter.com', 
  instagram: 'https://www.instagram.com', 
  linkedin:'https://www.linkedin.com'}
  return (
      <div className="App">
       <ShareButton share={userLinks}/>
      </div>
  );
}

export default App;
