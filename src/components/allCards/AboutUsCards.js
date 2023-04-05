// advisoryBoardCards
// ourTeamsCards
// coreValuesCards
// import "../../sassfiles/components/allCards/_AboutUsCards.scss";

import Card from "react-bootstrap/Card";
import ValuesData from "../../data/allCards/dashboardCards.json";
import teamData from "../../data/allCards/teamCard.json";

// import danielcraig from "../../assets/images/danielcraig.png";
// import judithfanika from "../../assets/images/judithfanika.png";
// import somieylofty from "../../assets/images/somieylofty.png";

export const CoreValuesCards = (props) => {
  const { image, title, text, id } = props;
  return (
    <>
      <Card
        border="light"
        style={{ width: "22rem" }}
        className="mx-auto mb-5 py-5 testimonialBoxShadow"
      >
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

export const Team = (props) => {
  const { image, name, role, about } = props;
  return (
    <>
      {/* <div className="px-3"> */}{" "}
      <div className="col-lg-3 col-md-3 col-sm-12 text-center">
        <img src={image} className="img-fluid" />
        <div className="text-center mt-3">
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
      </div>
      <div className="col-lg-9 col-md-9 col-sm-12 d-flex align-item-center mt-lg-5 pt-lg-3">
        <p className="mx-3">{about}</p>
      </div>
      {/* </div> */}
      {/* <div className="px-3">
        {" "}
        <div className="container pt-3 px-5">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 text-center">
              <img src={judithfanika} width="230rem" />
              <div className="text-center">
                <h4>Judith Fanika</h4>
                <p>Head of Operations</p>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12 mt-5 align-item-center">
              <p>
                Daniel has over 5 years of Management and Operations experience,
                including recent work as a strategy consultant for coworking
                office operators. As Operator Relations Manager of the Americas
                for the largest flexible office advisory firm globally, the
                Instant Group, Rubin managed a portfolio of over 4,500 office
                center partnerships representing hundreds of millions of dollars
                in real estate value throughout North and South America
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-3">
        {" "}
        <div className="container pt-3 px-5">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 text-center">
              <img src={somieylofty} width="250rem" />
              <div className="text-center">
                <h4>Somiey Lofty</h4>
                <p>Vice President & Development Officer</p>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12 mt-5 align-item-center">
              <p>
                Daniel has over 5 years of Management and Operations experience,
                including recent work as a strategy consultant for coworking
                office operators. As Operator Relations Manager of the Americas
                for the largest flexible office advisory firm globally, the
                Instant Group, Rubin managed a portfolio of over 4,500 office
                center partnerships representing hundreds of millions of dollars
                in real estate value throughout North and South America
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export const TeamCard = () => {
  return (
    <>
      <div className="container-fluid pt-3 px-lg-5">
        <h3 className="text-center py-4">Team</h3>
        {teamData.teamData.map((team) => {
          return (
            <>
              <div className="row d-flex" key={team.id}>
                <Team {...team} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export const AdvisoryBoardOnHoverCard = (props) => {
  const { image, name, position, link } = props;
  return (
    <>
      <Card
        style={{ width: "18rem" }}
        className="advisoryCard testimonialBoxShadow"
      >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{position}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </>
  );
};
// export const AdvisoryBoardOnHoverCard = (props) => {
//   const { image, name, position, link } = props;
//   return (
//     <>
//       <div className="AdvisoryImage">
//         {" "}
//         <img src={image} alt="" />
//         <h6 className="AdvisoryName">{name}</h6>
//         <h6 className="AdvisoryPosition">{position}</h6>
//         {/* <div className="AdvisoryLink">
//           <a
//             className="btn"
//             href={link}
//             role="button"
//             style={{ color: "#fff" }}
//           >
//             <LinkedInIcon />
//           </a>
//         </div> */}
//       </div>
//     </>
//   );
// };
