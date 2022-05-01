import './grid-design.css'
import FakeData from '../data/FakeData'

//Imported icons
import FavIcon from '../assets/icons/heart.svg'
import SizeIcon from '../assets/icons/full-screen.svg'
import BedIcon from '../assets/icons/bed.svg'
import BathIcon from '../assets/icons/bath.svg'

function GridDesign() {
    return (
        <section className="grid_design_section">
            <div className="container">
                <div className="section_heading">
                    <h1>All Apartments</h1>
                    <a href="/">
                        Show All
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.01592 0.265916C1.37047 -0.0886387 1.94532 -0.0886387 2.29987 0.265916L7.14198 5.10802C7.49653 5.46258 7.49653 6.03742 7.14198 6.39198L2.29987 11.2341C1.94532 11.5886 1.37047 11.5886 1.01592 11.2341C0.661361 10.8795 0.661361 10.3047 1.01592 9.95013L5.21604 5.75L1.01592 1.54987C0.661361 1.19532 0.661361 0.620471 1.01592 0.265916Z" fill="#007882" />
                        </svg>
                    </a>
                </div>
                <div className="grid_container">
                    {
                        FakeData.map((item, index) => (
                            <div className='grid_item' key={index}>
                                <div className="thumb_wrapper">
                                    <img className='thumbnail' src={item.imgSrc} alt="thumb" />
                                </div>
                                <button type='button' className='btn_fav'>
                                    <img src={FavIcon} alt="icon" />
                                </button>
                                <div className="content_wrapper">
                                    <a href="/" className='prd_title'>{item.title}</a>
                                    <div className="price_status_wrapper">
                                        <span className='status'>{item.status}</span>
                                        <span className='price'>{item.price}</span>
                                        <span className='old_price'>{item.oldPrice}</span>
                                    </div>
                                    <div className="meta_wrapper">
                                        <div>
                                            <img src={SizeIcon} alt="icon" />
                                            <span>{item.size}Sqft</span>
                                        </div>
                                        <div>
                                            <img src={BedIcon} alt="icon" />
                                            <span>{item.bed}Rooms</span>
                                        </div>
                                        <div>
                                            <img src={BathIcon} alt="icon" />
                                            <span>{item.bath}Bath</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default GridDesign