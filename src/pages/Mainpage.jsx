

import Mainimage from '../Components/Mainimage'
import TrendingList from '../Components/TrendingList'
import './Mainpage.css'

const Mainpage = () => {
    return(
        
        <div className='main-container'>
            <Mainimage/>
            <TrendingList/>
        </div>
    )
}

export default Mainpage