interface IProps {
  title: string;
  count: number;
}

const ColumnHeader = ({ title, count }: IProps) => {
  const capitalizedString = title[0].toUpperCase() + title.slice(1);
  return (
    <div className="flex">
      <h2 className="font-medium text-xs xl:text-base">
        {capitalizedString} <span>{`(${count})`}</span>
      </h2>
    </div>
  );
};

export default ColumnHeader;
