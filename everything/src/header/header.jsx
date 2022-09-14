import Reatc from 'react';
import './header.css';

const Header = ()=> {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto hidden ">
        <ul className="pt-4">
          <li className="inline-block pl-4">Home</li>
          <li className="inline-block pl-4">about</li>
          <li className="inline-block pl-4">services</li>
          <li className="inline-block pl-4">Team</li>
          <li className="inline-block pl-4">Portfolio</li>
          <li className="inline-block pl-4">Blog</li>
          <li className="inline-block pl-4">Contact</li>
        </ul>
      </div>
      <nav>
        <ul className="container mx-auto h-10 bg-blue-800 flex justify-start items-center">
          <li className=" px-4">Home</li>
          <li className=" products ">
            Products2
            <div className="flex absolute products2 w-full bg-gray-400 hidden">
              <div className="flex-auto flex-grow">
                <span>
                <img  src="https://4.bp.blogspot.com/-faF-AemPFUM/U4ryP7pQRsI/AAAAAAAAEvA/fZ-hskCSln4/s1600/Magento%2Bthemes.jpg"/>
                <p>Most Popular Styles</p>
                </span>
                </div>
              <div className="flex-auto flex-grow">
                <span>
                  <ul>
                    <span>
                      Cards
                    </span>
                    <li><a href="/expanding-cards">Expanding</a></li>
                    <li>Laptops</li>
                    <li>Tablets</li>
                    <li>Monitors</li>
                    <li>Networking & Printers</li>
                    <li>Scanners</li>
                    <li>Jumpers & Cardigans</li>
                    <li><a href="#">View More</a></li>
                  </ul>
                </span>
              </div>
              <div className="flex-auto flex-grow">
						<span>  
						<ul>
							 <span>TV & Video</span>
								<li>LED TVs</li>
								<li>Plasma TVs</li>
								<li>3D TVs</li>
								<li>DVD & Blu-ray Players</li>
								<li>Home Theater Systems</li>
								<li>Cell Phones</li>
								<li>Apple iPhone</li>
								<li><a class="mm-view-more" href="#">View more →</a></li>
							</ul>
						</span>							
							</div>
							<div className="flex-auto flex-grow">
								<span>
						<ul>
							<span>Car Electronics</span>
							<li>GPS & Navigation</li>
							<li>In-Dash Stereos</li>
							<li>Speakers</li>
							<li>Subwoofers</li>
							<li>Amplifiers</li>
						    <li>MP3 Players</li>
							<li>iPods</li>
						   	<li><a class="mm-view-more" href="#">View more →</a></li>
						</ul>
					</span>
						</div>
					 </div>
          </li>
          <li className="px-4 ">Services</li>
          <li className="px-4 ">Team</li>
          <li className="px-4 ">Portfolio</li>
          <li className="px-4 ">Blog</li>

          <li className="inline-block">
           <a href="http://www.mywebtricks.com/">Go my Blog</a>
          </li>
        </ul>
      </nav>
      
      
    </div>
  );
}

export default Header;
