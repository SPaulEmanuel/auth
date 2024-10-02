import clsx from "clsx";
import { CiWarning } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";

type Props = {
  message?: string;
  isInvalid?: boolean;
};

export const FormInvalid = ({ message, isInvalid }: Props) => {
  if (!message) return null;
  return (
    <div
      className={clsx(
        " text-emerald-500 bg-emerald-200 p-3 rounded-md flex items-center gap-x-2 text-sm ",
        { "!bg-destructive/15 !text-destructive": isInvalid }
      )}
    >
      {isInvalid ? <CiWarning /> : <FaCheck />}
      {message}
    </div>
  );
};
