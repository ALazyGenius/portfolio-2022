import React from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/ALazyGenius" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://facebook.com/akash.mishra.733/" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/the_lazygenius/" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
