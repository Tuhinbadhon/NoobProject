const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 text-lg mx-auto mb-8 text-center">
      <h3 className="text-2xl uppercase font-semibold">{heading}</h3>
      <h5 className="uppercase text-yellow-600 ">{subHeading}</h5>
    </div>
  );
};

export default SectionTitle;
