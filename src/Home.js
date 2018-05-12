import React from 'react';
import { Link } from 'react-router-dom';
import fetchExercise from './meta';

const ExerciseList = ({ links = [] }) => (
  <div>
    <h1>Advanced React Component Patterns</h1>
    <div>
      {links.map(link => {
        return (
          <div key={link.file}>
            <span>{link.file}</span>
            <Link to={`/${link.file}`}>{link.title}</Link>
            <Link to={`/exercise/${link.file}`}>(exercise)</Link>
            <Link to={`/final Version/${link.file}`}>(final)</Link>
          </div>
        );
      })}
    </div>
  </div>
);

class Home extends React.Component {
  state = {
    links: []
  };
  async fetchLinks() {
    const links = await fetchExercise();
    this.setState({
      links
    });
  }
  componentDidMount() {
    this.fetchLinks();
  }
  componentWillReceiveProps() {
    this.fetchLinks();
  }
  render() {
    return <ExerciseList links={this.state.links} />;
  }
}
export default Home;
