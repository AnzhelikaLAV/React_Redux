import { BrowserRouter, Routes, Route } from "react-router-dom"

// lesson16
import Layout from "pages/UsersApp/Layout/Layout"
import Home from "pages/UsersApp/Home/Home"

// lessons
//import Lesson15 from "lessons/Lesson15/Lesson15"

// homeworks
//import Homework15 from "homeworks/Homework15/Homework"

const App = () => {
  return (
    <BrowserRouter>
      {/* <Lesson15 /> */}
      {/* <Homework15 /> */}
      {/* lesson16 */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users" element={"Users"}></Route>
          <Route path="*" element={"Page not found"}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
