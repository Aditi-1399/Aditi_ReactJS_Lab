import axios from 'axios';
import Purchase from '../components/Purchase';


const getDatafromServer=()=>{
 return axios.get('http://localhost:3000/items')
 .then(response =>response.data)
}
const pushData=(payeeName,setDate,price,product)=>{
    let purchase={payeeName,setDate,price,product}
          return axios.post('http://localhost:3000/items',purchase,{
              headers:{'Content-Type':'application/json'}
          }).then(response=>response.data)
    
}
export {getDatafromServer,pushData}