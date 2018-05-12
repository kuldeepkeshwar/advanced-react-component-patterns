const exercises = [];
const register = async file => {
  try {
    const exercise = (await import(`./exercises/${file}`)).default;
    const finalExercise = (await import(`./exercises-final/${file}`)).default;
    exercises.push({
      file,
      title: exercise.title,
      Exercise: exercise,
      Final: finalExercise
    });
  } catch (e) {
    console.log('error: loading module', file, e);
    throw e;
  }
};
const promises = [register('01')];

function fetchExercise(file) {
  return Promise.all(promises).then(() => {
    if (file) {
      return exercises.filter(exercise => exercise.file === file)[0];
    }
    return exercises;
  });
}
export default fetchExercise;
