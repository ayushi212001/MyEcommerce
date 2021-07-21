import React from 'react';
import { Card, CardBody } from 'reactstrap';

const IntroductionFeatures = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">terms and conditions</h5>
      </div>
      
      <p>
        Here is our discord server!&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://discord.gg/8aJkBc8gFN"
        >
          Click here to join now.
        </a>
      </p>
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://discord.gg/8aJkBc8gFN"
        >
          Discord server;
        </a>
      </p>

    
      
      <div className="card__title">
        <h5 className="bold-text">T&C apply</h5>
      </div>
      <ul>
        <li>Information about our products</li>
        <li>contact us</li>
        <li>facilities</li>
        <li>age restrictions</li>
        
      </ul>
    </CardBody>
  </Card>
);

export default IntroductionFeatures;
