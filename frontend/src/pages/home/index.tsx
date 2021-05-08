import React, { useEffect } from 'react'

import Page from 'components/page'
import api from 'api'

export default function Home(): React.ReactElement {
  useEffect(() => {
    ;(async () => {
      const res = await api.get('')
      console.log(res)
    })()
  }, [])

  return <Page>Home</Page>
}
