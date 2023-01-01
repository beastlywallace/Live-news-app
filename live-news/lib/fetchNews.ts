import { Category } from "../typings";     

const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean

) => {
   // graphql wuery
   
    //fetch function with nextjs 13

 
    //sort by images

    //return result
}

//dynamic will determin how i will determine if a  page is  gonna end up caching  whereby at buildtme ,the cell will prebuild  page in d next js and revalidate them in 20secs..frm preventing the aapi quotre frm getting exhusted


// stepzen import curl  http://api.mediastack.com/v1/news?access_key=ab9c6744f111dbf05afef7b5f572b764&sources=business,sports