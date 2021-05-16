import MainLayout from '../../src/components/layouts/MainLayout'
import fetchPortfolio from '../../services/portfolio_api'

const PortfolioDetail = ({portfolio}) => {

    // console.log(portfolio)

    return (
        <MainLayout 
            pageTitle= {`${portfolio.Headline} การวางแผนโครงการสำหรับองค์กร | Portfolio | SamitKoyom.com`}
            description="ผลงานของฉัน สามิตร โกยม หน้ารวบรวมผลงาน"
            KeyWords="ผลงาน, สามิตร โกยม,หน้ารวบรวมผลงาน,อาจารย์สอนเขียนเว็บ, สอน PHP and MySQL,ปรึกษาโปรเจ็กต์ทำเว็บ,รับทำเว็บ,รับออกแบบเว็บไซต์, แอพพลิเคชั่น android, แอพพลิเคชั่น ios"
            image="https://www.itgenius.co.th/assets/frondend/images/socialcover/home-social-share.jpg"
        >

        <section>
            <div className="container py-20 mx-auto">
                <div className="flex flex-wrap items-center">
                <div className="w-full p-4 lg:w-4/12">
                    <img src={`https://thawing-refuge-79448.herokuapp.com/${portfolio.image[0].url}`} className="w-full" />
                </div>
                <div className="w-full p-4 lg:w-7/12 lg:ml-auto">
                    <h6 className="mb-3 font-medium text-indigo-900">{portfolio.Headline}</h6>
                    <h2 className="mb-3 text-4xl font-semibold leading-tight text-gray-800 capitalize">{portfolio.Headline}</h2>
                   
                    {portfolio.content}

                </div>
                </div>
            </div>
        </section>


        </MainLayout>
    )
}


export async function getStaticPaths() {
    const portfolios = await fetchPortfolio('portfolios')

    return {
        paths: portfolios.map((portfolio) => ({
            params: {
                slug: portfolio.slug,
            }
        })),
        fallback: false 
    }
}

export async function getStaticProps({params}) {

    const portfolio = await fetchPortfolio(`portfolios?slug=${params.slug}`)

    return {
        props: { portfolio: portfolio[0] },
        revalidate: 1
    }
}


export default PortfolioDetail