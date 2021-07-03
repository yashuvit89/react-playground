import React from 'react'

import fetchData from '../data/pages-data'
import {PageTreeList} from './page-tree'
const App = () => {
  const [pageData, setPageData] = React.useState([])

  React.useEffect(() => {
    fetchData().then(data => setPageData(data))
  }, [])

  return <PageTreeList pageList={pageData} />
}

export default App
