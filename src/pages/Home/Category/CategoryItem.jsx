const CategoryItem = ({ label, iconSrc, link }) => {
  return (
    <div className="cat-item bg-white rounded-lg p-4 shadow-md">
      <a href={link} className="cat-item-inner">
        <div className="flex flex-col items-center justify-center">
          <img src={iconSrc} alt={label} width="48" height="48" />
          <p className="text-center mt-2">{label}</p>
        </div>
      </a>
    </div>
  );
};

export default CategoryItem;
