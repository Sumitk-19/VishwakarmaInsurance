import {
  FaShieldAlt,
  FaIdCard,
  FaCar,
  FaPassport
} from "react-icons/fa";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>

        <div className="services-grid">

          {/* INSURANCE */}
          <a href="#contact" className="service-card">
            <div className="service-icon">
              <FaShieldAlt />
            </div>

            <h3>Insurance Services</h3>
            <p>
              Professional guidance to help you choose the right insurance
              coverage with complete transparency.
            </p>

            <ul>
              <li>Life & Health Insurance</li>
              <li>Motor & Vehicle Insurance</li>
              <li>Renewal & Claims Support</li>
            </ul>
          </a>

          {/* DRIVING LICENSE */}
          <a href="#contact" className="service-card">
            <div className="service-icon">
              <FaIdCard />
            </div>

            <h3>Driving License</h3>
            <p>
              End-to-end assistance for driving license related services with
              accurate documentation.
            </p>

            <ul>
              <li>New DL Application</li>
              <li>Renewal & Duplicate DL</li>
              <li>Details & Address Update</li>
            </ul>
          </a>

          {/* VEHICLE SERVICES */}
          <a href="#contact" className="service-card">
            <div className="service-icon">
              <FaCar />
            </div>

            <h3>Vehicle Services</h3>
            <p>
              Hassle-free vehicle documentation services handled securely and
              professionally.
            </p>

            <ul>
              <li>RC Transfer & Correction</li>
              <li>Ownership Change</li>
              <li>Vehicle Insurance Support</li>
            </ul>
          </a>

          {/* PASSPORT */}
          <a href="#contact" className="service-card">
            <div className="service-icon">
              <FaPassport />
            </div>

            <h3>Passport Services</h3>
            <p>
              Complete support for passport applications with proper guidance
              and timely processing.
            </p>

            <ul>
              <li>New Passport Application</li>
              <li>Renewal & Re-issue</li>
              <li>Appointment Assistance</li>
            </ul>
          </a>

        </div>
      </div>
    </section>
  );
}
