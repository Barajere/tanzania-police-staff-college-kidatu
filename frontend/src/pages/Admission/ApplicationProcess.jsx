import "./ApplicationProcess.css";
import commandant from "../../assets/commandant.png";

const ApplicationProcess = () => {
  return (
    <div className="application-page">
      <div className="application-container">
        {/* LEFT CONTENT */}
        <div className="application-content">
          <h1>Admission Procedure</h1>

          <h3>Get in Touch</h3>
          <p>
            All enquiries about admission to Zanzibar police college should
            be addressed to the Commandant office.
          </p>

          <div className="address-card">
            <h4>Address</h4>
            <p><strong>The Commandant – ZPC</strong></p>
            <p>P.O. Box 2503, Zanzibar</p>
            <p>Tel: +255 022 285 0067</p>
            <p>Fax: +255 022 285 0514</p>
            <p>
              E-mail:{" "}
              <a href="mailto:co.dpa@pf.go.tz">co.zpc@pf.go.tz</a>
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE — div ndogo inashikilia picha + caption pamoja */}
        <div className="application-image-col">
          <div className="image-wrapper">
            <img src={commandant} alt="Commandant ZPC" />
            <p className="image-caption">
              Commandant – Zanzibar police college
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ApplicationProcess;
