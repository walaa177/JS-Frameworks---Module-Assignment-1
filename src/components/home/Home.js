import Heading from "../Heading";
import home from "../../images/home.jpg";
export default function Home() {
  return (
    <div>
      <div className="space"></div>
      <img src={home} alt={home} className="space-img" />
      <div className="space-heading text-center p-3">
        <Heading title="Home" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et
          bibendum lacus. Nunc nulla nulla, aliquet non justo non, hendrerit
          maximus dui. Integer augue ante, pellentesque et mi nec, venenatis
          pharetra massa. In vel urna pellentesque ipsum commodo blandit.
          Suspendisse id ligula eget elit porta volutpat. Mauris ut molestie
          est. Mauris ac turpis placerat, sollicitudin est interdum,
          pellentesque odio.
        </p>
      </div>
      ;
    </div>
  );
}
