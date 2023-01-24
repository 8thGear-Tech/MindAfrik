// advisoryBoardCards
// ourTeamsCards
// coreValuesCards
// import "../../sassfiles/components/allCards/_AboutUsCards.scss";

import Card from "react-bootstrap/Card";
import ValuesData from "../../data/allCards/dashboardCards.json";

export const CoreValuesCards = (props) => {
  const { image, title, text, id } = props;
  return (
    <>
      <Card border="light" style={{ width: "22rem" }}>
        {/* <div className="dflex item-center ms-4 me-4 my-auto mt-4 justify-content-center"> */}
        {""}
        <Card.Img
          variant="top"
          src={image}
          className="mx-auto"
          style={{ maxHeight: "100px", maxWidth: "120px" }}
        />
        <Card.Body className="">
          {""}
          <h5 class="card-title">{title}</h5>
          <p class="card-text text-start">{text}</p>
        </Card.Body>
        {/* </div> */}
      </Card>
    </>
  );
};

export const CoreValues = () => {
  return (
    <div className="container-fluid mt-5 mb-5 ">
      <div className="row d-flex text-center">
        {ValuesData.ValuesInfo.map((card) => {
          return (
            <div className="col-sm-12 col-md-4 col-lg-4" key={card.id}>
              <CoreValuesCards {...card}></CoreValuesCards>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// AdvisoryBoardCards

// export const AdvisoryBoardCards = (props) => {
//   const { name, position, image } = props;
//   return (
//     <Card>
//       <Card.Img as={Image} src={image} fluid={true} alt="Card image" />
//       <Card.ImgOverlay>
//         <Card.Name> {name} </Card.Name>
//         <Card.Position> {position} </Card.Position>
//         <Img fluid={image} />
//       </Card.ImgOverlay>
//     </Card>
//   );
// };

// <div className="cards" key={id}>
//   <img src={image} className="w-25 mb-4" alt="..." />
//   <h6 className="">{position}</h6>
//   <div className="card-body">
//     <p className="card-text mb-4">{text}</p>

// </div>;

// export const AdvisoryBoardCards = ( props ) =>
// {
//   const { name, position, image } = props;
//   return (
//     <Card className="bg-success text-white">
//       <Card.Img
//         src="image"
//         alt="Card image"
//       />
//       <Card.ImgOverlay>
//         <Card.Name>{ name }</Card.Name>
//         <Card.Position>
//           { position }
//         </Card.Position>

//         </a>
//     </Card>
//   );
// };
