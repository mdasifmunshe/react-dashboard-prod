import { Cards, RightSide, Table } from "../components";

const Dashboard = () => {
  return (
    <div className="flex flex-col py-5 lg:grid lg:grid-cols-3 lg:py-0 xl:col-span-5 xl:grid xl:grid-cols-3">
      <div className="col-span-2 flex flex-col justify-evenly px-0 xs:px-3 xl:col-span-2">
        <h1 className="p-4 pt-0 text-center text-3xl font-bold lg:p-0 xl:text-left">
          Dashboard
        </h1>
        <Cards />
        <Table />
      </div>
      <RightSide />
    </div>
  );
};

export default Dashboard;
