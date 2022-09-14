import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
import Route2 from './components/Route2';
import Header2 from './components/Header2';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header2 />
      <Route2 path="/">
        <Accordion items={items} />
      </Route2>
      <Route2 path="/list">
        <Search />
      </Route2>
      <Route2 path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route2>
      <Route2 path="/translate">
        <Translate />
      </Route2>
    </div>
  );
};
