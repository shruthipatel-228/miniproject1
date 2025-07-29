import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import ResumeForm from './components/ResumeForm'
import PreviewPage from './components/Preview'
import Template1 from './components/template1'
import Template2 from './components/template2'
import Template3 from './components/template3'
import { Routes,Route } from 'react-router-dom'

import { useState } from 'react'
import { useEffect } from 'react'
function App(){

  useEffect(()=>{
    let data=localStorage.getItem("resume")
    data && setResumeData(JSON.parse(data));
  },[])
  let [resumeData,setResumeData]=useState({
    personalDetails:{
      name:"",
      email:"",
      location:"",
      mobile:"",
      linkedIn:"",
      github:"",
      website:"",
    },
  summary:"",
  experience:[
    {comapany:"",position:"",duration:"",description:""}
  ],
  education:[
    {school:"",duration:"",grade:""}
  ],
  projects:[
    {name:"",technologies:"",description:""}
  ],
  skills:""
  
  })
return (

<div>
<NavBar></NavBar>
<Routes>
  <Route path='/home' element={<HomePage/>}></Route>
  <Route path='/' element={<HomePage/>}></Route>
  <Route path='/edit' element={<ResumeForm resumeData={resumeData} setResumeData={setResumeData}/>}></Route>{/**resumeData,setResumeData is passed as props */}
  <Route path='/preview' element={<PreviewPage/>}></Route>
  <Route path='/preview/1' element={<Template1 data={resumeData}/>}></Route>
  <Route path='/preview/2' element={<Template2 resumeData={resumeData}/>}></Route>
  <Route path='/preview/3' element={<Template3 resumeData={resumeData}/>}></Route>
  
 

</Routes>


  </div>
)
}
export default App