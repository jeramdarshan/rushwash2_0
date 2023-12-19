import React from 'react';

function Services() {
  return (
    <div className="services" id="services">
      <h1>Our Services</h1>
      <div className="services__wrapper">
        <ServiceCard 
          title="The RUSH WASH " 
          description="Foam wash, dry, interior clean, vacuum, tyre polish, 
                        windows inside & outside, car perfume" 
          price="Car: R150 || SUV: R180"/>
        <ServiceCard 
          title="Professional Detail" 
          description="The RUSH WASH + Hand polish" 
          price="Car: R250 || SUV: R280"/>
        <ServiceCard 
          title="Premium Detail" 
          description="The RUSH WASH + Hand polish, clay bar decontamination, 
                        Ceramic coating(6 month protection), Exhaust tip polish" 
          price="Car: R400 || SUV: R450"/>
        <ServiceCard 
          title="Elite Detail" 
          description="The RUSH WASH, clay bar decontamination, 1 stage machine polish,
                        Ceramic coating(6 month protection), Exterior trim shine,
                        Exhaust tip polish" 
          price="Car: R700 || SUV: R800"/>
        <ServiceCard 
          title="Seat Clean Package" 
          description="The RUSH WASH, Deep seat cleaning, Exterior trim shine" 
          price="Car: R450 || SUV: R550"/>
        <ServiceCard 
          title="Full Valet" 
          description="The RUSH WASH, Hand polish, Exterior trim shine, Deep seat cleaning
                        Engine bay detail, Deep cleaning of carpets, 
                        Deep cleaning of loose mats and roof lining" 
          price="Car: R750 || SUV: R850"/>
        <ServiceCard 
          title="Custom package" 
          description="Design your own package and we will quote you" />
        <ServiceCard 
          title="Additional" 
          description="polishing" 
          price="R500"/>
      </div>
    </div>
  );
}

function ServiceCard({ title, description, price }) {
  return (
    <div className="services__card">
      <h1>{title}</h1>
      <p>{description}</p>
      <p2>{price}</p2>
      {/* <div className="services__btn">
        <button>More information</button>
      </div> */}
    </div>
  );
}

export default Services;
