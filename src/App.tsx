import './App.css'
import Blogs from './components/Blogs'

function App() {
  return (
    <div className='App'>
      <div className='navbar'>
        <ul>
          <li>Home</li>
          <li>Blog</li>
        </ul>
      </div>
      <Blogs />
    </div>
  )
}
export default App
