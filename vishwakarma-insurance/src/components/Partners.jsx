export default function Partners() {
  const logos = [
    'tata-aig.png',
    'icici-lombard.png',
    'go-digit.png',
    'hdfc-ergo.png',
    'national-insurance.png',
    'bajaj-allianz.png'
  ]

  return (
    <section className="partners" id="partners">
      <div className="container">
        <h2 className="section-title">Our Insurance Partners</h2>
        <div className="logo-slider">
          <div className="logo-track">
           {[...logos, ...logos].map((logo, index) => (
           <div className="logo-item" key={index}>
            <img src={`/logos/${logo}`} alt="Insurance Partner" />
           </div>
       ))}
          </div>
       </div>

      </div>
    </section>
  )
}
