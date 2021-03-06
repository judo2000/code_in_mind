import "./footer.styles.css";
const Footer = () => {
  return (
    <footer id="footer" className="footer text-center">
      <div className="row">
        <div className="col l12">
          <p className="white-text"></p>
          <a
            className="hoverable"
            href="https://linktr.ee/matthewbrignola"
            target="_blank"
            rel="noreferrer"
          >
            Matt Brignola
          </a>{" "}
          |
          <a
            className="hoverable"
            href="https://linktr.ee/AndrewMcInally"
            target="_blank"
            rel="noreferrer"
          >
            Andrew Mclnally
          </a>{" "}
          |
          <a
            className="hoverable"
            href="https://linktr.ee/stephensmoore"
            target="_blank"
            rel="noreferrer"
          >
            Stephen Moore
          </a>{" "}
          |
          <a
            className="hoverable"
            href="https://linktr.ee/jenya10016"
            target="_blank"
            rel="noreferrer"
          >
            Jenya Seletsky
          </a>
          <h5 className="white-text">
            Code in Mind All Rights Reserved @ 2022
          </h5>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
