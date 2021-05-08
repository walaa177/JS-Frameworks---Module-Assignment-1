import Heading from "../Heading";
import Container from "react-bootstrap/Container";
import plant1 from "../../images/plant1.jpg";
import plant2 from "../../images/plant2.jpg";
import plant3 from "../../images/plant3.jpg";
import List from "react-bootstrap/ListGroup";
import Figure from "react-bootstrap/Figure";
import ListInlineItem from "react-bootstrap/ListGroup";

export default function Portfolio() {
  return (
    <div>
      <Container className="portfolio">
        <div className="text-center portfolio-header">
          <Heading title="Portfolio " />
        </div>

        <List className="portfolio-list row text-center">
          <ListInlineItem className="col-md-3 col-s-6 m-1">
            <Figure>
              <Figure.Image
                alt="img mfor plant2"
                src={plant2}
                className="portfolio-img"
              />
              <Figure.Caption>Lorem ipsum dolor sit amet</Figure.Caption>
            </Figure>
          </ListInlineItem>

          <ListInlineItem className="col-md-3 col-s-6 m-1">
            <Figure>
              <Figure.Image
                alt="img mfor plant3"
                src={plant3}
                className="portfolio-img"
              />
              <Figure.Caption>Lorem ipsum dolor sit amet</Figure.Caption>
            </Figure>
          </ListInlineItem>

          <ListInlineItem className="col-md-3 col-s-6 m-1">
            <Figure>
              <Figure.Image
                alt="img mfor plant1"
                src={plant1}
                className="portfolio-img"
              />
              <Figure.Caption> Lorem ipsum dolor sit amet</Figure.Caption>
            </Figure>
          </ListInlineItem>
        </List>
      </Container>
    </div>
  );
}
