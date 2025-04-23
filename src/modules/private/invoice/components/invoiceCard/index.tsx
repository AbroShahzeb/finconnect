export type Invoice = {
  title: string;
  user: {
    name: string;
    email: string;
  };
  period: {
    start: string;
    end: string;
  };
  transactions: Array<{
    title: string;
    description: string;
    amount: number;
    date: Date;
  }>;
  total: number;
  generatedAt: Date;
};

export const InvoiceCard = ({
  title,
  user,
  period,
  transactions,
  total,
  generatedAt,
}: Invoice) => {
  const formatDate = (date: Date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md text-gray-800 dark:text-gray-100">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Generated on: <span>{formatDate(generatedAt)}</span>
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">User Details</h2>
        <div className="mt-2 text-sm space-y-1">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">Period</h2>
        <p className="text-sm">
          From <strong>{period.start}</strong> to <strong>{period.end}</strong>
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Transactions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700 text-sm">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="text-left py-2 px-3">Title</th>
                <th className="text-left py-2 px-3">Description</th>
                <th className="text-right py-2 px-3">Amount</th>
                <th className="text-right py-2 px-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {transactions.map((txn, idx) => (
                <tr key={idx}>
                  <td className="py-2 px-3">{txn.title}</td>
                  <td className="py-2 px-3">{txn.description}</td>
                  <td className="py-2 px-3 text-right">${txn.amount}</td>
                  <td className="py-2 px-3 text-right">
                    {formatDate(txn.date)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 text-right">
        <h2 className="text-xl font-semibold">
          Total:{" "}
          <span className="text-green-600 dark:text-green-400">${total}</span>
        </h2>
      </div>
    </div>
  );
};
