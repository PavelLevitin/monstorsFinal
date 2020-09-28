import React , {Component}from 'react';
import {Cardlist} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import {ProjectHeading} from './components/heading/heading.component';
import './App.css';

class App extends Component{
    constructor(){
      super();

      this.state={
        monsters  :[]  ,
        searchField: ''
      }

    
    }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users => this.setState({monsters:users}))
  }

  handleChange=(e)=>{
     this.setState({searchField :e.target.value})
  }

    render(){
        const {monsters , searchField} = this.state ;
        const filteredMonsters=monsters.filter(monster =>
          monster.name.toLowerCase().includes(searchField.toLowerCase())

        )
        return (
            <div className="App">
              <ProjectHeading></ProjectHeading>
              

              <SearchBox
                placeholder ='search monsters'
                handleChange ={ this.handleChange}
              />

              

              <Cardlist monsters={filteredMonsters}>

              </Cardlist>
               
            </div>
          );
        }


 }


   


export default App;
