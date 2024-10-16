import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./PricingCardStyles.css";

const PricingCard = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/pricing-plans/')
      .then(response => response.json())
      .then(data => setPlans(data));
  }, []);

  return (
    <div className="Pricing">
      <div className="Card-Container">
        {plans.map(plan => (
          <div className="Card" key={plan.id}>
            <h3>- {plan.plan_name} -</h3>
            <span className="bar"></span>
            <p className="btc">${plan.price}</p>
            <p>- {plan.duration} -</p>
            <p>{plan.features.split('\n').map((feature, index) => <p key={index}>- {feature} -</p>)}</p>
            <Link to="/Contact" className="btn">PURCHASE NOW</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
