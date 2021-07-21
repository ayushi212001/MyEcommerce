import React from 'react';
import PropTypes from 'prop-types';
import { CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom';

const navigationLinksData = [
  { link: 'introduction', title: 'Home' },
  { link: 'installation', title: 'Product' },
  { link: 'file_structure', title: 'Seller' },
  { link: 'components', title: 'Account' },
  { link: 'form', title: 'Privacy' },
  { link: 'color_themes', title: 'prices' },
  { link: 'navigation_item', title: 'Navigation Item' },
  { link: 'authentication', title: 'Authentication' },
  { link: 'resources', title: 'Resources' },
  { link: 'changelog', title: 'Contact us' },
  { link: 'faq', title: 'FAQ Troubleshooting' },
];

const Navigation = ({ active }) => (
  <Card className="card--not-full-height documentation__nav-wrap">
    <CardBody>
      {navigationLinksData.map((item) => (
        <Link
          key={`index_${item.link}`}
          to={`/documentation/${item.link}`}
          className={`documentation__nav-link${active === item.link
            ? ' documentation__nav--active' : ''}`}
        >
          {item.title}
        </Link>
      ))}
    </CardBody>
  </Card>
);

Navigation.propTypes = {
  active: PropTypes.string,
};

Navigation.defaultProps = {
  active: '',
};

export default Navigation;
