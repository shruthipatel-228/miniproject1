import './HomePage.css'
import { useNavigate } from 'react-router-dom'
function HomePage(){
    let navigate=useNavigate();
    let handleClick=()=>{
        navigate('/preview');
    }
 
    return(

<div className='main-container' >
    <div className='sub-container'>
        <h1 className='heading'>Craft your beautiful resumes</h1>
        <p className='tagline'>Build , design and download your beautiful resumes with customised templates</p>
        <button className='startBtn' onClick={handleClick}>Generate Now </button>

    </div>
</div>

 )
}
export default HomePage