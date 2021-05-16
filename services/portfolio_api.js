import axios from 'axios'

const PortfolioDetail = async(path) => {

    // const url = `http://localhost:1337/${path}`   //local
    const url = `https://thawing-refuge-79448.herokuapp.com//${path}`
    const res = await axios.get(url)
    return res.data
}


export default PortfolioDetail