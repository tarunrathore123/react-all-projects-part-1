import React from 'react';
import CardList2 from './card-list2.component';
import banner from '../../assets/7458.jpg';
import { SearchBox } from '../../components/search-box/search-box.component';
import './homepage2.styles.scss';

class HomePage2 extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
          monsters: [],
          searchField: ''
        };
      }
    
      componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters: users}));
      }

      onSearchChange = event => {
        this.setState({ searchField: event.target.value });
      }

    render() {
      const {monsters, searchField} =this.state;
      const filteredMonsters=monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase()));
        return (
            
          <div className='container'>
                    
            <SearchBox onSearchChange={this.onSearchChange} />
            <CardList2 monsters={filteredMonsters} >
              
            </CardList2>
           </div>
        );
      }
}

export default HomePage2;