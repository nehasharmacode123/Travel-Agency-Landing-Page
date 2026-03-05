import "./book.css";
import trip from "../assets/trip.png";
import values from "../assets/values.png";

const BookYourTrip = () => {
  return (
    <div className="book-your-trip">
        <div>
            <h4 className="easy-fast">Easy and Fast</h4>
            <h1 className="book-trip">Book your next trip <br />
            in 3 easy steps</h1>
            <img className="values" src={values} alt="information-image" />
            <img className="trip" src={trip} alt="trip-image" />
        </div>
    </div>
  )
}

export default BookYourTrip