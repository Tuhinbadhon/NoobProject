import { useUser } from "../../userContext";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const { userData } = useUser();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    // Filter out the user with the specified id
    const updatedUserData = userData.filter((user) => user.id !== id);

    // Remove the "userData" key from localStorage
    localStorage.removeItem("userData");
    localStorage.setItem("userData", JSON.stringify(updatedUserData));

    navigate("/about");
    console.log("Deleted Id is:", id);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-2xl font-bold">About Page</h2>
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod,
        reiciendis harum! Adipisci voluptatem ea a mollitia omnis aliquam
        tempore, minima, in facere laudantium cum eligendi illum eveniet
        perspiciatis consequatur! Fugit qui temporibus natus suscipit minima
        recusandae dolorum repudiandae est ea. Alias commodi sequi
        necessitatibus dolore explicabo quo fugiat sed nulla non doloribus modi,
        tempora aliquam laudantium earum fugit! Perferendis quo dignissimos
        autem voluptates quam sequi nihil magni vel obcaecati nobis a, quisquam
        quidem quia amet accusantium! At quis inventore ipsum maxime earum
        magnam. Quasi nihil sequi odit dolorum magnam esse qui inventore
        architecto minus expedita. Recusandae necessitatibus neque
        exercitationem maiores, voluptatibus blanditiis sit id esse magni quae
        error ex veniam quibusdam quis repellat obcaecati quod dolorum
        praesentium cumque libero voluptates. Inventore totam veniam quasi eum
        enim. Minima optio sint neque maxime cum ipsa vel aperiam voluptatum,
        quod suscipit nam voluptate ratione incidunt culpa ex laboriosam dolores
        autem pariatur. Illo nesciunt alias consequatur magni temporibus, minima
        reprehenderit fugit incidunt assumenda officia voluptatem voluptatum
        libero accusantium deserunt. Ipsa aspernatur maxime quae iusto culpa
        quos sit similique nesciunt exercitationem placeat nemo, autem ratione.
        Fugiat sed hic voluptates ratione eveniet in cum quod, nobis animi,
        rerum inventore labore quas placeat temporibus quaerat officiis vel.
      </p>
      <h2 className="text-2xl font-bold mt-5">User Table</h2>
      <table className="table table-bordered table-hover mt-3">
        <thead className="thead-light">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-primary mr-2">Edit</button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default About;
