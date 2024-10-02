const Footer = () => {
  return (
    <footer>
      <div className="soc">
        {/* <a target="_blank" href="https://dribbble.com/">
          <span className="ion ion-social-dribbble" />
        </a> */}
        <a target="_blank" href="https://twitter.com/jasonwonimidei">
          <span className="ion ion-social-twitter" />
        </a>
        <a target="_blank" href="https://github.com/oantonedei">
          <span className="ion ion-social-github" />
        </a>
        <a target="_blank" href="https://www.instagram.com/jasonwonimidei">
          <span className="ion ion-social-instagram-outline" />
        </a>
      </div>
      <div className="copy">
        © {new Date().getFullYear()} Antonedei Otoro. All rights reserved.
      </div>
      <div className="clr" />
    </footer>
  );
};
export default Footer;
