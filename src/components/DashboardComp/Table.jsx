const tables = [
  {
    id: 1,
    name: "Fried Chicken Lasagna",
    trackingId: 18908418,
    date: "2 March 2022",
    status: "Approved",
  },
  {
    id: 2,
    name: "Big Bang Pizza",
    trackingId: 18908419,
    date: "2 March 2022",
    status: "Pending",
  },
  {
    id: 3,
    name: "Mouth Freshner",
    trackingId: 18908420,
    date: "2 March 2022",
    status: "Approved",
  },
  {
    id: 4,
    name: "Cupcake",
    trackingId: 18908421,
    date: "2 March 2022",
    status: "Delivered",
  },
];
const Table = () => {
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Recent Orders</h2>
      <table className="w-full table-auto rounded-md bg-white shadow-[0_13px_20px_0_#80808029]">
        <thead className="h-12">
          <tr className="text-left">
            <th className="pl-8">Product</th>
            <th>Tracking ID</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tables.map((table) => (
            <tr key={table.id} className="h-12">
              <td className="pl-8">{table.name}</td>
              <td>{table.trackingId}</td>
              <td>{table.date}</td>
              {/* <td>{table.status}</td> */}
              <td>
                <span
                  className={`${
                    table.status == "Approved"
                      ? "bg-green-500"
                      : table.status == "Pending"
                      ? "bg-yellow-500"
                      : "bg-blue-500"
                  } rounded-full px-2 py-[2px] text-sm text-white`}
                >
                  {table.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
