import { FC } from "react";
import { IconType } from "react-icons";

interface TitleProps {
  label: string;
  secondaryLabel?: string;
  color?: string;
  secondaryColor?: string;
  underline?: boolean;
  icon?: IconType;
}

const Title: FC<TitleProps> = ({
  label,
  secondaryLabel,
  color,
  secondaryColor,
  underline,
  icon: Icon,
}) => {
  if (!color) color = "text-pink-200";
  if (secondaryLabel && !secondaryColor) secondaryColor = "text-zinc-300";
  return (
    <div id="title-component" className="py-10 px-12 !pb-0">
      <h1
        className={`${color} font-semibold text-3xl flex flex-row items-center gap-x-2`}
      >
        {Icon && <Icon size={28} className={color} />}
        {label}
      </h1>
      {secondaryLabel && (
        <span className={`${secondaryColor} text-sm`}>{secondaryLabel}</span>
      )}
      {underline && <hr className="mt-3 border-zinc-200" />}
    </div>
  );
};

export default Title;
