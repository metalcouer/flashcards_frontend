import React, { Component } from 'react';
import './App.css';
import Card from './components/card';
// import Data from './components/data';



class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        tags: [
          "string",
          "array",
          "object",
          "includesCallback",
          "easy",
          "medium",
          "hard",
        ],
        methods: [{
          id: 1,
          name: '.map',
          description: 'creates a new array with the results of calling a provided function on every element in the calling array.',
          example: '',
          tags: ["array", "medium"],
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map'
          },
          {
          id: 2,
          name: '.filter',
          description: 'creates a new array with all elements that pass the test implemented by the provided function.',
          example: "ar words = ['spray', 'limit' 'elite', 'exuberant', 'destruction' 'present'] const result = words.filter(word => word.length > 6) console.log(result) // expected output: Array ['exuberant', 'destruction', 'present']",
          tags: ["array", "medium"],
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter'
          },
          {
          id: 3,
          name: '.reduce',
          description: 'executes a reducer function (that you provide) on each member of the array resulting in a single output value.',
          example: '',
          tags: ["array", "hard"],
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce'
          }]
      
    }
  }
  
  getRandomIntInclusive = (max) => {
    const min = 0
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  generateFlashcard = (e) => {
    console.log('generateFlashcard')
    const randomIndex = this.getRandomIntInclusive(this.state.methods.length - 1)
    const randomCard = this.state.methods[randomIndex]
    console.log(randomCard)
    this.setState({
      name: randomCard.name,
      description: randomCard.description,
      tags: randomCard.tags,
      link: randomCard.link,
      example: randomCard.example
    })
  }

  // componentDidMount() {
  //   fetch('http://localhost:3000/flashcards_db')
  //     .then(data => data.json())
  //       .then(JSONdata => {
  //         this.setState({songs: JSONdata.data.songs})
  //       })
  // }

  render() {
    console.log(this.state.methods)
    return (
      <div className="App">
        <div className="row navbar justify-content-end pb-5">
          <ul className="nav">
          </ul>
        </div>
        <div className="row justify-content-center py-5">
          <div className="col-8 text-center">
            <h1 className="pb-2">Flashcards!</h1>
            <div className="flashcard">
              <p className="pb-2">An app for studying common JavaScript methods.</p>
              <button className="btn btn-danger btn-lg" onClick={this.generateFlashcard}>Generate</button>
            </div>
            <div className="row justify-content-center">
              {this.state.name
                ? <Card
                description={this.state.description}
                tags={this.state.tags}
                example={this.state.example}
                /> 
                : '' } 
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Type response here:  </label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
              <button className="btn btn-dark btn-sm" >Submit</button>
            </div>
          </div>
        </div> 
      </div>
    );
  }
}

export default App;