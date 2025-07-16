/**
 * Description component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Description = () => {
  const data = useStaticQuery(graphql`
    query DescriptionQuery {
      site {
        siteMetadata {
          description
          social {
            email
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const description = data.site.siteMetadata?.description
  const social = data.site.siteMetadata?.social

  return (
    <div className="description">
      <p>
        {description}
        <a href={`mailto:${social.email}`}>{social.email}</a>.
      </p>
    </div>
  )
}

export default Description
