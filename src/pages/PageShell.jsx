import React from 'react'
import PropTypes from 'prop-types'
import { PageContextProvider } from './usePageContext'
import { childrenPropType } from './PropTypeValues'

import 'bootstrap/dist/css/bootstrap.min.css';
import './PageShell.scss'

export { PageShell }

PageShell.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType
}
function PageShell({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        {children}
      </PageContextProvider>
    </React.StrictMode>
  )
}
