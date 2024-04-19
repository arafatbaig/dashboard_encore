import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import Card, { CardContent, CardProps } from "@/components/Card";
import { Users, Smartphone, MonitorPlay, Play } from "lucide-react";
import BarChart from "@/components/BarChart";

const cardData: CardProps[] = [
  {
    label: "Users in Month",
    amount: "377",
    discription: "+20.1% from last month",
    icon: Users,
  },
  {
    label: "Views in Month",
    amount: "+2350",
    discription: "+180.1% from last month",
    icon: Play,
  },
  {
    label: "Desktop",
    amount: "+12,234",
    discription: "+19% from last month",
    icon: MonitorPlay,
  },
  {
    label: "Mobile",
    amount: "+573",
    discription: "+201 since last hour",
    icon: Smartphone,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full ">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            discription={d.discription}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Month Views</p>
          <BarChart/>
        </CardContent>
        <CardContent>
          <p>Last 30 Days Stats</p>
          <BarChart/>
        </CardContent>
      </section>
    </div>
  );
}
