import "./book.css";
import trip from "../assets/trip.png";
import values from "../assets/values.png";

const BookYourTrip = () => {
  return (
    <div className="book-your-trip">
        <div>
            <h4 className="easy-fast">Easy and Fast</h4>
            <h1>Book your next trip <br />
            in 3 easy steps</h1>
            <img src={values} alt="information-image" />
        </div>
        <div>
            <img src={trip} alt="trip-image" />
        </div>
    </div>
  )
}

export default BookYourTrip