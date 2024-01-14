import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../01-atoms/Logo';
import { Sitemap } from '../02-molecules/Sitemap';

import './SitemapFooter.scss';
import { normalizeToBasePath } from '../../util/Url';

export const SitemapFooter = ({...props}) => {
    const logoLink = normalizeToBasePath(props.logoLink);
    const imageAckLink = normalizeToBasePath(props.imageAcknowedlegementsLink);

    return (
        <footer className="footer" role="sitemap">
            <div className="layout">
                <div className="layout-oneline">
                    <div className="logo-and-copyright-container">
                        <a className="logo-footer-link" href={logoLink}>
                            <Logo
                                logoTitle={props.logoTitle}
                                textmark={true}
                                monochrome={true} />
                        </a>
                        <div className="copyright">
                            <p>{props.copyrightInfo}</p>
                            <p><a href={imageAckLink}>Image and Copyright Acknowledgements</a></p>
                        </div>
                    </div>
                    <Sitemap sitemap={props.sitemap} dark={true} />
                </div>
            </div>
        </footer>
    );
};

SitemapFooter.propTypes = {
    copyrightInfo: PropTypes.string,
    imageAcknowedlegementsLink: PropTypes.string,
};

SitemapFooter.defaultProps = {
};