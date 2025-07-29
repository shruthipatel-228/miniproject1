import './Preview.css'
import  image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import { useNavigate } from 'react-router-dom'

function PreviewPage(){
    let navigate=useNavigate()
    let templatesArray=[
        {name:"classic",image:image1,path:1},
        {name:"advance",image:image2,path:2},
        {name:"pro",image:image3,path:3}

    ]
    
    return(
        <div className='card-container'>
          {
            templatesArray.map((item,index)=>{
                return(
                    <div className='card' onClick={()=>navigate(`/preview/${item.path}`)}>
                        <img src={item.image} width='80%' height='80%' alt='img'></img>
                        <h3>{item.name}</h3>
                        </div>
                )
            }
            )
        }
           
        </div>
    )
}
export default PreviewPage