const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 text-lg mx-auto mb-8 text-center">
      <h5 className="uppercase text-yellow-600 mb-2">{subHeading}</h5>
      <h3 className="text-xl uppercase border-y-2 py-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
