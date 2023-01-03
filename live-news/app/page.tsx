//page.tsx is d homepage for nextjs 13/...while in nextjs 12,the home directory is  index.ts in pages direcrory

import { categories } from "../constants"
import fetchNews from "../lib/fetchNews"
import { NewsResponse } from "../typings"

//this will take a news prop and prrender
const Homepage = async () => {
  // const news: NewsResponse = await fetchNews(categories.join(','))
  // console.log('news', news)
  return (
    <div>
        {/* News list news  */}
    </div>
  )
}
 
export default Homepage
// function  News(arg0: string): NewsResponse | PromiseLike<NewsResponse> {
//   throw new Error("Function not implemented.")
// }

