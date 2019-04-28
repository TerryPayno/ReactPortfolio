import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home/Home';
import Work from './Work/Work';
import Contact from './Contact/Contact';
import Nav from './Nav/Nav';
import About from './About/About';
import { BrowserRouter as Router } from 'react-rotuer-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Router>
  <Nav />
  </Router>, div);

  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<About />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Contact />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Work />, div);
  ReactDOM.unmountComponentAtNode(div);
});