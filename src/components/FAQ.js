//external import
import Accordion from "react-bootstrap/Accordion";
// import { useState } from "react";

//internal import
import faQAndA from "../data/components/faq.json";

// const FAQMapping = (props) => {
//   const { index, eventkey, question, answer } = props;
//   return (
//     <>
//       <Accordion className="col-lg-6 col-md-6 col-sm-12">
//         <Accordion.Item>
//           <Accordion.Header>{question}</Accordion.Header>
//           <Accordion.Body>{answer}</Accordion.Body>
//         </Accordion.Item>
//       </Accordion>
//     </>
//   );
// };
// export const FAQ = () => {
//   return (
//     <>
//       <div className="container-fluid sectionOneBgColor px-5">
//         <div className="row py-5 my-5">
//           {" "}
//           <h3 className="text-center mb-5">Frequently Asked Questions</h3>
//           {faQAndA.faQAndA.map((faq) => {
//             return (
//               <>
//                 <div className="row d-flex" key={faq.id}>
//                   <FAQMapping {...faq} />
//                 </div>
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };
export const FAQ = () => {
  return (
    <>
      <div className="container-fluid sectionOneBgColor px-4">
        <div className="row py-5">
          {" "}
          <h3 className="text-center mb-5">Frequently Asked Questions</h3>
          <Accordion className="col-lg-6 col-md-6 col-sm-12">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What is therapy and how does it work?
              </Accordion.Header>
              <Accordion.Body>
                Therapy is a process of talking with a trained mental health
                professional to address emotional or psychological difficulties.
                It works by providing a safe and supportive space for
                individuals to explore their thoughts, feelings, and
                experiences. The goal is to help individuals gain insight, learn
                coping skills, and improve their overall well-being. At
                Mindafrik, We assist in the ways and manners that people view
                their mental health and help them tackle life’s challenges by
                providing accessible, confidential and qualitative care.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="my-4">
              <Accordion.Header>
                How often will I need to attend therapy sessions?
              </Accordion.Header>
              <Accordion.Body>
                The frequency of therapy sessions can vary depending on
                individual needs and goals. Some people attend therapy once a
                week, while others may only need a few sessions. When you
                subscribe with Mindafrik, your therapist can discuss a treatment
                plan with you.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="my-4">
              <Accordion.Header>What can therapy help with?</Accordion.Header>
              <Accordion.Body>
                Therapy can help with a wide range of issues, including but not
                limited to: depression, anxiety, relationship problems, stress,
                trauma, grief, addiction, and self-esteem.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="my-4">
              <Accordion.Header>
                How long does therapy usually last?
              </Accordion.Header>
              <Accordion.Body>
                The length of therapy varies depending on the individual and
                their specific needs. Some individuals may only need a few
                sessions, while others may benefit from ongoing therapy.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="my-4">
              <Accordion.Header>
                What is the difference between individual therapy and group
                therapy?
              </Accordion.Header>
              <Accordion.Body>
                Individual therapy involves working one-on-one with a therapist,
                while group therapy involves participating in a therapy session
                with a small group of individuals facing similar issues.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className="col-lg-6 col-md-6 col-sm-12">
            <Accordion.Item eventKey="5">
              <Accordion.Header>How much does therapy cost?</Accordion.Header>
              <Accordion.Body>
                The cost of therapy varies depending on the therapist's
                experience, location, and the type of therapy being provided.
                The cost of therapy through MindAfrik,depends on the
                mode(physical / e-therapy) you want to opt for. We also check if
                it is on individual, couple or group booking. Kindly find our
                rate card HERE.(the here button should lead them to our rate
                card).
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" className="my-4">
              <Accordion.Header>
                What should I look for in a therapist?
              </Accordion.Header>
              <Accordion.Body>
                When searching for a therapist, it's important to look for
                someone who is licensed and has experience in the specific
                issues you're seeking help with. It's also important to look for
                a therapist who has a good reputation, is a good listener, and
                makes you feel comfortable.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7" className="my-4">
              <Accordion.Header>
                How do I prepare for my first therapy session?
              </Accordion.Header>
              <Accordion.Body>
                Preparing for your first therapy session involves thinking about
                what you'd like to discuss and what your goals for therapy are.
                It's also helpful to write down any specific questions you have
                for your therapist.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8" className="my-4">
              <Accordion.Header>Is therapy confidential?</Accordion.Header>
              <Accordion.Body>
                In general, therapy is confidential, meaning that the
                information you share with your therapist is protected by
                privacy laws. However, there are certain exceptions, such as if
                you disclose intentions to harm yourself or others. In general
                consideration, at MindAfrik, we ensure your information is kept
                highly confidential and secured.You can express yourself freely
                with full trust and openness. MindAfrik provides you the
                platform for you to be your own trueself without mask and fear
                of being judged.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9" className="my-4">
              <Accordion.Header>
                Can therapy be done online or over the phone?
              </Accordion.Header>
              <Accordion.Body>
                Yes, therapy can be done online or over the phone through
                teletherapy. This can be a convenient option for individuals who
                have trouble accessing in-person therapy or prefer to have
                therapy from the comfort of their own home.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};
