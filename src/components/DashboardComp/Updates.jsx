const updates = [
  {
    id: 1,
    img: "/img1.png",
    name: "Andrew Thomas",
    notification: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    id: 2,
    img: "/img2.png",
    name: "James Bond",
    notification: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    id: 3,
    img: "/img3.png",
    name: "Viper",
    notification: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];

const Updates = () => {
  return (
    <div className="flex w-[85%] flex-col gap-4 rounded-xl bg-white p-4 text-xs">
      {updates.map((update) => (
        <div key={update.id} className="flex gap-2">
          <img src={update.img} alt={update.name} className="h-12 w-12" />
          <div>
            <div className="mb-2 flex flex-col gap-1">
              <span className="font-bold">{update.name}</span>
              <span>{update.notification}</span>
            </div>
            <div>{update.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Updates;
