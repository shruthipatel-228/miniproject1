import './ResumeForm.css'
function ResumeForm({resumeData,setResumeData}){

     console.log(resumeData)
    function AddBlock(section,feilds)
    {
        setResumeData({...resumeData,[section]:[...resumeData[section],feilds]})
    }

    function removeBlock(section,index)
    {
        let data=resumeData[section].filter((item,i)=>i!=index);
        setResumeData({...resumeData,[section]:data})
    }

    function updateField(section,feild,value)
    {
         setResumeData({...resumeData,[section]:{...resumeData[section],[feild]:value}})
    }
    function update(section,value)
    {
 setResumeData({...resumeData,[section]:value})
    }

    function updateArray(section,index,feild,value)
    {
        let data=resumeData[section];

        let updatedData=data.map((item,i)=>i==index?{...item,[feild]:value}:item)

        setResumeData({...resumeData,[section]:updatedData})
    }

    function saveData()
    {
        localStorage.setItem("resume",JSON.stringify(resumeData))
    }

    return(
        <div className="form-container">

            <div className="section">
                <h1 className='title'>Personal Details</h1>
                <div className='input-group'>
                <input type="text" placeholder="Enter your name" value={resumeData["personalDetails"].name} onChange={(e)=>updateField("personalDetails","name",e.target.value)}/>
                <input type="text" placeholder="Enter your email" value={resumeData["personalDetails"].email} onChange={(e)=>updateField("personalDetails","email",e.target.value)}/>
                <input type="text" placeholder="Enter your location" value={resumeData["personalDetails"].location} onChange={(e)=>updateField("personalDetails","location",e.target.value)}/>
                <input type="text" placeholder="Enter your mobile number" value={resumeData["personalDetails"].mobile} onChange={(e)=>updateField("personalDetails","mobile",e.target.value)}/>
                <input type="text" placeholder="Enter your linkedin" value={resumeData["personalDetails"].linkedIn} onChange={(e)=>updateField("personalDetails","linkedIn",e.target.value)}/>
                <input type="text" placeholder="Enter your github " value={resumeData["personalDetails"].github} onChange={(e)=>updateField("personalDetails","github",e.target.value)}/>
                <input type="text" placeholder="Enter your website" value={resumeData["personalDetails"].website} onChange={(e)=>updateField("personalDetails","website",e.target.value)}/>
                </div>
            </div>

             <div className="section">
                <h1 className='title'> Professional Summary</h1>
                <div className='input-group'>
               <textarea placeholder='Enter your professional summary in two/three lines' value={resumeData["summary"]} onChange={(e)=>update("summary",e.target.value)}></textarea>
                </div>
            </div>


             <div className="section">
                <div>
                <h1 className='title'>Experience</h1>
                <button className='add' onClick={()=>AddBlock("experience",{company:"",position:"",duration:"",description:""})}>Add Experience</button>
                </div>
            </div>

            {
                resumeData["experience"].map((exp,index)=>{
                    return(
                        <div key={index}>
                        <input type='text' placeholder='Enter company ' value={exp.company} onChange={(e)=>updateArray("experience",index,"company",e.target.value)}/>
                        <input type='text' placeholder='position ' value={exp.position} onChange={(e)=>updateArray("experience",index,"position",e.target.value)}/>
                        <input type='text' placeholder='duration ' value={exp.duration} onChange={(e)=>updateArray("experience",index,"duration",e.target.value)}/>
                        <input type='text' placeholder='description ' value={exp.description} onChange={(e)=>updateArray("experience",index,"description",e.target.value)}/>
                        <div>
                            {resumeData["experience"].length>1 && 
                                <button  className='remove' onClick={()=>removeBlock("experience",index)}>remove</button>}
                         </div>
                         </div>
                    )
                })
            }

            <div className="section">
                <div>
                <h1 className='title'>Education</h1>
                <button className='add' onClick={()=>AddBlock("education",{school:"",duration:"",grade:""})}>Add Education</button>
                
                </div>
            </div>

            {
                resumeData["education"].map((edu,index)=>{
                    return(
                        <div key={index}>
                        <input type='text' placeholder='Enter your school'  value={edu.school} onChange={(e)=>updateArray("education",index,"school",e.target.value)}/>
                        <input type='text' placeholder='duration '  value={edu.duration} onChange={(e)=>updateArray("education",index,"duration",e.target.value)}/>
                        <input type='text' placeholder='grade '  value={edu.grade} onChange={(e)=>updateArray("education",index,"grade",e.target.value)}/>
                         <div>
                            {resumeData["education"].length>1 && 
                                <button  className='remove' onClick={()=>removeBlock("education",index)}>remove</button>}
                         </div>
                         </div>
                    )
                })
            }

             <div className="section">
                <div>
                <h1 className='title'>Projects</h1>
                <button className='add' onClick={()=>AddBlock("projects",{name:"",technologies:"",description:""})}>Add Project</button>
                </div>
            </div>

            {
                resumeData["projects"].map((pro,index)=>{
                    return(
                        <div key={index}>
                        <input type='text' placeholder='name '  value={pro.name} onChange={(e)=>updateArray("projects",index,"name",e.target.value)}/>
                        <input type='text' placeholder='technologies '  value={pro.technologies} onChange={(e)=>updateArray("projects",index,"technologies",e.target.value)}/>
                         <textarea placeholder='Enter project description'  value={pro.description} onChange={(e)=>updateArray("projects",index,"description",e.target.value)}/>
                          <div>
                            {resumeData["projects"].length>1 && 
                                <button  className='remove' onClick={()=>removeBlock("projects",index)}>remove</button>}
                         </div>
                         </div>
                    )
                })
            }

            <div className="section">
                <h1 className='title'> Skills</h1>
                <div className='input-group'>
                <textarea placeholder='Enter your skills' value={resumeData["skills"]} onChange={(e)=>update("skills",e.target.value)}></textarea>
                </div>
            </div>

            <button className="add" onClick={()=>saveData()}>Save</button>

        </div>
    )
}
export default ResumeForm