import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h3 className="m-auto text-black max-w-12xl p-28">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur error
        maxime quos velit earum? Veritatis consectetur reprehenderit rem nemo
        voluptatem quod itaque, laborum omnis quo cum, doloremque alias
        voluptatibus magni necessitatibus saepe. Rem ex aspernatur magni,
        laboriosam explicabo maiores nesciunt minima! Maiores aliquid eius
        dignissimos, sed, autem voluptatum officiis numquam eveniet sunt nisi,
        unde temporibus. Expedita consequuntur ratione, voluptatum atque sequi
        dolores corrupti! Magni praesentium velit libero quod incidunt esse
        ullam doloremque nesciunt necessitatibus ipsa autem eveniet nam hic
        obcaecati quis sed quia, facilis alias modi optio facere nobis omnis
        placeat quae! Id molestiae aut dolores praesentium aliquam incidunt! Ex
        magni, mollitia dignissimos sapiente ratione quos culpa hic nemo.
        Doloremque, dolor tempore. Expedita dolore harum voluptatibus assumenda
        error omnis quia praesentium impedit voluptates repellendus
        exercitationem accusamus nobis totam sed laborum autem voluptatem, nemo
        itaque. Quod laudantium rem dolor, laborum facilis obcaecati enim at,
        est, vel commodi temporibus ipsam neque voluptates! Velit quos saepe
        ipsam. Ullam, veniam aliquam quisquam nihil dolore cumque molestias
        voluptatem at provident ratione nulla minima deleniti, sed earum,
        corrupti a quas labore optio totam facere. Libero, itaque in? Quos,
        animi consectetur nobis et ad ab aliquid perspiciatis iste, deleniti
        quaerat saepe itaque. Culpa veritatis aliquid commodi ex.
      </h3>
    </div>
  );
};

export default Contact;
