type Props = {
  nameLabel: string;
  [key: string]: any;
};

export const Input = ({ nameLabel, ...props }: Props) => {
  return (
    <div className="relative">
      <input
        {...props}
        className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit w-full"
      />
      <label className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4  transition-all">
        {nameLabel}
      </label>
    </div>
  );
};
