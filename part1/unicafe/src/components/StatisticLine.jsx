export const StatisticsLine = (props) => {
  const { text, value } = props;
  return (
    <tr>
      <td>{text}</td>
      <td>
        {value} {text === "positive" ? "%" : ""}
      </td>
    </tr>
  );
};
