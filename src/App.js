import './styles.css'
import PageTree from './components/page-tree/v1'
import Tabs from './components/tabs/v1'

export default function App() {
  return (
    <div className="App">
      <PageTree />
      <hr />
      <Tabs />
    </div>
  )
}
