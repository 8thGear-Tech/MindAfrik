//external import
import Accordion from "react-bootstrap/Accordion";

//internal import
import faQAndA from "../data/components/faq.json";

const FAQMapping = (props) => {
  const { eventkey, question, answer } = props;
  return (
    <>
      {/* <div className="container-fluid sectionOneBgColor px-5">
        <div className="row py-5 my-5">
          {" "}
          <h3 className="text-center mb-5">Frequently Asked Questions</h3> */}
      {/* <div className="justify-content-center text-center"> */}
      <Accordion className="col-lg-6 col-md-6 col-sm-12">
        <Accordion.Item eventKey={eventkey}>
          <Accordion.Header>{question}</Accordion.Header>
          <Accordion.Body>{answer}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* </div>
      </div> */}
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
