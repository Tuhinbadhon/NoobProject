import {
  category1,
  category2,
  category3,
  category4,
  category5,
  category6,
  category7,
  category8,
  category9,
  category10,
  category11,
  category12,
  category13,
  category14,
  category15,
  category16,
} from "../../../assets/index";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CategoryItem from "./CategoryItem";

const categories = [
  {
    label: "Action Camera",
    iconSrc: category1,
  },
  {
    label: "Bluetooth Speaker",
    iconSrc: category2,
  },
  {
    label: "Conference System",
    iconSrc: category3,
  },
  {
    label: "Earphone",
    iconSrc: category4,
  },
  {
    label: "Gaming Console",
    iconSrc: category5,
  },
  {
    label: "Graphics Card",
    iconSrc: category6,
  },
  {
    label: "Headphone",
    iconSrc: category7,
  },
  {
    label: "All Laptop",
    iconSrc: category8,
  },
  {
    label: "Laptop Battery",
    iconSrc: category9,
  },
  {
    label: "Mobile Phone",
    iconSrc: category10,
  },
  {
    label: "Portable Power Station",
    iconSrc: category11,
  },
  {
    label: "Printer",
    iconSrc: category12,
  },
  {
    label: "Router",
    iconSrc: category13,
  },
  {
    label: "Smart Watch",
    iconSrc: category14,
  },
  {
    label: "All TV",
    iconSrc: category15,
  },
  {
    label: "VR",
    iconSrc: category16,
  },
];

const Category = () => {
  return (
    <section className="mb-12">
      <SectionTitle
        subHeading={"Get Your Desired Product from Featured Category!"}
        heading={"Featured Category"}
      />
      <div className="cat-items-wrap grid grid-cols-2 min-[960px]:grid-cols-8 min-[700px]:grid-cols-4 sm:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <CategoryItem key={index} {...category} />
        ))}
      </div>
    </section>
  );
};

export default Category;
