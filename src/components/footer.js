import mindafrikfulllogo from "../assets/images/logo/mindafrik-full-logo-250.png";

//icons
import { FacebookIcon } from "../assets/icons/socialIcons";
import { Instagramicon } from "../assets/icons/socialIcons";
import { LinkedInicon } from "../assets/icons/socialIcons";
import { Twittericon } from "../assets/icons/socialIcons";

export const Footer = () => {
  return (
    <>
      <div class="container-fluid justify-content-center aboutHeroColor">
        {/* row-cols-1 row-cols-sm-2 row-cols-md-5 */}
        <footer class="row pt-5 mt-5 d-flex justify-content-between">
          <div class="col-lg-3 col-md-12 col-sm-6 col-xs-6 mb-3">
            <a
              href="/"
              class="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <img
                src={mindafrikfulllogo}
                className="d-inline-block align-top"
                alt="MindAfrik logo"
              />
            </a>
          </div>

          {/* <div class="col mb-3"></div> */}

          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 mb-3">
            <h5>Connect</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  info@mindafrik.com
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  +2349060845747
                </a>
              </li>
              <div className="d-flex">
                {" "}
                <li class="nav-item mb-2">
                  <a
                    href="https://www.facebook.com/MindAfrik"
                    target="_blank"
                    class="nav-link p-0 text-muted"
                  >
                    <FacebookIcon />
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a
                    href="/ https://instagram.com/mindafrik?igshid=YmMyMTA2M2Y="
                    target="_blank"
                    class="nav-link p-0 text-muted"
                  >
                    <Instagramicon />
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a
                    href="https://www.linkedin.com/company/mindafrik/"
                    target="_blank"
                    class="nav-link p-0 text-muted"
                  >
                    <LinkedInicon />
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a
                    href="https://twitter.com/mindafrik?s=20&t=wJssKKGPPBQ78zV-gvl6Rg "
                    target="_blank"
                    class="nav-link p-0 text-muted"
                  >
                    <Twittericon />
                  </a>
                </li>
              </div>
            </ul>
          </div>

          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 mb-3">
            <h5>Legal Stuff</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="/disclaimer" class="nav-link p-0 text-muted">
                  Disclaimer
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="/privacyPolicy" class="nav-link p-0 text-muted">
                  Privacy Policy
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="/termsOfService" class="nav-link p-0 text-muted">
                  Terms Of Service
                </a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 mb-3">
            <h5>Useful links</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="/" class="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="/FAQ" class="nav-link p-0 text-muted">
                  FAQ
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="/about" class="nav-link p-0 text-muted">
                  About Us
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="/" class="nav-link p-0 text-muted">
                  Contact Us
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="/psychologicalAssessment"
                  class="nav-link p-0 text-muted"
                >
                  Take a test
                </a>
              </li>
            </ul>
          </div>
        </footer>
        <div class="d-flex flex-column flex-sm-row justify-content-center py-4 border-top">
          <p>Copyright © 2023 mindAfrik inc.</p>
          {/* <ul class="list-unstyled d-flex">
        <li class="ms-3">
          <a class="link-dark" href="#">
            <svg class="bi" width="24" height="24">
              <use xlink:href="#twitter" />
            </svg>
          </a>
        </li>
        <li class="ms-3">
          <a class="link-dark" href="#">
            <svg class="bi" width="24" height="24">
              <use xlink:href="#instagram" />
            </svg>
          </a>
        </li>
        <li class="ms-3">
          <a class="link-dark" href="#">
            <svg class="bi" width="24" height="24">
              <use xlink:href="#facebook" />
            </svg>
          </a>
        </li>
      </ul> */}
        </div>
      </div>
    </>
  );
};
