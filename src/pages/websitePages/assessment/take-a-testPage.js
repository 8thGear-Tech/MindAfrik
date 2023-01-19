import Card from "react-bootstrap/Card";
import howItWorksDatas from "../../data/homePageCards.json";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import SyncLockIcon from "@mui/icons-material/SyncLock";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import CardIcon from "../../assets/images/jeremy-perkins-UgNjyPkphtU-unsplash.jpg";

export const HowItWorksCard = (props) => {
  const { title, text } = props;
  return (
    <>
      <div className="">
        <div className="container-fluid WorksCard ">
          <Card style={{ width: "20rem" }}>
            <Row>
              <Card.Body>
                <CreateNewFolderIcon sx={{ fontSize: 40 }} />
                <Card.Title>
                  <h4> {title} </h4>
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "1rem",
                    fontWeight: 300,
                    lineHeight: "1.75rem",
                    fontFamily: "Comfortaa",
                  }}
                >
                  {text}
                </Card.Text>
                <Card.Link
                  style={{
                    fontFamily: "Montserrat" && "sans-serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                  href="#"
                >
                  Read More
                </Card.Link>
              </Card.Body>
            </Row>
          </Card>
        </div>
      </div>
    </>
  );
};

export const WhyChooseUsCard = () => {
  return (
    <>
      <div className="ChooseCard container-fluid mt-5">
        <div className="whychooseus-card1">
          <Card className="Card1" style={{ width: "20 rem" }}>
            <Card.Img
              src={CardIcon}
              className="mt-3"
              style={{
                maxHeight: "100px",
                maxWidth: "100px",
              }}
            />
            <Card.Body>
              <Card.Title>
                <h4> Safe & Secure </h4>
              </Card.Title>
              <Card.Text
                style={{
                  fontSize: "1rem",
                  fontWeight: 300,
                  lineHeight: "1.75rem",
                  fontFamily: "Comfortaa",
                }}
              >
                As Head of Operations.Daniel is responsible for working with
                franchisees on all aspects of marketing strategy including
                digital, public relations, website, etc.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="whychooseus-card2">
          <Card className="Card1" style={{ width: "20 rem" }}>
            <Card.Img
              src={CardIcon}
              className="ChooseImage pt-3"
              style={{
                maxHeight: "100px",
                maxWidth: "100px",
              }}
            />
            <Card.Body>
              <Card.Title>
                <h4> Standardized Sessions</h4>
              </Card.Title>
              <Card.Text
                style={{
                  fontSize: "1rem",
                  fontWeight: 300,
                  lineHeight: "1.75rem",
                  fontFamily: "Comfortaa",
                }}
              >
                As Head of Operations.Daniel is responsible for working with
                franchisees on all aspects of marketing strategy including
                digital, public relations, website, etc.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="whychooseus-card3">
          <Card className="Card1" style={{ width: "20 rem" }}>
            <Card.Img
              src={CardIcon}
              className="ChooseImage pt-3"
              style={{
                maxHeight: "100px",
                maxWidth: "100px",
              }}
            />
            <Card.Body>
              <Card.Title>
                <h4> Quality Counsellors </h4>
              </Card.Title>
              <Card.Text
                style={{
                  fontSize: "1rem",
                  fontWeight: 300,
                  lineHeight: "1.75rem",
                  fontFamily: "Comfortaa",
                }}
              >
                As Head of Operations.Daniel is responsible for working with
                franchisees on all aspects of marketing strategy including
                digital, public relations, website, etc.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="whychooseus-card4">
          <Card className="Card1" style={{ width: "20 rem" }}>
            <Card.Img
              src={CardIcon}
              className="ChooseImage pt-3"
              style={{
                maxHeight: "100px",
                maxWidth: "100px",
              }}
            />
            <Card.Body>
              <Card.Title>
                <h4> Quality Psychologists</h4>
              </Card.Title>
              <Card.Text
                style={{
                  fontSize: "1rem",
                  fontWeight: 300,
                  lineHeight: "1.75rem",
                  fontFamily: "Comfortaa",
                }}
              >
                As Head of Operations.Daniel is responsible for working with
                franchisees on all aspects of marketing strategy including
                digital, public relations, website, etc.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};
export const TestimonialsCard = (props) => {
  const { title, subtitle, text } = props;
  return (
    <>
      <Carousel>
        <Carousel.Item slide={false}>
          <div className="row d-flex justify-content-center">
            <Card
              className="col-3 m-5 CardTestimony"
              style={{
                borderBottomLeftRadius: " 3rem",
                borderTopRightRadius: "3rem",
                border: "10px",
              }}
            >
              <Card.Body>
                <Card.Title>
                  <h4>UserName</h4>
                </Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 300,
                    lineHeight: "1.75rem",
                    fontFamily: "Comfortaa",
                  }}
                >
                  Location
                </Card.Subtitle>
                <Card.Text>
                  We provide access thousand of inspirational materials for
                  healthy and stable mind. As Head of Operations.Daniel is
                  responsible for working with franchisees on all aspects of
                  marketing strategy including digital, public relations,
                  website, etc
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="col-3 m-5 CardTestimony"
              style={{
                borderBottomLeftRadius: " 3rem",
                borderTopRightRadius: "3rem",
              }}
            >
              <Card.Body>
                <Card.Title>
                  <h4>UserName</h4>
                </Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 300,
                    lineHeight: "1.75rem",
                    fontFamily: "Comfortaa",
                  }}
                >
                  Location
                </Card.Subtitle>
                <Card.Text>
                  We provide access thousand of inspirational materials for
                  healthy and stable mind. As Head of Operations.Daniel is
                  responsible for working with franchisees on all aspects of
                  marketing strategy including digital, public relations,
                  website, etc
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="col-3 m-5 CardTestimony"
              style={{
                borderBottomLeftRadius: " 3rem",
                borderTopRightRadius: "3rem",
              }}
            >
              <Card.Body>
                <Card.Title>
                  <h4>Username</h4>
                </Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 300,
                    lineHeight: "1.75rem",
                    fontFamily: "Comfortaa",
                  }}
                >
                  Location
                </Card.Subtitle>
                <Card.Text>
                  We provide access thousand of inspirational materials for
                  healthy and stable mind. As Head of Operations.Daniel is
                  responsible for working with franchisees on all aspects of
                  marketing strategy including digital, public relations,
                  website, etc
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item slide={false}>
          <div className="row d-flex justify-content-center">
            <Card
              className="col-3 m-5 CardTestimony"
              style={{
                borderBottomLeftRadius: " 3rem",
                borderTopRightRadius: "3rem",
              }}
            >
              <Card.Body>
                <Card.Title>
                  <h4>UserName</h4>
                </Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 300,
                    lineHeight: "1.75rem",
                    fontFamily: "Comfortaa",
                  }}
                >
                  Location
                </Card.Subtitle>
                <Card.Text>
                  We provide access thousand of inspirational materials for
                  healthy and stable mind. As Head of Operations.Daniel is
                  responsible for working with franchisees on all aspects of
                  marketing strategy including digital, public relations,
                  website, etc
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="col-3 m-5 CardTestimony"
              style={{
                borderBottomLeftRadius: " 3rem",
                borderTopRightRadius: "3rem",
              }}
            >
              <Card.Body>
                <Card.Title>
                  <h4>Username</h4>
                </Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 300,
                    lineHeight: "1.75rem",
                    fontFamily: "Comfortaa",
                  }}
                >
                  Location
                </Card.Subtitle>
                <Card.Text>
                  We provide access thousand of inspirational materials for
                  healthy and stable mind. As Head of Operations.Daniel is
                  responsible for working with franchisees on all aspects of
                  marketing strategy including digital, public relations,
                  website, etc
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="col-3 m-5 CardTestimony"
              style={{
                borderBottomLeftRadius: " 3rem",
                borderTopRightRadius: "3rem",
              }}
            >
              <Card.Body>
                <Card.Title>
                  <h4>Usernmae</h4>
                </Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 300,
                    lineHeight: "1.75rem",
                    fontFamily: "Comfortaa",
                  }}
                >
                  Location
                </Card.Subtitle>
                <Card.Text>
                  We provide access thousand of inspirational materials for
                  healthy and stable mind. As Head of Operations.Daniel is
                  responsible for working with franchisees on all aspects of
                  marketing strategy including digital, public relations,
                  website, etc
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
        <Carousel.Item slide={false}>
          <div className="row d-flex justify-content-center">
            <Card
              className="col-3 m-5 CardTestimony"
              style={{
                borderBottomLeftRadius: " 3rem",
                borderTopRightRadius: "3rem",
              }}
            >
              <Card.Body>
                <Card.Title>
                  <h4>Usernmae</h4>
                </Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 300,
                    lineHeight: "1.75rem",
                    fontFamily: "Comfortaa",
                  }}
                >
                  Location
                </Card.Subtitle>
                <Card.Text>
                  We provide access thousand of inspirational materials for
                  healthy and stable mind. As Head of Operations.Daniel is
                  responsible for working with franchisees on all aspects of
                  marketing strategy including digital, public relations,
                  website, etc
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="col-3 m-5 CardTestimony"
              style={{
                borderBottomLeftRadius: " 3rem",
                borderTopRightRadius: "3rem",
              }}
            >
              <Card.Body>
                <Card.Title>
                  <h4>Usename</h4>
                </Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 300,
                    lineHeight: "1.75rem",
                    fontFamily: "Comfortaa",
                  }}
                >
                  Location
                </Card.Subtitle>
                <Card.Text>
                  We provide access thousand of inspirational materials for
                  healthy and stable mind. As Head of Operations.Daniel is
                  responsible for working with franchisees on all aspects of
                  marketing strategy including digital, public relations,
                  website, etc
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="col-3 m-5 CardTestimony"
              style={{
                borderBottomLeftRadius: " 3rem",
                borderTopRightRadius: "3rem",
              }}
            >
              <Card.Body>
                <Card.Title>
                  <h4>Username</h4>
                </Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 300,
                    lineHeight: "1.75rem",
                    fontFamily: "Comfortaa",
                  }}
                >
                  Location
                </Card.Subtitle>
                <Card.Text>
                  We provide access thousand of inspirational materials for
                  healthy and stable mind. As Head of Operations.Daniel is
                  responsible for working with franchisees on all aspects of
                  marketing strategy including digital, public relations,
                  website, etc
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
// export const TestimonialsCard = (props) => {
//   const { title, subtitle, text } = props;
//   return (
//     <>
//       <Carousel id="layout">
//         <Carousel.Item interval={1000}>
//           <Card
//             className=""
//             style={{
//               borderBottomLeftRadius: " 3rem",
//               borderTopRightRadius: "3rem",
//               width: "5 rem",
//               height: "20rem",
//             }}
//           >
//             <Card.Body>
//               <Card.Title>
//                 <h4>UserName</h4>
//               </Card.Title>
//               <Card.Subtitle
//                 className="mb-2 text-muted"
//                 style={{
//                   fontSize: "1rem",
//                   fontWeight: 300,
//                   lineHeight: "1.75rem",
//                   fontFamily: "Comfortaa",
//                 }}
//               >
//                 Location
//               </Card.Subtitle>
//               <Card.Text>
//                 We provide access thousand of inspirational materials for
//                 healthy and stable mind. As Head of Operations.Daniel is
//                 responsible for working with franchisees on all aspects of
//                 marketing strategy including digital, public relations, website,
//                 etc
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Carousel.Item>
//         {
//           <Carousel.Item interval={500}>
//             <Card
//               className=""
//               style={{
//                 borderBottomLeftRadius: " 3rem",
//                 borderTopRightRadius: "3rem",
//                 width: "5 rem",
//                 height: "20rem",
//               }}
//             >
//               <Card.Body>
//                 <Card.Title>
//                   <h4> {title}</h4>
//                 </Card.Title>
//                 <Card.Subtitle
//                   className="mb-2 text-muted"
//                   style={{
//                     fontSize: "1rem",
//                     fontWeight: 300,
//                     lineHeight: "1.75rem",
//                     fontFamily: "Comfortaa",
//                   }}
//                 >
//                   {subtitle}
//                 </Card.Subtitle>
//                 <Card.Text>
//                   {" "}
//                   We provide access thousand of inspirational materials for
//                   healthy and stable mind. As Head of Operations.Daniel is
//                   responsible for working with franchisees on all aspects of
//                   marketing strategy including digital, public relations,
//                   website, etc
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Carousel.Item>
//         }
//         {
//           <Carousel.Item interval={500}>
//             <Card
//               className=""
//               style={{
//                 borderBottomLeftRadius: " 3rem",
//                 borderTopRightRadius: "3rem",
//                 width: "5 rem",
//                 height: "20rem",
//               }}
//             >
//               <Card.Body>
//                 <Card.Title>
//                   <h4> UserName </h4>
//                 </Card.Title>
//                 <Card.Subtitle
//                   className="mb-2 text-muted"
//                   style={{
//                     fontSize: "1rem",
//                     fontWeight: 300,
//                     lineHeight: "1.75rem",
//                     fontFamily: "Comfortaa",
//                   }}
//                 >
//                   Location
//                 </Card.Subtitle>
//                 <Card.Text>
//                   {" "}
//                   We provide access thousand of inspirational materials for
//                   healthy and stable mind. As Head of Operations.Daniel is
//                   responsible for working with franchisees on all aspects of
//                   marketing strategy including digital, public relations,
//                   website, etc
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Carousel.Item>
//         }
//       </Carousel>{" "}
//     </>
//   );
// };

export const HowItWorks = () => {
  return (
    <>
      <div className="container">
        <div className="CardWork row text-center justify-content-around ">
          {howItWorksDatas.homepageData.map((Itworks) => {
            return (
              <>
                <div className="col-lg-3 col-md-5 col-sm-12" key={Itworks.id}>
                  <HowItWorksCard {...Itworks} />
                </div>
              </>
            );
          })}
          ;
        </div>
      </div>
    </>
  );
};
// export const WhyChooseUs = () => {
//   return (
//     <>
//       <div className=" container mt-5">
//         <div className="row">
//           {howItWorksDatas.whyChooseUsData.map((WhyChoose) => {
//             return (
//               <>
//                 <div className="col-lg-3 col-md-3 col-sm-3" key={WhyChoose.id}>
//                   <WhyChooseUsCard {...WhyChoose} />
//                 </div>
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };
export const Testimonials = () => {
  return (
    <>
      <div className="container justify-content-center">
        <div className="row">
          {howItWorksDatas.testimonialsData.map((testimony) => {
            return (
              <>
                <div className="col-lg-3 col-md-3 col-sm-3" key={testimony.id}>
                  <TestimonialsCard {...testimony} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
