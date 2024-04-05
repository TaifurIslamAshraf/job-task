import { FC } from "react";

type Props = {
  text: string;
};

const Heading: FC<Props> = ({ text }) => {
  return (
    <div className="bg-[#27245c] text-center p-4">
      <h1 className="text-[#FFB606] text-[32px] uppercase font-semibold">
        {text}
      </h1>
    </div>
  );
};

export default Heading;
