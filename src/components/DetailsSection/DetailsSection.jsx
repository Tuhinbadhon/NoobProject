const DetailsSection = ({ heading, subHeading }) => {
  return (
    <div className=" mx-3 text-left">
      <h3 className="text-2xl uppercase text-black font-semibold">{heading}</h3>{" "}
      <br />
      <h5 className="text-left text-black">{subHeading}</h5>
      <br />
    </div>
  );
};

export default DetailsSection;
