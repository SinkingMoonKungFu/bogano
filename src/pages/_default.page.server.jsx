export { render }
// See https://vike.dev/data-fetching
export const passToClient = ['pageProps', 'urlPathname']

import ReactDOMServer from 'react-dom/server'
import { PageShell } from './PageShell'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import logoUrl from '../assets/smskf-logo.svg';

async function render(pageContext) {
  const { Page, pageProps } = pageContext
  // This render() hook only supports SSR, see https://vike.dev/render-modes for how to modify render() to support SPA
  if (!Page) throw new Error('render() hook expects pageContext.Page to be defined')

  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )

  const { documentProps } = pageContext.exports
  const title = (documentProps && documentProps.title) || 'Sinking Moon School of Kung Fu'
  const desc = (documentProps && documentProps.description) || 'The Sinking Moon School of Kung Fu in Burnsville, MN, USA'

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
        // We can add some `pageContext` here, which is useful if we want to do page redirection https://vike.dev/page-redirection
        title: "Sinking Moon School of Kung Fu",
        description: "The Sinking Moon School of Kung Fu in Burnsville, MN, USA",
    }
  }
}