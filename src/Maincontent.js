const Maincontent = () => {
    return ( 
        <div className="Maincontent">
            <div className="one">
                <img src={require("./revolute.png")} alt=""  />
              
                <h3>Revolutionizing and   <br /> Empowering Real Estate Development </h3>
                <p>
                    We bring strategies and invent models to accelerate Real Estate development in cities of developing nations through the use of Technology.
                    <br />
                    <p>Uren Platforms is for listing leasing, selling, buying and investigating ownerships of properties and property (ies) document
</p>
                </p>
            </div>
            <div className="two">
            <img src={require("./develop.png")} alt="" />
                <h3>Development of World-class Building for Low Income Earners</h3>
                <p>
                We harness the power of Blockchain Technology to develop world-class buildings for developing cities, we also invest into some big names within the company to make available home for low income earners.
                </p>
            </div>
            <div className="three">
                <img src={require("./grow.png")} alt="" />
                <h3> Grow your income and Portfolio</h3>
                <p> 
                Buying, selling, renting or leasing property(ies) using the Uren platform accrues reward and even more if the payments are made using Uren token. Also, investors can invest directly into the Uren technologies by owning Non-fungible Token (NFTs) which shall serve as the governance token, and earn yields from the annual benefit of the company. The NFTs can also be sold at any time.
                </p>
            </div>
            <div className="one">
                <img src={require("./zero.png")} alt=""  />
                <h3>Zero Fraud Real Estate Investment</h3>
                <p>
                We partner with some big names in the industry and governments agencies to provide security and investigate into ownership of properties and legality of property documents to avoid zero fraud for properties bought, sold, rented or leased using the Uren Platforms.
                </p>
            </div>
        </div>
     );
}
 
export default Maincontent;