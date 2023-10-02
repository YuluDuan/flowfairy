import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { days_one } from "@/app/font";

const Contact = () => {
  return (
    <div
      id="contact"
      className="purple_bg3 flex flex-col items-center justify-center py-20 px-20 border-b border-gray-100"
    >
      <p className={`text-3xl ${days_one.className} leading-normal`}>
        Contact and Support
      </p>

      <p className="pb-20 text_class">
        User-centric design tailored for professionals, educators, researchers,
        and anyone seeking a more efficient and creative way to work.
      </p>
      <div className="contact_options">
        <article className="contact_option">
          <MdOutlineMailOutline className="contact_option-icon" />
          <h4>Email</h4>
          <h5>efyulu@student.ubc.ca</h5>
          {/* eamil will be auto populate */}
          <a href="mailto:efyulu@student.ubc.ca">Send a Message</a>
        </article>

        <article className="contact_option">
          <FaLinkedin className="contact_option-icon" />
          <h4>Linkedin</h4>
          <h5>Yulu Duan</h5>
          {/* eamil will be auto populate */}
          <a href="https://www.linkedin.com/in/yuluduan/" target="_blank">
            Send a Message
          </a>
        </article>

        <article className="contact_option">
          <BsInstagram className="contact_option-icon" />
          <h4>Instagram</h4>
          <h5>lucy_duan1025</h5>
          {/* eamil will be auto populate */}
          <a href="https://www.instagram.com/lucy_duan1025/" target="_blank">
            Send a Message
          </a>
        </article>
      </div>
    </div>
  );
};

export default Contact;
