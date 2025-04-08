import React from "react";
import "./Footer.css";

const FooterBottom = () => {
    return (
        <footer className="footer-new">
            <div className="stats-grid">
                <div><span>📄</span><h5>Jobs Posted</h5><p>38223</p></div>
                <div><span>✅</span><h5>Jobs Filled</h5><p>15153</p></div>
                <div><span>🏢</span><h5>Employers</h5><p>24058</p></div>
                <div><span>👥</span><h5>Active Users</h5><p>1475492</p></div>
            </div>

            <div className="disclaimer-section-unique">
                <div className="disclaimer-box">
                    <i className="fa-solid fa-triangle-exclamation"></i>
                    <div className="disclaimer-content">
                        <h4>Disclaimer</h4>
                        <p>
                            All Trademarks and Logos are the property of their respective owners, depicted here purely for representation purpose. | Jobringer.com has taken all reasonable steps to ensure that information on this site is genuine. Job Applicants are advised to evaluate independently. Jobringer.com shall not have any responsibility in this regard. All Jobseeker services are strictly designed & meant only for job search assistance and to maximize the chances for the jobseekers to get their dream job. All Job Seeker Credentials and Employment Opportunities are subject to individual merit & evaluation. We do not guarantee any job to any jobseeker.
                        </p>
                    </div>
                </div>

                <div className="recognized-box">
                    <p className="recognized-title">🏅 Recognized by</p>
                    <img src="/startuplogo.png" alt="Startup India" />
                </div>
            </div>


            <div className="footer-links-unique">
                <div className="footer-nav">
                    <h4>Quick Links</h4>
                    <div className="nav-columns">
                        <ul>
                            {["Terms and Conditions", "Privacy Policy", "Refund / Cancellation Policy", "About Us"].map((link) => (
                                <li key={link}><a href="#">{link}</a></li>
                            ))}
                        </ul>
                        <ul>
                            {["Contact Us", "FAQ", "Blogs"].map((link) => (
                                <li key={link}><a href="#">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="footer-socials">
                    <h4>Connect With Us</h4>
                    <div className="social-icons-grid">
                        <i className="fa-brands fa-whatsapp" title="WhatsApp"></i>
                        <i className="fa-brands fa-facebook-f" title="Facebook"></i>
                        <i className="fa-brands fa-twitter" title="Twitter"></i>
                        <i className="fa-brands fa-instagram" title="Instagram"></i>
                        <i className="fa-brands fa-linkedin-in" title="LinkedIn"></i>
                        <i className="fa-brands fa-youtube" title="YouTube"></i>
                        <i className="fa-brands fa-telegram" title="Telegram"></i>
                    </div>
                </div>
            </div>


            <p className="footer-copy">© All Rights Reserved @ 2025 Jobtech Ventures Private Limited.</p>
        </footer>
    );
};

export default FooterBottom;
