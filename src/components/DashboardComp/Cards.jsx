import Card from "./Card";

const cards = [
  {
    id: 1,
    title: "Sales",
    class: "bg-gradient-to-r from-[#bb67ff] from-0% to-[#c484f3] to-100%",
    shadow: "shadow-[0_10px_20px_0_#e0c6f5]",
    barValue: 70,
    value: "25,970",
    icon: "/usd-square.svg",
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    id: 2,
    title: "Revenue",
    class: "bg-gradient-to-r from-[#ff919d] from-0% to-[#fc929d] to-100%",
    shadow: "shadow-[0_10px_20px_0_#fdc0c7]",
    barValue: 80,
    value: "14,270",
    icon: "/money-withdrawal.svg",
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    id: 3,
    title: "Expenses",
    class: "bg-gradient-to-r from-[#f8d49a] from-0% to-[#ffca71] to-100%",
    shadow: "shadow-[0_10px_20px_0_#f9d59b]",
    barValue: 60,
    value: "4,270",
    icon: "/clipboard-alt-light.svg",
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

const Cards = () => {
  return (
    <div className="flex flex-col items-center gap-2 md:flex-row">
      {cards.map((card) => (
        <div key={card.id} className="w-full xs:w-[85%] md:w-full">
          <Card
            title={card.title}
            class={card.class}
            shadow={card.shadow}
            barValue={card.barValue}
            value={card.value}
            icon={card.icon}
            series={card.series}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
