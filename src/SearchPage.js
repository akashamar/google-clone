import React from 'react';
import './SearchPage.css';
import { useStateValue} from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import Response from './response';
import {Link} from 'react-router-dom';
import Search from './pages/Search';
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import response from './response';

function SearchPage() {
    const [{term},dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);  

    console.log(response,"i am akash")

    // function Change() {
    //     console.log(data)
    //     data.items.map(item =>
    //         ( <div className="imageDeploy">
    //             <a>
    //                 <h1>hi</h1>
    //             <img className="searchPage_resultImage"
    //        src="https://merriam-webster.com/assets/mw/static/social-media-share/mw-logo-245x245@1x.png"
    //        alt=""/>
    //        </a>
    //     </div>)
    // )}


    //Mock api call


    return (
        <div classname='searchPage'>
            <div className="searchPage_header">
                <Link to="/">
                    <img
                    className="searchPage_logo"
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    alt=""
                    />
                </Link>

                <div className="searchPage_headerBody">
                     <Search hideButton/>

                     <div className="searchPage_options">
                         <div className="searchPage_optionsLeft">
                             <div className="searchPage_option">
                                  <SearchIcon/>
                                  <Link to="/all">all</Link>
                             </div>
                             <div className="searchPage_option">
                                 <DescriptionIcon/>
                                 <Link to="news">News</Link>
                             </div>
                             <div className="searchPage_option">
                                 <ImageIcon />
                                 <Link to="/images">Images</Link>
                             </div>
                             <div className="searchPage_option">
                                 <LocalOfferIcon/>
                                 <Link to="shopping">shopping</Link>
                             </div>
                             <div className="searchPage_option">
                                 <RoomIcon/>
                                 <Link to="maps">maps</Link>
                             </div>
                             <div className="searchPage_option">
                                 <MoreVertIcon/>
                                 <Link to="more">more</Link>
                             </div>
                         </div>
                         <div className="searchPage_optionsRight">
                             <div className="searchPage_option">
                                 <Link to="/settings">Settings</Link>
                             </div>
                             <div className="searchPage_option">
                                 <Link to="tools">Tools</Link>
                             </div>
                         </div>
                     </div>
                </div>
            </div>

            {term && (
                <div className="searchPage_results">
                    <p className="searchPage_resultCount">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>

                    {data?.items.map(item =>(
                        <div className="searchPage_result">
                            <a className="searchPage_resultLink" href={item.link}>
                                {item.pagemap?.cse_image?.length>0 &&item.pagemap?.cse_image[0]?.src &&(
                                    <img className="searchPage_resultImage"
                                    src={item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src}
                                    alt=""/>
                                )}


                              {item.displayLink}  ▾
                            </a>
                            <a className="searchPage_resultTitle" href={item.link}>
                            <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage_resultSnippet">{item.snippet}</p>
                        </div>
                    ))}
                </div>

            )}

            <div className="searchPage_results">

            </div>
        </div>
    )
}

export default SearchPage