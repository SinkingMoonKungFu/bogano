import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../atoms/Logo';

import './SitemapFooter.scss';

export const SitemapFooter = ({...props}) => {
    return (
        <footer className="footer" role="sitemap">
            <div className="layout">
                <div className="layout-oneline">
                    <a class="logo-footer-link" href={props.logoLink}>
                        <Logo
                            logoTitle={props.logoTitle}
                            textmark={true}
                            monochrome={true} />
                    </a>
                </div>
                <div className="copyright">
                    <p>{props.copyrightInfo}</p>
                    <p><a href={props.imageAcknowledgementsLink}>Image and Copyright Acknowledgements</a></p>
                </div>
            </div>
        </footer>
    );
};

SitemapFooter.PropTypes = {
    copyrightInfo: PropTypes.string,
    imageAcknowedlegementsLink: PropTypes.string,
};

SitemapFooter.defaultProps = {
};