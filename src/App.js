import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Trending from './components/Trending';
import Image from './components/Image';

const url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}`;
console.log(url);
export default class App extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
    axios.get(url).then(({ data }) => {
      this.setState({
        images: data.data,
      });
    });
  }

  render() {
    if (this.state.images.length === 0) {
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h2>Loading...</h2>
        </div>
      );
    }

    return (
      <div className='App'>
        <h1 style={{ textAlign: 'center' }}>Trending Gifs</h1>
        <Router>
          <Routes>
            <Route path='/' element={<Trending images={this.state.images} />} />
            <Route
              path='/images/:id'
              element={<Image image={this.state.images} />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
