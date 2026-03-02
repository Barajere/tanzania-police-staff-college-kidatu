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
            All enquiries about admission to Tanzania police Staff college should
            be addressed to the Commandant office.
          </p>

          <div className="address-card">
            <h4>Address</h4>
            <p><strong>The Commandant – TPSC</strong></p>
            <p>P.O. Box 400, Tanzania</p>
            <p>Tel: +255 73 900 9974</p>
            <p>Fax: +255 022 285 0514</p>
            <p>
              E-mail:{" "}
              <a href="mailto:co.tpsc@pf.go.tz">co.tpsc@pf.go.tz</a>
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE — div ndogo inashikilia picha + caption pamoja */}
        <div className="application-image-col">
          <div className="image-wrapper">
            <img src={commandant} alt="Commandant ZPC" />
            <p className="image-caption">
              Commandant – Tanzania police Staff college
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ApplicationProcess;
