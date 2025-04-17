export const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <h4>total of {totalExercises} exercises</h4>
    </div>
  );
};
