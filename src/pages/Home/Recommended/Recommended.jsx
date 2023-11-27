import recommended from "../../../assets/home/banner2.jpg";

const Recommended = () => {
  return (
    <div className="mb-8">
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={recommended} className="max-w-lg rounded-lg shadow-2xl" />
          <div>
            <h5 className="uppercase text-yellow-600 mb-2">
              Easy to use UI for trip planning
            </h5>
            <h3 className="text-xl uppercase">Ridiculously easy to use</h3>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Start Planning</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
