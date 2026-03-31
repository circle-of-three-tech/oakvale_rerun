'use client';

export default function Geography() {
  return (
    <section className="geography">
      <div className="geography-inner">
        <div>
          <div className="section-label">Where we work</div>
          <h2 className="section-title">Rooted in Africa.<br /><em>Connected globally.</em></h2>
          <p className="section-body" style={{ marginTop: '1.5rem' }}>
            We work across Sub-Saharan Africa, with particular depth in West Africa and East Africa. Our programmes are designed to travel: the methodology scales, the contextualisation is always local.
          </p>
          <div className="region-list">
            {[
              { region: 'West Africa', detail: 'Nigeria, Ghana, Sierra Leone, Liberia, Côte d\'Ivoire' },
              { region: 'East Africa', detail: 'Kenya, Uganda, Tanzania, Rwanda, Ethiopia' },
              { region: 'Southern Africa', detail: 'South Africa, Zimbabwe, Zambia, Malawi' },
              { region: 'North Africa', detail: 'Egypt, Morocco (emerging presence)' },
            ].map((r, i) => (
              <div className="region-item" key={i}>
                <div className="region-dot" />
                <div className="region-text">
                  {r.region}
                  <span>{r.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="focus-box">
            <h3>Our African Focus</h3>
            <p>We are not a global consultancy with an Africa practice. Africa is our focus, our expertise and our commitment. Every programme we design is built for the specific workforce, institutional and infrastructure realities of the contexts in which we work.</p>
            <div className="focus-stats">
              <div className="focus-stat"><div className="num">12+</div><div className="lbl">Countries Active</div></div>
              <div className="focus-stat"><div className="num">50k+</div><div className="lbl">Learners Reached</div></div>
              <div className="focus-stat"><div className="num">15+</div><div className="lbl">Years Experience</div></div>
              <div className="focus-stat"><div className="num">4</div><div className="lbl">Regional Hubs</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
