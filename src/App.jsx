import BookYourTrip from "./pages/BookYourTrip"
import Category from "./pages/Category"
import Destination from "./pages/Destination"
import Footer from "./pages/Footer"
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
      <Footer />
    </div>
  )
}

export default App