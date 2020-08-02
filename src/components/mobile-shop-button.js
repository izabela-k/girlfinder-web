import React from 'react';
import { Col } from 'react-bootstrap';

import AppleAppStoreBadge from './apple-appstore-badge.svg';
import GooglePlayBadge from './google-play-badge.svg';
import './mobile-shop-button.css';

function getStoreUrlForVariant(variant) {
  const urls = {
    'apple': 'https://itunes.apple.com/',
    'google': 'https://play.google.com/store/',
  }

  return urls[variant]
}

function getBadgeForVariant(variant) {
  const badges = {
    'apple': AppleAppStoreBadge,
    'google': GooglePlayBadge,
  }
  return badges[variant];
}

const MobileShopButton = ({variant = 'apple'}) => (
  <Col xs={{span: 6}} sm={{span: 5}} md={{span: 3}} lg={{span: 3}} className="text-center mb-3">
    <a href={getStoreUrlForVariant(variant)} target="_blank" rel="noopener noreferrer">
      <img src={getBadgeForVariant(variant)} className="mobile-shop-button-icon" alt={`${variant} app store`}/>
    </a>
  </Col>
)

export {
  MobileShopButton,
};
