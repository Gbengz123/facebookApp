import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Feed from './components/Feed'
import Widgets from "./components/Widgets"

function App() {

  return (
    <>
      <Header/>
      
      <main className="flex bg-gray-50">
        <Sidebar/>
        <Feed />
        <Widgets />
      </main>
    </>
  )
}

export default App
