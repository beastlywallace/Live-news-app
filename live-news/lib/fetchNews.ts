import { gql } from "graphql-request";
import { Category } from "../typings";     

const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean
) => {
   // graphql wuery
    const GET_QUERY = gql`
   
     query MyQuery{
        $access_key: String!
        $categories: String!
        $keywords: String
     } {
       myQuery(
          access_key: $access_key 
        categories: $categories
        countries: "gb"
        sort: "published_desc"
        keywords: $keywords
       ) {
         data {
           author
           category
           country
           description
           image
           language
           published_at
           source
           title
           url
         }
         pagination{
            count
            limit
            offset
            total
         }
       }
     }
   `;

    //fetch function with nextjs 13 cache..with  ur api Url in the console
    const res = await fetch(
      "https://decin.stepzen.net/api/queenly-unicorn/__graphql",
      {
        method: "POST",
        cache: isDynamic ? "no-cache" : "default",
        next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
        },
        body: JSON.stringify({
          query,
          variabes: {
            access_key: process.env.MEDIASTACK_API_KEY,
            categories: category,
            keywords: keywords,
          },
        }),
      }
    );
    console.log("loading new api", category, keywords)
    const newsResponse = await res.json()
    //sort by images

    //return result
}

//dynamic will determin how i will determine if a  page is  gonna end up caching  whereby at buildtme ,the cell will prebuild  page in d next js and revalidate them in 20secs..frm preventing the aapi quotre frm getting exhusted


// stepzen import curl  http://api.mediastack.com/v1/news?access_key=ab9c6744f111dbf05afef7b5f572b764&sources=business,sports


export default fetchNews;