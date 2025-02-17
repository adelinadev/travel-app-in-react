import React, {useEffect} from "react"
import './footer.scss'
import video2 from '../../Assets/video2.mp4'
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from "aos";
import 'aos/dist/aos.css'


const Footer = () => {

    useEffect(() =>{
        Aos.init({duration: 2000})
    }, [])

    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div className="text" data-aos="fade-up">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input type="text" data-aos="fade-up" placeholder="Enter Email Address"/>
                        <button data-aos="fade-up" className="btn flex" type="submit">
                            SEND <FiSend className="icon" />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <MdTravelExplore className="icon"/>Travel.
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraf">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </div>
                        <div className="footerSocials flex" data-aos="fade-up">
                            <FaTwitter className="icon"/>
                            <FaYoutube className="icon"/>
                            <AiFillInstagram className="icon"/>
                            <FaTripadvisor className="icon"/>
                        </div>
                    </div>

                    <div className="footerLinks grid">
                        {/* Group One */}
                        <div className="linkGrop" data-aos="fade-up" data-aos-duration="5000">
                            <span className="gropeTitle">
                                OUR AGENCY
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Insuarance
                            </li>
                            
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Agency
                            </li>
                            
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Payment
                            </li>
                        </div>

                        {/* Group Two */}
                        <div className="linkGrop" data-aos="fade-up" data-aos-duration="5000">
                            <span className="gropeTitle">
                                PARTNERS
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Bookings
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Renrcars
                            </li>
                            
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                HostelWorld
                            </li>
                            
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Trivago
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                TripAdvisor
                            </li>
                        </div>

                        {/* Group Three */}
                        <div className="linkGrop" data-aos="fade-up" data-aos-duration="5000">
                            <span className="gropeTitle">
                                LAST MINUTE
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                London
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                California
                            </li>
                            
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Indonesia
                            </li>
                            
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Europe
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Oceania
                            </li>
                        </div>

                    </div>

                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>COPYRIGHTS</small>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer