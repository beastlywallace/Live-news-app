//page.tsx is d homepage for nextjs 13/...while in nextjs 12,the home directory is  index.ts in pages direcrory

//this will take a news prop and prrender
const Homepage = async () => {
  const news:NewsResponse = await fetchNews(categories.join(', '))
  return (
    <div>
        {/* News list news  */}
    </div>
  )
}

export default Homepage
