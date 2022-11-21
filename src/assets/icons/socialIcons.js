import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailIcon from "@mui/icons-material/Mail";

export const FacebookIcon = () => {
  return (
    <>
      <a
        href="https://www.facebook.com/MindAfrik"
        target="_blank"
        className="paragraphColor"
      >
        {" "}
        <FacebookOutlinedIcon className="mx-1" />
      </a>
    </>
  );
};
export const Instagramicon = () => {
  return (
    <>
      <a
        href="https://instagram.com/mindafrik?igshid=YmMyMTA2M2Y="
        target="_blank"
        className="paragraphColor"
      >
        {" "}
        <InstagramIcon className="mx-1" />
      </a>
    </>
  );
};
export const LinkedInicon = () => {
  return (
    <>
      <a
        href="https://www.linkedin.com/company/mindafrik/"
        target="_blank"
        className="paragraphColor"
      >
        {" "}
        <LinkedInIcon className="mx-1" />
      </a>
    </>
  );
};

export const Twittericon = () => {
  return (
    <>
      <a
        href="https://twitter.com/mindafrik?s=20&t=wJssKKGPPBQ78zV-gvl6Rg"
        target="_blank"
        className="paragraphColor"
      >
        {" "}
        <TwitterIcon className="mx-1" />
      </a>
    </>
  );
};
export const PhoneIcon = () => {
  return (
    <>
      <PhoneInTalkIcon />
    </>
  );
};
export const Mailicon = () => {
  return (
    <>
      <MailIcon />
    </>
  );
};
