import React from 'react';
import { Card, CardBody } from 'reactstrap';

const InstallationSteps = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Installation</h5>
      </div>
    
      <p>To get started follow this steps:</p>
      <ol>
        <li>Download and open project.</li>
        <li>Install packages:</li>
        <li>Start the app locally: </li>
        <li>Make necessary changes.</li>
      </ol>
      <p><b>Video instruction:</b></p>
      <div className="video-instruction-wrap">
        <iframe
          src="https://player.vimeo.com/video/296369527"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Install video"
          className="video-instruction"
        />
      </div>
    </CardBody>
  </Card>
);

export default InstallationSteps;
