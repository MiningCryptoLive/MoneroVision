import * as React from 'react';
import { PoweredByMyCrypto } from './poweredby';
import { Logo } from './logo';
import './footer.scss';

export const Footer = () => (
  <footer className="Footer">
    <div className="Footer-inner">
      <a
        className="Footer-logo mycrypto"
        target="_blank"
        rel="noopener noreferrer"
        href="https://mycrypto.com"
      >
        <PoweredBy />
      </a>
      <div className="flex-spacer" />
      <div className="Footer-main-content">
        <a className="Footer-logo" href="https://explorer.mine-xmr.pro/">
          <Logo />
        </a>
        <p className="Footer-main-content-text">
          explorer.mine-xmr.pro is an open-source Monero block explorer that is offered as a part of the{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://explorer.mine-xmr.pro">
            MINE-XMR.PRO
          </a>{' '}
          network. At MINE-XMR.PRO, we’re focused on building awesome products that put the power in
          your hands and this is just the beginning of our Monero offerings.
        </p>
      </div>
      <div className="flex-spacer" />
      <div className="Footer-social-media-wrapper">
        <p className="Footer-social-titles">MINE-XMR.PRO</p>
          <a
            className="Footer-social-media-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/MiningCryptoLive"
          >
            <i className="nc-icon nc-logo-github size_24px" />
          </a>
        </div>
       
        </div>
      </div>
    </div>
  </footer>
);
