import './App.css';
import Row from './components/Row/Row';
import requests from '../src/components/assets/requests'
import Banner from './components/Banner/Banner';
import Navbar from '../src/components/Navbar/Navbar';


function App() {


  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row 
        title="DARKFLIX ORIGINAL" 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
