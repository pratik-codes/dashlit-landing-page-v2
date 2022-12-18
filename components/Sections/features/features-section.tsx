import Icons from "../../icons/Icons";
import FeatureCard from "./components/feature-card";

interface FeatureType {
  icon: any;
  title: string;
  desc: string;
}

const featuresData = [
  {
    icon: <Icons name="customization" />,
    title: "Customization",
    desc: "Add and set your own background, quotes and much more.",
  },
  {
    icon: <Icons name="links" />,
    title: "Links and Folders",
    desc: "Add your links/bookmarks and also folders(multiple links) and open them with a single click.",
  },
  {
    icon: <Icons name="todo" />,
    title: "Todo and Focus mode",
    desc: "Write down and track your tasks very easily. Focus on important things with focus mode. ",
  },
  {
    icon: <Icons name="mail" />,
    title: "Gmail Integration",
    desc: "See your top emails on you homepage.",
  },
  {
    icon: <Icons name="calendar" />,
    title: "Google Calendar Integration",
    desc: "Get your latest calendar invites/meetings easily.",
  },
  {
    icon: <Icons name="other" />,
    title: "Many more features!",
    desc: "Get you current weather updates, work in sprints using Pomodoro and much more.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="mx-auto mt-[20rem] animate-fade-in">
      <span className="mt-12 mb-6 text-4xl font-medium">Features</span>
      <div className="mt-8 grid grid-cols-3 gap-6">
        {featuresData.map((feature: FeatureType) => {
          return <FeatureCard {...feature} />;
        })}
      </div>
    </section>
  );
};

export default FeaturesSection;
