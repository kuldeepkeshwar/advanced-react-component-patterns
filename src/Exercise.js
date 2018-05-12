import React from 'react';
import { Link } from 'react-router-dom';
import fetchExercise from './meta';
import ExerciseWrapper from './ExerciseWrapper';

const containerStyles = {
  display: 'flex'
};
const capitalize = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
class Combined extends React.Component {
  state = {
    file: {}
  };
  async fetchFile() {
    const file = await fetchExercise(this.props.match.params.file);
    this.setState({ file });
  }
  componentDidMount() {
    this.fetchFile();
  }
  componentWillReceiveProps() {
    this.fetchFile();
  }
  render() {
    const { title, Exercise, Final } = this.state.file;
    if (!title) {
      return null;
    }
    console.log();
    const type = capitalize(this.props.match.path.split('/')[1]);
    return (
      <div>
        <div>
          <Link to="/">back</Link>
          <h1>{title}</h1>
        </div>
        <div style={containerStyles}>
          <ExerciseWrapper title={type} Component={Exercise} />
        </div>
      </div>
    );
  }
}
export default Combined;
