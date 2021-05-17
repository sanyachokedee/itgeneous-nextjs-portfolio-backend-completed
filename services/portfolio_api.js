import axios from 'axios'

const fetchPortfolio = async(path) => {

    // const url = `http://localhost:1337/${path}`   //local
    const url = `https://thawing-refuge-79448.herokuapp.com/${path}`
    // const url = `https://guarded-plains-40899.herokuapp.com/${path}`  //url ของอาจารย์ก็ทำงานได้ OK เอามาประยุกต์ใช้หลายเว๊ป แต่มาจากที่เดียว
    const res = await axios.get(url)
    return res.data
}


export default fetchPortfolio