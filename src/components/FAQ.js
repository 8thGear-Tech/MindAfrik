//external import
import Accordion from "react-bootstrap/Accordion";
// import { useState } from "react";

//internal import
import faQAndA from "../data/components/faq.json";

const FAQMapping = (props) => {
  const { index, eventkey, question, answer } = props;
  return (
    <>
      <Accordion
        className="col-lg-6 col-md-6 col-sm-12"
        // eventKey={index === 0 ? "0" : index}
      >
        <Accordion.Item
        // eventKey={eventkey}
        // eventKey={index === 0 ? "0" : index}
        >
          <Accordion.Header>{question}</Accordion.Header>
          <Accordion.Body>{answer}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};
export const FAQ = () => {
  return (
    <>
      <div className="container-fluid sectionOneBgColor px-5">
        <div className="row py-5 my-5">
          {" "}
          <h3 className="text-center mb-5">Frequently Asked Questions</h3>
          {faQAndA.faQAndA.map((faq) => {
            return (
              <>
                <div className="row d-flex" key={faq.id}>
                  <FAQMapping {...faq} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
// export const FAQ = () => {
//   return (
//     <>
//       <div className="container-fluid sectionOneBgColor px-5">
//         <div className="row py-5 my-5">
//           {" "}
//           <h3 className="text-center mb-5">Frequently Asked Questions</h3>
//           <Accordion className="col-lg-6 col-md-6 col-sm-12">
//             <Accordion.Item eventKey="0">
//               <Accordion.Header>question</Accordion.Header>
//               <Accordion.Body>answer</Accordion.Body>
//             </Accordion.Item>
//           </Accordion>
//         </div>
//       </div>
//     </>
//   );
// };
