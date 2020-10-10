// import React from 'react';
// import { useStateValue} from "./StateProvider";
// import useGoogleSearch from "./useGoogleSearch";

// function ImagesPage() {
//     const [{term},dispatch] = useStateValue();
//     const { data } = useGoogleSearch(term);

//   return (
//            data.items.map(item =>(
//             <div>
//                 <a href={item.link}>
//                     {item.pagemap?.css_image?.length>0 &&item.pagemap?.cse_image[0]?.src &&(
//                     <img className="searchPage_resultImage"
//                     src={item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src}
//                     alt=""/>
//                     )}
//                 </a>
//             </div>
//            ))
//         )

   
// }

// export default ImagesPage