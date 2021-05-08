import Container from "react-bootstrap/Container";
import Heading from "../Heading";
export default function About() {
  return (
    <Container>
      <div className=" row about ">
        <div className="col-md-12 mt-5  col-lg-6 head text-center ">
          <Heading title="About Us" />
        </div>
        <div className="col-md-12 col-lg-6 ">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac
            blandit lorem. Nunc vel massa eu enim placerat rutrum a et sapien.
            Curabitur pellentesque pellentesque porta. Duis placerat molestie
            est vel eleifend. Sed rhoncus risus arcu, in viverra turpis
            fringilla sed. Proin accumsan laoreet velit, sed tincidunt elit
            ullamcorper eget. Donec nunc lacus, posuere a gravida id, malesuada
            a felis.
          </p>
        </div>
      </div>
    </Container>
  );
}
