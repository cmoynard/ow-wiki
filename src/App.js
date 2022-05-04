import './App.css';
import React, { Component, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = {
    post: []
  }

  componentDidMount() {
    fetch("http://127.0.0.1:3001/")
    .then((response) => {
        return response.json();
      })
      
    .then((result) => {
        const sortedState = [...result].sort((a, b) => {
          return a.name > b.name ? 1 : -1;
        });
        this.setState({post: sortedState});
        console.log(sortedState);
      })
  }

render() {
    return (
      
      <div className="App">
        <h1 class="display-1 my-3">Overwatch Wiki</h1>
        <div class="container">
        <div class="row">
        {this.state.post && this.state.post.length && this.state.post.map((item) => {
                       return <div class="col-3">
                              <a href="#" class="linkcard">
                                <div class="card mb-3 border border-dark">
                                  <div class="img-wrapper my-3">
                                    <img class="cardlogo card-img-top rounded-circle w-100 text-center border border-dark" src={item.logo_image} alt="" />
                                  </div>
                                  <h3 class="mb-4">{item.name}</h3>
                                </div>
                              </a>
                              </div>})
        }
        </div>
        </div>
      </div>
    );
  }
}

export default App;
