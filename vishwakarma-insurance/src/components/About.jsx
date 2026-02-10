export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-content">

        {/* LEFT CONTENT */}
        <div className="about-text">
          <h2>Reliable Insurance. Transparent Process. Real Support.</h2>

          <p>
            At <strong>Vishwakarma Insurance</strong>, we don’t just sell policies — 
            we help you make confident financial decisions. Our focus is on 
            protecting what matters most to you through the right insurance coverage 
            and a transparent, hassle-free process.
          </p>

          <p>
            From policy selection to documentation and post-sale support, 
            our team ensures every step is clear, compliant, and tailored 
            to your needs. We work only with trusted, IRDAI-approved insurance 
            providers to deliver long-term security and peace of mind.
          </p>

          <div className="about-highlights">
            <div>
              <h3>100%</h3>
              <span>Transparent Process</span>
            </div>
            <div>
              <h3>IRDAI</h3>
              <span>Approved Partners</span>
            </div>
            <div>
              <h3>Dedicated</h3>
              <span>Customer Support</span>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-card">
          <h3>Why Clients Trust Us</h3>
          <ul>
            <li>✔ Expert insurance guidance based on your real needs</li>
            <li>✔ No hidden charges or misleading commitments</li>
            <li>✔ Fast processing with complete documentation support</li>
            <li>✔ Assistance beyond policy purchase</li>
            <li>✔ Trusted partnerships with leading insurers</li>
          </ul>
        </div>

      </div>
    </section>
  )
}
