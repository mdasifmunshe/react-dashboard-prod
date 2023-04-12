import { Cards, RightSide, Table } from "../components";

const Dashboard = () => {
  return (
    <div className="col-span-5 grid grid-cols-3">
      <div className="col-span-2 flex flex-col justify-evenly px-3">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Cards />
        <Table />
      </div>
      <RightSide />
    </div>
  );
};

export default Dashboard;
