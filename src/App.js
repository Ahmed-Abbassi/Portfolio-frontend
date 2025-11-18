
import './styles/App.scss'
import chat from './images/chat.jpg'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import About from './components/About'
import Project from './components/Project'
import Modal from './components/Modal'
import erp from './images/erp.png'
import onrtech from './images/lwc.gif'
import teachlead from './images/teachlead.webp'
import proxym from './images/proxym.png'

import {faCircleUp} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
function App() {
  const [formData , setFormData] =useState({fullName: '', email: '', phone: '', service: '', message: ''})
  const [VisibleScrollButton, setVisibleScrollButton] = useState(false)
  const [modalType , setModalType] = useState("")




  //functions

  const goTop = function(){
    window.scrollTo({
      top : 0,
      behavior : 'smooth'
    })
  }


  const handleSubmit = (e)=>{
    
    e.preventDefault()
    fetch("http://localhost:3001/contact", {
      method : "POST",
      headers : {
        "Content-type" : "application/json"
      },
      body : JSON.stringify(formData)
    }).then(response=>{
      if(!response.status===200){
        throw new Error('Network response error')
      }
      setFormData({fullName: '', email: '', phone: '', service: '', message: ''})
      return response.json()
    }).then(data=>{
      console.log(data);

    setModalType("success")
    setTimeout(()=>{
      setModalType("")
    },5000)
      
    }).catch((e)=>{
      console.log(e);
      
      setModalType("fail")
      setTimeout(()=>{
        setModalType("")
      },5000)
      
    })
  }
  
  
  

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
    console.log(formData);
  };

  useEffect(()=>{
    const handleScroll = ()=>{
      const isTop = window.scrollY < 500;
      setVisibleScrollButton(!isTop)
    }

    window.addEventListener("scroll", handleScroll)
    
    return ()=> window.removeEventListener('scroll', handleScroll)
  }, [])
  console.log("hello");


  return (
    <div className="App">
      <Header />
      <main>
        {VisibleScrollButton && <div onClick={goTop} id='scrollTop'><FontAwesomeIcon id='icon' size='lg' icon={faCircleUp} /></div>}
        <AboutMe />
        <About />
        <h4 id='portfolio'>Portfolio</h4>
        <h4 id='afterPortfolio'>Each Project is a piece of developement</h4>
        <div id='projectsList'>
          {/* ERP MERN PROJECT */}
      <Project
        image={erp}
        name= "ERP Management System"
        description={
          "ERP Management System built with the MERN stack. Includes authentication, user roles, product management, sales operations, and dynamic dashboards. Backend built with Express and MongoDB, frontend with React and Context API. Deployed using Netlify + Render."
        }
        technologies={["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "CSS"]}
      />

      {/* CHAT APP EXAMPLE */}
      <Project
        image={chat}
        name= "Real-time Chat Application"
        description={
          "Real-time chat application using React and Express.js with responsive UI components. Features include live messaging, clean UX, and optimized code structure."
        }
        technologies={["React.js", "CSS", "Express.js"]}
      />

      {/* ONRTECH INTERNSHIP PROJECT */}
      <Project
        image={onrtech}
        name= "Salesforce AI Virtual Assistant Integration"
        description={
          "Integration of the EchoParrot AI Virtual Assistant with Salesforce. Developed LWCs, integrated REST APIs, built UI for AI calls, script selection, and results visualization. Participated in functional testing."
        }
        technologies={["Salesforce", "LWC", "Apex", "SOQL", "REST API", "OAuth 2.0"]}
      />

      {/* TEACHLEAD INTERNSHIP PROJECT */}
      <Project
        image={teachlead}
        name= "Salesforce  Application for Community User Management"
        description={
          "Developed a Salesforce Aura application for community user management. Added filters, pagination, dashboards, and implemented Web-to-Case with attachment integration."
        }
        technologies={["Apex", "SOQL", "Aura", "LWC", "JavaScript"]}
      />

      {/* PROXYM FINAL YEAR PROJECT */}
      <Project
        image={proxym}
        name= "Design System and No-Code Page Builder"
        description={
          "Developed an internal Design System with reusable components and documentation. Built a no-code Page Builder generating dynamic pages and automated code generation for UI components."
        }
        technologies={[
          "React.js",
          "TypeScript",
          "Chakra UI",
          "Storybook",
          "Node.js",
          "MySQL",
        ]}
      />
        </div>
        

        {/*contact form starts here*/}
        
        <div id='contact'>
          <h1>Contact me</h1>
          <form method='post' onSubmit={handleSubmit}>
            <div id='FullNameContainer'>
              <label>Full Name *</label><br/>
              <input value={formData.fullName} placeholder='Enter Your Name' onChange={handleChange} type='text' name='fullName' required />
            </div>
            <div  className='emailConatainer'>
                <label>Email *</label><br/>
                <input value={formData.email} placeholder='Enter Your Email' onChange={handleChange} type='text' name='email' required />
              </div>
              <div className='phoneContainer'>
                <label>Phone</label><br/>
                <input value={formData.phone} placeholder='Enter Phone Number' onChange={handleChange} type='text' name='phone' />
              </div>

            <div id='emailAndPhoneContainer'>
              <div className='emailConatainer1'>
                <label>Email *</label><br/>
                <input value={formData.email} placeholder='Enter Your Email' onChange={handleChange} type='text' name='email' required />
              </div>
              <div className='phoneContainer2'>
                <label>Phone</label><br/>
                <input value={formData.phone} placeholder='Enter Phone Number' onChange={handleChange} type='text' name='phone' />
              </div>
            </div>
            <div id='selecionContainer'>
              <label>Needed Service *</label><br/>
              <select value={formData.service} onChange={handleChange} name='service'>
                <option id='remove'>Please choose</option>
                <option>Build web solution</option>
                <option>Build mobile solution</option>
                <option>Integrate salesforce solution</option>
              </select>
            </div>
            <div id='textAreaContainer'>
              <div>
              <label>Message</label> <br/>
              <textarea value={formData.message} onChange={handleChange} placeholder='Your message here' name='message' />
              </div>
            </div>
            <div id='btnContainer'>
            <input type='submit' id='btn' value={"submit"} />
            </div>
          </form>
        </div>

      </main>
      <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <h3>Portfolio</h3>
          <p>A showcase of my work</p>
        </div>
        <div className="footer-right">
          <h3>Contact Me</h3>
          <p>Email: abbassia082@gmail.com</p>
          <p>Phone: +50723785</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Abbassi Ahmed. All rights reserved.</p>
      </div>
    </footer>
  {modalType==="success" ? 
    <Modal identifier={'messageDialog1'} stateChange={setModalType}>form submitted successfully</Modal>
    :modalType==="fail" ? 
    <Modal identifier={'messageDialog2'} stateChange={setModalType}>Error submitting form</Modal>
    : <></>
    }
      
    </div>
  );
}
export default App