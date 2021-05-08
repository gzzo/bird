import React from 'react'

import styles from './page.styles'

type PageProps = {
  children: React.ReactNode
}

export default function Page({ children }: PageProps): React.ReactElement {
  return <div css={styles}>{children}</div>
}
