import { ChevronDown } from "lucide-react";

type Props = {
  name: string;
  icon: string;
};

const Subutton = ({ name, icon }: Props) => {
  const handleClick = () => {
    if (window) {
      const subjectNode = document.getElementById(
        `subject-${name.toLowerCase()}`,
      );
      subjectNode?.classList.toggle("closed");
    }
  };
  return (
    <button
      id={`btn-${name.toLowerCase()}`}
      className="flex w-full justify-between gap-3 items-center"
      data-subject={`subject-${name.toLowerCase()}`}
      onClick={handleClick}
    >
      <div className="flex gap-3">
        <img src={icon} alt={name} width="30px" />
        <h3 className="text-2xl font-semibold capitalize">{name}</h3>
      </div>

      <ChevronDown size={24} />
    </button>
  );
};

export default Subutton;
