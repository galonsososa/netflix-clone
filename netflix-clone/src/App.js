import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {

  return (
    <div className="app">
      
      <Nav/>
      <Banner/>

      <Row title = "Netflix Originals" fetchUrl = {requests.getNetflixOriginals} isLargeRow/>
      <Row title = "Trending Now" fetchUrl = {requests.getTrending} />
      <Row title = "Top Rated" fetchUrl= {requests.getTopRated} />
      <Row title = "Comedy" fetchUrl = {requests.getComedy} />
      <Row title = "Documentaries" fetchUrl = {requests.getDocumentaries} />
      <Row title = "Drama" fetchUrl = {requests.getDrama} />
      <Row title = "Horror" fetchUrl = {requests.getHorror} />
    </div>
  );
}

export default App;
