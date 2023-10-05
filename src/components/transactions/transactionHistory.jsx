import css from './transactionHistory.module.css';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className="thead">
        <tr className={css.title}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className="tbody">
        {transactions.map(({ id, type, amount, currency }) => (
          <tr className={css.list} key={id}>
            <td className={css.tr}>{type}</td>
            <td className={css.tr}>{amount}</td>
            <td className={css.tr}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
