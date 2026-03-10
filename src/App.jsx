import BookYourTrip from "./pages/BookYourTrip"
import Category from "./pages/Category"
import Destination from "./pages/Destination"
import Form from "./pages/Form"
import Navbar from "./pages/navbar"
import Testimonial from "./pages/Testimonial"

const App = () => {
  return (
    <div>
      <Navbar />
      <Category />
      <Destination /> 
      <BookYourTrip />
      <Testimonial />
      <Form />
    </div>
  )
}

export default App