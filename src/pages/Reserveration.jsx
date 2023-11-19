import "./Reserveration.css"




const Reserveration = () => {

    
   

    return (
        
        <div className="res-body">
            
            
            <div>
                <h1>MOVIE SEAT BOOKING</h1>
            </div>
            <div className="movie-res">
                <label> Select a movie: </label>
                <select id="movie">
                    <option value="220">Dashing Through the Snow</option>
                    <option value="320">Believer 2</option>
                    <option value="250">All-Time High</option>
                    <option value="260">Manodrome</option>
                </select>
            </div>

            <ul className="showcase">
                <li>
                    <div className="seat available"></div>
                    <small>Available</small>
                </li>
                <li>
                    <div className="seat selected">
                        <small>Selected</small>
                    </div>
                </li>
                <li>
                    <div className="seat sold">
                        <small>Sold</small>
                    </div>
                </li>
            </ul>
            <div className="container">
                <div className="screen"></div>

                <div className="row">
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                </div>
                <div className="row">
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                </div>
                <div className="row">
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                </div>
                <div className="row">
                    <div className="seat"></div>
                    <div className="seat sold"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat sold"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                </div>
                <div className="row">
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat sold"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat sold"></div>
                </div>
            </div>
            <p className="text">
                You have selected <span id="count">0</span> seat for a price of RS.<span
                id="total">0</span>
            </p>
        </div>
    )
}

export default Reserveration