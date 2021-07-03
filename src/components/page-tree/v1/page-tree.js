import React from 'react'

export const PageTreeList = ({pageList}) => {
  return (
    <ul>
      {pageList.map(page => (
        <PageTree page={page} key={page.id} />
      ))}
    </ul>
  )
}

const PageTree = ({page}) => {
  const [expand, setExpand] = React.useState(false)
  const handleToggle = () => setExpand(!expand)
  return (
    <div>
      {page.children ? (
        <TogglePage isExpanded={expand} handleToggle={handleToggle} />
      ) : (
        '• '
      )}
      {page.name}
      {expand && page.children && <PageTreeList pageList={page.children} />}
    </div>
  )
}

const TogglePage = ({isExpanded, handleToggle}) => {
  return <button onClick={handleToggle}>{isExpanded ? '▲' : '▼'}</button>
}
