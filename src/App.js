import React from  'react'
import AverageRating from './AverageRating';
import Reviews from './Reviews';
import SentimentAnalysis from './SentimentAnalysis';
import Sidebar from './Sidebar';
import './styles.css'
import WebsiteVisitations from './WebsiteVisitations';

function App(props) {
  return (
    <div className="App">
      <Sidebar />
      <Reviews reviews={1281} />
      <AverageRating avgRating={4.6} />
      <SentimentAnalysis analysis={960} />
      <WebsiteVisitations webVisits={821} />
    </div>
  );
}

export default App;
