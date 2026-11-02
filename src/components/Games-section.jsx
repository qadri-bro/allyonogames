import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppsLogo from "../assets/images/yonogames.png"
import {
  faBuildingColumns,
  faCircleInfo,
  faDownload,
  faGift,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

function GamesSection() {
  const [activeTab, setActiveTab] = useState("new");

  return (


            <section className="section" id="apps">
                <div className="section-header">
                    <h2 className="section-title">
                        All Yono Games Apps &amp; Yono Rummy Overview
                    </h2>
                    <p className="section-subtitle">
                        Compare Yono Games and Yono Rummy guides using the reported signup bonus and minimum withdrawal information below. Each figure is indicative, not a current offer or payout promise. Open the app guide and confirm its terms at the operator before using it.
                    </p>
                </div>
                {/* Quick Overview Table */}
                <div
                    className="table-scroll"
                    role="region"
                    aria-label="Scroll the app comparison table"
                    tabIndex={0}
                >
                    <table id="iTable" aria-label="Yono Games app comparison">
                    <thead>
                        <tr>
                        <th scope="col">App Logo</th>
                        <th scope="col">App Name</th>
                        <th scope="col">Signup Bonus</th>
                        <th scope="col">Min. Withdrawal</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                            <img
                            className="table-logo"
                            src={AppsLogo}
                            alt="Yono Rummy app logo"
                            loading="lazy"
                            width={42}
                            height={42}
                            />
                        </td>
                        <td>Yono Rummy</td>
                        <td>Reported up to ₹150; confirm terms</td>
                        <td>Reported ₹100; confirm in app</td>
                        <td>
                            <a
                            className="table-action"
                            href="games/yono-rummy/yono-rummy/index.html"
                            aria-label="Open Yono Rummy download information"
                            >
                            Download Now
                            </a>
                        </td>
                        </tr>
                        <tr>
                        <td>
                             <img
                            className="table-logo"
                            src={AppsLogo}
                            alt="Yono Rummy app logo"
                            loading="lazy"
                            width={42}
                            height={42}
                            />
                        </td>
                        <td>IND Bingo</td>
                        <td>Approx. ₹25; confirm terms</td>
                        <td>Approx. ₹100; confirm in app</td>
                        <td>
                            <a
                            className="table-action"
                            href="games/ind-bingo/ind-bingo/index.html"
                            aria-label="Open IND Bingo download information"
                            >
                            Download Now
                            </a>
                        </td>
                        </tr>
                        <tr>
                        <td>
                             <img
                            className="table-logo"
                            src={AppsLogo}
                            alt="Yono Rummy app logo"
                            loading="lazy"
                            width={42}
                            height={42}
                            />
                        </td>
                        <td>My 777 Yono</td>
                        <td>Approx. ₹30; confirm terms</td>
                        <td>Approx. ₹100; confirm in app</td>
                        <td>
                            <a
                            className="table-action"
                            href="games/my-777/my-777/index.html"
                            aria-label="Open My 777 Yono download information"
                            >
                            Download Now
                            </a>
                        </td>
                        </tr>
                        <tr>
                        <td>
                             <img
                            className="table-logo"
                            src={AppsLogo}
                            alt="Yono Rummy app logo"
                            loading="lazy"
                            width={42}
                            height={42}
                            />
                        </td>
                        <td>Spin 101</td>
                        <td>Approx. ₹30; confirm terms</td>
                        <td>Approx. ₹100; confirm in app</td>
                        <td>
                            <a
                            className="table-action"
                            href="games/spin-101/spin-101/"
                            aria-label="Open Spin 101 download information"
                            >
                            Download Now
                            </a>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <img
                            className="table-logo"
                            src={AppsLogo}
                            alt="Yono Rummy app logo"
                            loading="lazy"
                            width={42}
                            height={42}
                            />
                        </td>
                        <td>ICIC Games</td>
                        <td>Approx. ₹50; confirm terms</td>
                        <td>Approx. ₹100; confirm in app</td>
                        <td>
                            <a
                            className="table-action"
                            href="games/icic-games/icic-games/"
                            aria-label="Open ICIC Games download information"
                            >
                            Download Now
                            </a>
                        </td>
                        </tr>
                        <tr>
                        <td>
                             <img
                            className="table-logo"
                            src={AppsLogo}
                            alt="Yono Rummy app logo"
                            loading="lazy"
                            width={42}
                            height={42}
                            />
                        </td>
                        <td>Bingo 101</td>
                        <td>Approx. ₹25; confirm terms</td>
                        <td>Approx. ₹100; confirm in app</td>
                        <td>
                            <a
                            className="table-action"
                            href="games/bingo-101/bingo-101/index.html"
                            aria-label="Open Bingo 101 download information"
                            >
                            Download Now
                            </a>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <img
                            className="table-logo"
                            src={AppsLogo}
                            alt="Yono Rummy app logo"
                            loading="lazy"
                            width={42}
                            height={42}
                            />
                        </td>
                        <td>789 Jackpots</td>
                        <td>Approx. ₹25; confirm terms</td>
                        <td>Approx. ₹100; confirm in app</td>
                        <td>
                            <a
                            className="table-action"
                            href="games/789-jackpots/789-jackpots/index.html"
                            aria-label="Open 789 Jackpots download information"
                            >
                            Download Now
                            </a>
                        </td>
                        </tr>
                        <tr>
                        <td>
                             <img
                            className="table-logo"
                            src={AppsLogo}
                            alt="Yono Rummy app logo"
                            loading="lazy"
                            width={42}
                            height={42}
                            />
                        </td>
                        <td>MDM Bet</td>
                        <td>Approx. ₹25; confirm terms</td>
                        <td>Approx. ₹100; confirm in app</td>
                        <td>
                            <a
                            className="table-action"
                            href="games/mdm-bet/mdm-bet/index.html"
                            aria-label="Open MDM Bet download information"
                            >
                            Download Now
                            </a>
                        </td>
                        </tr>
                        <tr>
                        <td>
                             <img
                            className="table-logo"
                            src={AppsLogo}
                            alt="Yono Rummy app logo"
                            loading="lazy"
                            width={42}
                            height={42}
                            />
                        </td>
                        <td>SPIN Gold</td>
                        <td>Approx. ₹25; confirm terms</td>
                        <td>Approx. ₹100; confirm in app</td>
                        <td>
                            <a
                            className="table-action"
                            href="games/spin-gold/spin-gold/index.html"
                            aria-label="Open SPIN Gold download information"
                            >
                            Download Now
                            </a>
                        </td>
                        </tr>
                        <tr>
                        <td>
                             <img
                            className="table-logo"
                            src={AppsLogo}
                            alt="Yono Rummy app logo"
                            loading="lazy"
                            width={42}
                            height={42}
                            />
                        </td>
                        <td>SPIN Lucky</td>
                        <td>Approx. ₹20; confirm terms</td>
                        <td>Approx. ₹100; confirm in app</td>
                        <td>
                            <a
                            className="table-action"
                            href="games/spin-lucky/spin-lucky/index.html"
                            aria-label="Open SPIN Lucky download information"
                            >
                            Download Now
                            </a>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                {/* Tabs */}
                <div className="tabs">
                    <button
                    id="newTab"
                    className={`tab ${activeTab === "new" ? "active" : ""}`}
                    type="button"
                    onClick={() => setActiveTab("new")}
                    >
                    All Apps
                    </button>
                    <button id="oldTab" className={`tab ${activeTab === "old" ? "active" : ""}`} type="button" onClick={() => setActiveTab("old")}>
                    New / Highlighted
                    </button>
                </div>
                {/* ALL APPS LIST */}
                <div id="new" className={`content ${activeTab === "new" ? "active" : ""}`}>
                    <ul className="app-list-yono-games">
                    {/* 1. IND Bingo */}
                    <li className="app-item-yono-games">
                        <div className="app-icon-yg-container">
                        <img
                            src={AppsLogo}
                            alt="My 777 Yono app logo in the Yono Games guide"
                            className="app-icon_dont_copy_created_by_yono-games"
                        />
                        </div>
                        <div className="app-details_dont_copy_created_by_yono-games">
                        <h3 className="app-title_dont_copy_created_by_yono-games">
                            IND Bingo
                        </h3>
                        <span className="bonus-amount_dont_copy_created_by_yono-games">
                            <FontAwesomeIcon icon={faGift} aria-hidden="true" /> Sign Up Bonus Approx. ₹25
                            <br />
                        </span>
                        <span className="withdrawal-amount_dont_copy_created_by_yono-games">
                            <FontAwesomeIcon icon={faBuildingColumns} aria-hidden="true" /> Min. Withdraw Around
                            ₹100
                        </span>
                        <p className="download-count">
                            Popular for simple bingo-style gameplay
                        </p>
                        </div>
                        <a
                        href="games/ind-bingo/ind-bingo/index.html"
                        className="download-button_dont_copy_created_by_yono-games"
                        >
                        <FontAwesomeIcon icon={faDownload} aria-hidden="true" /> Download
                        </a>
                    </li>
                    {/* 2. My 777 Yono */}
                    <li className="app-item-yono-games">
                        <div className="app-icon-yg-container">
                        <img
                            src={AppsLogo}
                            alt="My 777 Yono app logo in the Yono Games guide"
                            className="app-icon_dont_copy_created_by_yono-games"
                        />
                        </div>
                        <div className="app-details_dont_copy_created_by_yono-games">
                        <h3 className="app-title_dont_copy_created_by_yono-games">
                            My 777 Yono
                        </h3>
                        <span className="bonus-amount_dont_copy_created_by_yono-games">
                            <FontAwesomeIcon icon={faGift} aria-hidden="true" /> Sign Up Bonus Approx. ₹30
                            <br />
                        </span>
                        <span className="withdrawal-amount_dont_copy_created_by_yono-games">
                            <FontAwesomeIcon icon={faBuildingColumns} aria-hidden="true" /> Min. Withdraw Around
                            ₹100
                        </span>
                        <p className="download-count">
                            Slots &amp; card-style games in one app
                        </p>
                        </div>
                        <a
                        href="games/my-777/my-777/index.html"
                        className="download-button_dont_copy_created_by_yono-games"
                        >
                        <FontAwesomeIcon icon={faDownload} aria-hidden="true" /> Download
                        </a>
                    </li>
                    {/* 3. Bet 213 Slots */}
                    <li className="app-item-yono-games">
                        <div className="app-icon-yg-container">
                         <img
                            src={AppsLogo}
                            alt="My 777 Yono app logo in the Yono Games guide"
                            className="app-icon_dont_copy_created_by_yono-games"
                        />
                        </div>
                        <div className="app-details_dont_copy_created_by_yono-games">
                        <h3 className="app-title_dont_copy_created_by_yono-games">
                            Bet 213 Slots
                        </h3>
                        <span className="bonus-amount_dont_copy_created_by_yono-games">
                            <FontAwesomeIcon icon={faGift} aria-hidden="true" /> Sign Up Bonus Approx. ₹30
                            <br />
                        </span>
                        <span className="withdrawal-amount_dont_copy_created_by_yono-games">
                            <FontAwesomeIcon icon={faBuildingColumns} aria-hidden="true" /> Min. Withdraw Around
                            ₹100
                        </span>
                        <p className="download-count">
                            Focused on slots &amp; spin-style games
                        </p>
                        </div>
                        <a
                        href="#download-guide"
                        className="download-button_dont_copy_created_by_yono-games"
                        >
                        <FontAwesomeIcon icon={faCircleInfo} aria-hidden="true" /> Safety Guide
                        </a>
                    </li>
                    {/* 4. Spin 101 */}
                    <li className="app-item-yono-games">
                        <div className="app-icon-yg-container">
                         <img
                            src={AppsLogo}
                            alt="My 777 Yono app logo in the Yono Games guide"
                            className="app-icon_dont_copy_created_by_yono-games"
                        />
                        </div>
                        <div className="app-details_dont_copy_created_by_yono-games">
                        <h3 className="app-title_dont_copy_created_by_yono-games">
                            Spin 101
                        </h3>
                        <span className="bonus-amount_dont_copy_created_by_yono-games">
                            <FontAwesomeIcon icon={faGift} aria-hidden="true" /> Sign Up Bonus Approx. ₹30
                            <br />
                        </span>
                        <span className="withdrawal-amount_dont_copy_created_by_yono-games">
                            <FontAwesomeIcon icon={faBuildingColumns} aria-hidden="true" /> Min. Withdraw Around
                            ₹100
                        </span>
                        <p className="download-count">
                            Spin-focused listing; check the current operator details
                        </p>
                        </div>
                        <a
                        href="games/spin-101/spin-101/"
                        className="download-button_dont_copy_created_by_yono-games"
                        >
                        <FontAwesomeIcon icon={faCircleInfo} aria-hidden="true" /> View Guide
                        </a>
                    </li>
                    {/* 5. ICIC Games */}
                    <li className="app-item-yono-games">
                        <div className="app-icon-yg-container">
                        <img
                            src={AppsLogo}
                            alt="My 777 Yono app logo in the Yono Games guide"
                            className="app-icon_dont_copy_created_by_yono-games"
                        />
                        </div>
                        <div className="app-details_dont_copy_created_by_yono-games">
                        <h3 className="app-title_dont_copy_created_by_yono-games">
                            ICIC Games
                        </h3>
                        <span className="bonus-amount_dont_copy_created_by_yono-games">
                            <FontAwesomeIcon icon={faGift} aria-hidden="true" /> Sign Up Bonus Approx. ₹50
                            <br />
                        </span>
                        <span className="withdrawal-amount_dont_copy_created_by_yono-games">
                            <FontAwesomeIcon icon={faBuildingColumns} aria-hidden="true" /> Min. Withdraw Around
                            ₹100
                        </span>
                        <p className="download-count">
                            Mixed card games, slots &amp; other modes
                        </p>
                        </div>
                        <a
                        href="games/icic-games/icic-games/"
                        className="download-button_dont_copy_created_by_yono-games"
                        >
                        <FontAwesomeIcon icon={faDownload} aria-hidden="true" /> Download
                        </a>
                    </li>
                    {/* 6. Bingo 101 */}
                    <li className="app-item-yono-games">
                        <div className="app-icon-yg-container">
                         <img
                            src={AppsLogo}
                            alt="My 777 Yono app logo in the Yono Games guide"
                            className="app-icon_dont_copy_created_by_yono-games"
                        />
                        </div>
                        <div className="app-details_dont_copy_created_by_yono-games">
                        <h3 className="app-title_dont_copy_created_by_yono-games">
                            Bingo 101
                        </h3>
                        <span className="bonus-amount_dont_copy_created_by_yono-games">
                            <FontAwesomeIcon icon={faGift} aria-hidden="true" /> Sign Up Bonus Approx. ₹25
                            <br />
                        </span>
                        <span className="withdrawal-amount_dont_copy_created_by_yono-games">
                            <FontAwesomeIcon icon={faBuildingColumns} aria-hidden="true" /> Min. Withdraw Around
                            ₹100
                        </span>
                        <p className="download-count">Simple bingo-based interface</p>
                        </div>
                        <a
                        href="games/bingo-101/bingo-101/index.html"
                        className="download-button_dont_copy_created_by_yono-games"
                        >
                        <FontAwesomeIcon icon={faDownload} aria-hidden="true" /> Download
                        </a>
                    </li>
                   
                    </ul>
                </div>
                {/* NEW / HIGHLIGHTED APPS (second tab) */}
                <div id="old" className={`content ${activeTab === "old" ? "active" : ""}`}>
                    <ul className="app-list-yono-games">
                    {/* Channel – New Yono App */}
                    <li className="app-item-yono-games">
                        <div className="app-icon-yg-container">
                        <img
                            src={AppsLogo}
                            alt="All Yono App Logo for New Yono App"
                            className="app-icon_dont_copy_created_by_yono-games"
                        />
                        </div>
                        <div className="app-details_dont_copy_created_by_yono-games">
                        <h3 className="app-title_dont_copy_created_by_yono-games">
                            New Yono App (Telegram List)
                        </h3>
                        <span className="bonus-amount_dont_copy_created_by_yono-games">
                            <FontAwesomeIcon icon={faGift} aria-hidden="true" /> Bonus Up to Approx. ₹1500
                            (Multiple Apps)
                            <br />
                        </span>
                        <span className="withdrawal-amount_dont_copy_created_by_yono-games">
                            <FontAwesomeIcon icon={faBuildingColumns} aria-hidden="true" /> Min. Withdraw Often
                            ₹100
                        </span>
                        <p className="download-count">
                            Get latest Yono-style apps from our Telegram updates
                        </p>
                        </div>
                        <a
                        href="https://t.me/allyonoappdownload/"
                        className="download-button_dont_copy_created_by_yono-games"
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                        >
                        <FontAwesomeIcon icon={faPaperPlane} aria-hidden="true" /> Join Now
                        </a>
                    </li>
                    {/* Reuse some key apps in highlight list */}
                    <li className="app-item-yono-games">
                        <div className="app-icon-yg-container">
                       <img
                            src={AppsLogo}
                            alt="All Yono App Logo for New Yono App"
                            className="app-icon_dont_copy_created_by_yono-games"
                        />
                        </div>
                        <div className="app-details_dont_copy_created_by_yono-games">
                        <h3 className="app-title_dont_copy_created_by_yono-games">
                            IND Bingo
                        </h3>
                        <span className="bonus-amount_dont_copy_created_by_yono-games">
                            <FontAwesomeIcon icon={faGift} aria-hidden="true" /> Sign Up Bonus Approx. ₹25
                            <br />
                        </span>
                        <span className="withdrawal-amount_dont_copy_created_by_yono-games">
                            <FontAwesomeIcon icon={faBuildingColumns} aria-hidden="true" /> Min. Withdraw Around
                            ₹100
                        </span>
                        </div>
                        <a
                        href="games/ind-bingo/ind-bingo/index.html"
                        className="download-button_dont_copy_created_by_yono-games"
                        >
                        <FontAwesomeIcon icon={faDownload} aria-hidden="true" /> Download
                        </a>
                    </li>
                   
                    </ul>
                </div>
                <p style={{ fontSize: 13, marginTop: 10, color: "#4b5563" }}>
                    The figures above are previously reported or approximate, including the ₹8
                    shown for 567 Slots. A separate game guide may show a different promotion.
                    Check the operator's current offer, eligibility and withdrawal terms before
                    relying on either figure. Listing an app is not an endorsement.
                </p>
                </section>


        
  );
}

export default GamesSection;
