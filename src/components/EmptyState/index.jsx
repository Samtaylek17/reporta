import EmptyImage from '../../assets/images/empty.svg';

const Empty = () => (
  <div className="flex flex-col gap-y-4 max-w-[470px] justify-center items-center">
    <h1 className="font-bold text-primary-1 text-xl">No reports</h1>
    <p className="text-gray-1 text-base font-bold text-center">
      Currently you have no data for the reports to be generated. Once you start
      generating traffic through the Balance application the reports will be
      shown.
    </p>
    <img src={EmptyImage} alt={EmptyImage} className="w-full" />
  </div>
);

export default Empty;
