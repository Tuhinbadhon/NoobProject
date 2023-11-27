import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PackageItem from "../../Shared/PackageItem/PackageItem";

const Featured = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("packages.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setPackages(popularItems);
      });
  });
  return (
    <section className="mt-8 mb-8">
      <SectionTitle
        subHeading={"Featured Tours and Packages"}
        heading={"our recommended travel packages"}
      />
      <div className="grid md:grid-cols-2 gap-8">
        {packages.map((item) => (
          <PackageItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Featured;
