import React from 'react';
import './style.scss';

export default function AppNavbar() {
  return <div className="app-cpn-header">Navbar</div>;
}

// import React from 'react';
// import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import { useAppNavbarQuery } from '@/graphql/internal';

// function AppNavbar() {
//   const { logo } = useAppNavbarQuery();
//   return (
//     <header className="app-cpn-header">
//       <section>
//         <form name="headersearch" id="headersearch" method="get">
//           <div className="header-top">
//             {/* <div className="mobile-menu-c mobile-view">
//               <button
//                 className="mobile-menu mobile-menu--spin"
//                 type="button"
//                 id="mobile-menu"
//               >
//                 <span className="mobile-menu-box">
//                   <span className="mobile-menu-inner" />
//                 </span>
//               </button>
//             </div> */}

//             <div className="brand-c">
//               <div className="brand">
//                 <div>
//                   <GatsbyImage image={getImage(logo)} alt="desktop logo" />
//                 </div>
//                 {/* <a href="/locations" className="mobile-logo" /> */}
//               </div>
//             </div>

//             <div className="search-bar">
//               <div className="search-and-location">
//                 {/* <!-- Search Category --> */}
//                 <div className="search-c main-search-c">
//                   <div className="input-group">
//                     <div className="input-group-prepend">
//                       <span className="input-group-text mainsearch-input-group-text">
//                         <i className="icon-earth" />
//                       </span>
//                     </div>

//                     <input
//                       type="hidden"
//                       name="maincat_id"
//                       id="maincat_id"
//                       value="0"
//                     />
//                     <input
//                       name="mainsearch"
//                       type="search"
//                       value=""
//                       id="mainsearch"
//                       placeholder="Search Green Building,Sustainable Agricult..."
//                       autoCorrect="off"
//                       autoComplete="off"
//                     />

//                     {/* <!-- Search Categories --> */}
//                     <div className="search-categories search-list fade">
//                       <ul>
//                         <li>
//                           <a
//                             href="#"
//                             className="categoryclick"
//                             // cat_id="0"
//                           >
//                             <i className="icon-earth" />
//                             All
//                           </a>
//                         </li>

//                         <li>
//                           <a href="#" className="categoryclick">
//                             <i
//                               className="category-icon icon-building building-color"
//                               // cat_id="133"
//                             />
//                             Green Building
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="categoryclick">
//                             {/* <!--  Category List Icons:you

//                                                 icon-enviroment
//                                                 icon-lodging
//                                                 icon-food
//                                                 icon-building
//                                                 icon-retailer
//                                                 icon-tourism
//                                                 icon-work
//                                                 icon-other
//                                              -->

//                               <!-- Example how it should be: --> */}
//                             <i
//                               className="category-icon icon-agriculture agriculture-color"
//                               // cat_id="135"
//                             />
//                             Sustainable Agriculture
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="categoryclick">
//                             {/* <!--  Category List Icons:you

//                                                 icon-enviroment
//                                                 icon-lodging
//                                                 icon-food
//                                                 icon-building
//                                                 icon-retailer
//                                                 icon-tourism
//                                                 icon-work
//                                                 icon-other
//                                              -->

//                               <!-- Example how it should be: --> */}
//                             <i
//                               className="category-icon icon-work work-color"
//                               // cat_id="138"
//                             />
//                             Work Trade / Volunteer
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="categoryclick">
//                             {/* <!--  Category List Icons:you

//                                                 icon-enviroment
//                                                 icon-lodging
//                                                 icon-food
//                                                 icon-building
//                                                 icon-retailer
//                                                 icon-tourism
//                                                 icon-work
//                                                 icon-other
//                                              -->

//                               <!-- Example how it should be: --> */}
//                             <i
//                               className="category-icon icon-enviroment enviroment-color"
//                               // cat_id="136"
//                             />
//                             Environmental Conservation
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="categoryclick">
//                             {/* <!--  Category List Icons:you

//                                                 icon-enviroment
//                                                 icon-lodging
//                                                 icon-food
//                                                 icon-building
//                                                 icon-retailer
//                                                 icon-tourism
//                                                 icon-work
//                                                 icon-other
//                                              -->

//                               <!-- Example how it should be: --> */}
//                             <i
//                               className="category-icon icon-lodging lodging-color"
//                               // cat_id="134"
//                             />
//                             Eco Lodging
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="categoryclick">
//                             {/* <!--  Category List Icons:you

//                                                 icon-enviroment
//                                                 icon-lodging
//                                                 icon-food
//                                                 icon-building
//                                                 icon-retailer
//                                                 icon-tourism
//                                                 icon-work
//                                                 icon-other
//                                              -->

//                               <!-- Example how it should be: --> */}
//                             <i
//                               className="category-icon icon-tourism tourism-color"
//                               // cat_id="139"
//                             />
//                             Eco Tourism
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="categoryclick">
//                             {/* <!--  Category List Icons:you

//                                                 icon-enviroment
//                                                 icon-lodging
//                                                 icon-food
//                                                 icon-building
//                                                 icon-retailer
//                                                 icon-tourism
//                                                 icon-work
//                                                 icon-other
//                                              -->

//                               <!-- Example how it should be: --> */}
//                             <i
//                               className="category-icon icon-retailer retailer-color"
//                               // cat_id="137"
//                             />
//                             Retailer
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="categoryclick">
//                             {/* <!--  Category List Icons:you

