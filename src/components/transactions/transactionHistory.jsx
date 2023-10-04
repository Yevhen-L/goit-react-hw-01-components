export const TransactionHistory = ({ transactions }) => {
  return (
    <div className="transaction">
      <table className="transaction-history">
        <thead>
          <tr>
            <th className="tableHead">Type</th>
            <th className="tableHead">Amount</th>
            <th className="tableHead">Currency</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="tableRow">Invoice</td>
            <td className="tableRow">125</td>
            <td className="tableRow">USD</td>
          </tr>
          <tr>
            <td className="tableRow">Withdrawal</td>
            <td className="tableRow">85</td>
            <td className="tableRow">USD</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
