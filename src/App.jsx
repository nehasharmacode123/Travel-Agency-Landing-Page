import BookYourTrip from "./pages/BookYourTrip"
import Category from "./pages/Category"
import Destination from "./pages/Destination"
import Navbar from "./pages/navbar"

const App = () => {
  return (
    <div>
      <Navbar />
      <Category />
      <Destination /> 
      <BookYourTrip />
    </div>
  )
}

export default App