//                                                 icon-enviroment
//                                                 icon-lodging
//                                                 icon-food
//                                                 icon-building
//                                                 icon-retailer
//                                                 icon-tourism
//                                                 icon-work
//                                                 icon-other
//                                              -->

//                               <!-- Example how it should be: --> */}
//                             <i
//                               className="category-icon icon-food food-color"
//                               // cat_id="155"
//                             />
//                             Food & Beverage
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="categoryclick">
//                             {/* <!--  Category List Icons:you

//                                                 icon-enviroment
//                                                 icon-lodging
//                                                 icon-food
//                                                 icon-building
//                                                 icon-retailer
//                                                 icon-tourism
//                                                 icon-work
//                                                 icon-other
//                                              -->

//                               <!-- Example how it should be: --> */}
//                             <i
//                               className="category-icon icon-other other-color"
//                               // cat_id="154"
//                             />
//                             Other
//                           </a>
//                         </li>
//                       </ul>
//                     </div>

//                     <a
//                       href="#cancelsearch"
//                       className="cancelSearch"
//                       id="cancelSearchMain"
//                     >
//                       <span className="icon-cancel" />
//                     </a>
//                   </div>
//                 </div>
//                 {/* <!-- .main-search-c -->

//                   <!-- Search Location --> */}
//                 <div className="search-c main-location-c">
//                   <div className="input-group mainlocation-input-group-text">
//                     <div className="input-group-prepend">
//                       <span className="input-group-text">
//                         <i className="icon-marker" />
//                       </span>
//                     </div>

//                     <input type="hidden" name="mainlat" id="mainlat" value="" />
//                     <input
//                       type="hidden"
//                       name="mainlong"
//                       id="mainlong"
//                       value=""
//                     />
//                     <input
//                       name="mainlocation"
//                       type="search"
//                       value="Everywhere"
//                       id="mainlocation"
//                       className=""
//                       placeholder="City, State or Zip"
//                       autoComplete="off"
//                     />
//                     {/* <!-- Search Location --> */}
//                     <div className="search-location search-list fade">
//                       <ul>
//                         {/* <!-- <li>
//                                         <a href="#" className="locationclick currentlocation">
//                                         <i className="icon-location"></i>
//                                         Current Location
//                                         </a>
//                                         </li> --> */}

//                         <li>
//                           <a href="#" className="locationclick">
//                             <i className="icon-history" />
//                             Tres Piedras, NM, US
//                           </a>
//                         </li>

//                         <li>
//                           <a href="#" className="locationclick">
//                             <i className="icon-history" />, NM, US
//                           </a>
//                         </li>

//                         <li>
//                           <a href="#" className="locationclick">
//                             <i className="icon-history" />
//                             Indianapolis, IN, US
//                           </a>
//                         </li>

//                         <li>
//                           <a href="#" className="locationclick">
//                             <i className="icon-history" />
//                             San Diego, CA, US
//                           </a>
//                         </li>

//                         <li>
//                           <a href="#" className="locationclick">
//                             <i className="icon-history" />
//                             CA, US
//                           </a>
//                         </li>

//                         <li>
//                           <a href="#" className="locationclick">
//                             <i className="icon-history" />
//                             SF, CA, US
//                           </a>
//                         </li>

//                         <li>
//                           <a href="#" className="locationclick">
//                             <i className="icon-history" />
//                             Taos, NM, US
//                           </a>
//                         </li>

//                         <li>
//                           <a href="#" className="locationclick">
//                             <i className="icon-history" />
//                             Carson, NM, US
//                           </a>
//                         </li>
//                       </ul>
//                     </div>

//                     <a
//                       href="#cancelsearch"
//                       className="cancelSearch"
//                       id="cancelSearchLoc"
//                     >
//                       <span className="icon-cancel" />
//                     </a>
//                   </div>
//                   {/* <!-- .mainlocation-input-group-text --> */}
//                 </div>
//                 {/* <!-- .main-location-c --> */}
//               </div>
//               {/* <!-- .search-and-location --> */}
//             </div>
//             {/* <!-- .search-bar --> */}

//             <aside>
//               {/* <!-- Add organizattion --> */}
//               <div>
//                 <a href="/register-business" className="btn add-location">
//                   + Add Organization
//                 </a>
//               </div>
//               {/* <!-- User quickmenu --> */}
//               <div>
//                 <div className="usermenu-c">
//                   <span className="btn aqua" id="usermenu">
//                     Hi John
//                   </span>
//                   <span className="usermenu-pointer" />
//                 </div>

//                 <div className="usermenu-list">
//                   {/* <!--  User profile name mobile view --> */}
//                   <div className="profile-name">
//                     <div>John Garland</div>
//                   </div>
//                   <div className="menu-title">My Organizations</div>
//                   <a href="/locations/38"> Earthship Biotecture </a>
//                   <a href="/locations/128"> Bioconstruccion Ecuador </a>
//                   <div className="line-sep m-0" />
//                   <a href="/signout">Sign Out</a>
//                 </div>
//               </div>

//               {/* <!-- Language preference -->
//                 <!-- NOTE: code available in 2 locations on the header here and inside the nav around line #428 for mobile-->
//                 <!--<div>
//                         <div className="header-language">
//                             <i className="icon-earth aqua-color" alt="select your languange" title="select language preference"></i>
//                             <span>EN</span>
//                         </div>
//                         </div>--> */}
//             </aside>
//           </div>
//           {/* <!-- .header-top --> */}
//         </form>
//       </section>

//       {/* <!-- Begin Nav --> */}
//     </header>
//   );
// }

// export default AppNavbar;
