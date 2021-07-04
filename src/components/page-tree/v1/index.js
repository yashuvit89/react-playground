import React from 'react'

import fetchData from './data/pages-data'
import {PageTreeList} from './page-tree'
const App = () => {
  const [pageData, setPageData] = React.useState([])

  React.useEffect(() => {
    fetchData().then(data => setPageData(data))
  }, [])

  return (
    <>
      <h2>Page Tree</h2>
      <PageTreeList pageList={pageData} />
    </>
  )
}

export default App
