interface FeatureCardProps {
  icon: string;
  title: string;
  desc: string;
}

const FeatureCard = ({ icon, title, desc }: FeatureCardProps) => {
  return (
    <div className="space-y-2 rounded-[20px] bg-transparent-white p-6 hover:border hover:border-solid hover:border-indigo">
      <div>{icon}</div>
      <div className="text-xl font-medium text-white">{title}</div>
      <div className="text-sm font-light text-white">{desc}</div>
    </div>
  );
};

export default FeatureCard;
