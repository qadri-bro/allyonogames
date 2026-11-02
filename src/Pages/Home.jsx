import Manbanner from "../assets/images/mantop-banners-yono-games.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Gamessection from "../components/Games-section.jsx"
import AboutUS from "../components/AboutComponents.jsx"

import { faTriangleExclamation, faShieldVirus , faBuildingColumns ,faCircleCheck , faWandMagicSparkles , faWallet, faUserShield, faArrowDownLong, faCircleInfo, faListCheck, faGift, faShieldHeart  } from "@fortawesome/free-solid-svg-icons";

// import { faTelegram } from "@fortawesome/free-brands-svg-icons";



function Home() {
  return (
   <>

   <main className="page-wrapper">

          <section className="hero" id="top">
                <div className="hero-card">
                    <div className="hero-banner">
                    {/* <img src={} alt="Yono Games banner for Yono Rummy and Android app guides"> */}
                    <img src={Manbanner} alt="" />
                    <div className="hero-badge">
                    <FontAwesomeIcon className="Fashield" icon={faShieldHeart} /> 
                        <span id="freshnessBadge">Last Updated: Today</span>
                    </div>
                    </div>
                    <div className="hero-content">
                    <h1 className="hero-title" id="heroHeading">Top Yono Games &amp; Rummy Apps Download (Updated: Today)</h1>
                    <p className="hero-subtext">Explore Yono Games and Yono Rummy app guides, compare reported bonus and withdrawal terms, and check each APK source before you install. Listings are reviewed when new information becomes available.</p>
                    <nav className="quick-links" aria-label="Explore app information">
                        <a className="quick-link" href="#bonus-guide"> <FontAwesomeIcon icon={faGift} aria-hidden="true" /> High Bonus Apps </a> 
                        <a className="quick-link" href="#new-launches"> <FontAwesomeIcon icon={faWandMagicSparkles } aria-hidden="true" /> New Launches </a> 
                        <a className="quick-link" href="#withdrawal-guide"> <FontAwesomeIcon icon={faWallet} aria-hidden="true" /> Low Minimum Withdrawal Apps </a>
                    </nav>
                    <div className="hero-stats">
                        <div className="hero-stat-item">
                        <FontAwesomeIcon className="Fashield" icon={faListCheck} />  20+ Yono-style apps listed
                        </div>
                        <div className="hero-stat-item">
                        <FontAwesomeIcon className="Fashield" icon={faGift} />  Bonus info &amp; basic guides
                        </div>
                        <div className="hero-stat-item">
                        <FontAwesomeIcon className="Fashield" icon={faUserShield } />  Independent &amp; informational only
                        </div>
                    </div>
                    <div className="hero-buttons">
                        <a href="#apps" className="hero-btn-primary">
                        <FontAwesomeIcon className="Fashield" icon={faArrowDownLong} />  View All Yono Apps
                        </a>
                        <a href="#about-yono-games" className="hero-btn-secondary">
                        <FontAwesomeIcon className="Fashield" icon={faCircleInfo } />  Read Important Information
                        </a>
                    </div>
                    </div>
                </div>
          </section>


        {/* why trust us ection start */}

            
        <section className="section" aria-labelledby="trustTitle">
          <div className="trust-panel">
            <h2 className="section-title" id="trustTitle"> Why Trust Us? </h2>
            <p className="trust-intro">
              Our guides explain APK source checks, bonus conditions and withdrawal rules. We do not host installers or handle app payments; verify each listing and the current operator terms before taking action.
            </p>
            <div className="trust-grid">
              <article className="trust-card">
                <span className="trust-icon">
                 <FontAwesomeIcon className="Fashield" icon={faShieldVirus } /> 
                </span>
                <h3>APK Safety Checks</h3>
                <p>
                  Confirm the publisher and final download address. You can scan an APK  with VirusTotal before installing it; a scan alone is not a safety guarantee.
                </p>
              </article>
              <article className="trust-card">
                <span className="trust-icon">
                  <FontAwesomeIcon className="Fashield" icon={faBuildingColumns } /> 
                </span>
                <h3>Withdrawal Terms Explained</h3>
                <p>
                  Check the minimum amount, identity requirements, charges and verified support route inside the app. Timing depends on the operator and bank.
                </p>
              </article>
              <article className="trust-card">
                <span className="trust-icon">
                  <FontAwesomeIcon className="Fashield" icon={faCircleCheck } /> 
                </span>
                <h3>Bonus Conditions in Context</h3>
                <p>
                  We label listed offers as reported or approximate. Confirm eligibility, playthrough rules and expiry in the current app terms before depositing.
                </p>
              </article>
            </div>
          </div>
        </section>


        {/* why trust us ection end */}

    <Gamessection />

    <AboutUS />

    {/* importants notes strat */}

        <section className="section">
            <div className="red-disclaimer-box">
                <div className="centerio">
                <FontAwesomeIcon icon={faTriangleExclamation} /> Important Notice
                </div>
                <p>
                <strong>YonoGames.com.in</strong> does not run, manage or own any of the
                apps listed here. We only provide information that is already publicly
                available. Real-money Rummy, Teen Patti, slots and similar games can be{" "}
                <strong>financially risky</strong> and may lead to losses. Use all such
                apps very carefully and entirely at your own responsibility.
                </p>
                <p>
                This website is meant only for users who are{" "}
                <strong>18+ years old</strong>. Please read our
                <strong>
                    <a href="#">Disclaimer page</a>
                </strong>{" "}
                and the disclaimer or terms section of each individual app before playing.
                </p>
                <p>
                <strong>India-wide notice:</strong> The national online gaming law
                prohibits online money games, their promotion and related fund transfers
                across India. A state list alone is not a complete guide to what is
                allowed. Check the latest official law and notices on the
                <a
                    href="https://www.meity.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ministry website
                </a>
                before relying on any listing.
                </p>
                <p>
                <span className="centerio1">Alert:</span> Rummy and similar real-money
                games are commonly reported as banned or restricted in
                <strong>
                    Andhra Pradesh, Sikkim, Nagaland, Assam, Arunachal Pradesh, Tamil Nadu,
                    Odisha and Telangana
                </strong>
                . If you are from any such region, avoid using these apps. Always follow
                your local laws and regulations.
                </p>
            </div>
            </section>


    {/* importants notes end */}
       

   </main>

   </>
  );
}

export default Home;