export const Total = (props) => {
  const exercises1 = props.course.parts[0].exercises;
  const exercises2 = props.course.parts[1].exercises;
  const exercises3 = props.course.parts[2].exercises;
  return (
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
};
