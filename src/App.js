import './styles/App.scss'
import chat from './images/chat.jpg'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import About from './components/About'
import Project from './components/Project'
import Modal from './components/Modal'
import erp from './images/erp.png'
import onrtech from './images/lwc.webp'
import teachlead from './images/teachlead.webp'
import proxym from './images/proxym.png'

import { faCircleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', service: '', message: '', attachment: null })
  const [VisibleScrollButton, setVisibleScrollButton] = useState(false)
  const [modalType, setModalType] = useState("")

  // Scroll to top function
  const goTop = function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Handle form field changes including file
  const handleChange = (e) => {
    const { name, type, value, files } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value
    }))
  }

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault()

    const data = new FormData()
    data.append('fullName', formData.fullName)
    data.append('email', formData.email)
    data.append('phone', formData.phone)
    data.append('service', formData.service)
    data.append('message', formData.message)
    if (formData.attachment) data.append('attachment', formData.attachment)

    fetch("http://localhost:3001/contact", {
      method: "POST",
      body: data // Content-Type automatically set by browser for FormData
    })
      .then(response => {
        if (response.status !== 200) throw new Error('Network response error')
        setFormData({ fullName: '', email: '', phone: '', service: '', message: '', attachment: null })
        return response.json()
      })
      .then(data => {
        console.log(data)
        setModalType("success")
        setTimeout(() => setModalType(""), 5000)
      })
      .catch(e => {
        console.log(e)
        setModalType("fail")
        setTimeout(() => setModalType(""), 5000)
      })
  }

  // Show scroll button on scroll
  useEffect(() => {
    const handleScroll = () => setVisibleScrollButton(window.scrollY > 500)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
            name="ERP Management System"
            description="ERP Management System built with the MERN stack. Includes authentication, user roles, product management, sales operations, and dynamic dashboards. Backend built with Express and MongoDB, frontend with React and Context API. Deployed using Netlify + Render."
            technologies={["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "CSS"]}
          />

          {/* CHAT APP EXAMPLE */}
          <Project
            image={chat}
            name="Real-time Chat Application"
            description="Real-time chat application using React and Express.js with responsive UI components. Features include live messaging, clean UX, and optimized code structure."
            technologies={["React.js", "CSS", "Express.js"]}
          />

          {/* ONRTECH INTERNSHIP PROJECT */}
          <Project
            showCode={false}
            image={onrtech}
            name="Salesforce AI Virtual Assistant Integration"
            description="Integration of the EchoParrot AI Virtual Assistant with Salesforce. Developed LWCs, integrated REST APIs, built UI for AI calls, script selection, and results visualization. Participated in functional testing."
            technologies={["Salesforce", "LWC", "Apex", "SOQL", "REST API", "OAuth 2.0"]}
          />

          {/* TEACHLEAD INTERNSHIP PROJECT */}
          <Project
            showCode={false}
            showDemo={true}
            demoId={"commManagement"}
            projectPath={"https://mellifluous-caramel-db6396.netlify.app/"}
            image={teachlead}
            name="Salesforce Application for Community User Management"
            description="Developed a Salesforce Aura application for community user management. Added filters, pagination, dashboards, and implemented Web-to-Case with attachment integration."
            technologies={["Apex", "SOQL", "Aura", "LWC", "JavaScript"]}
          />

          {/* PROXYM FINAL YEAR PROJECT */}
          <Project
            showCode={false}
            image={proxym}
            name="Design System and No-Code Page Builder"
            description="Developed an internal Design System with reusable components and documentation. Built a no-code Page Builder generating dynamic pages and automated code generation for UI components."
            technologies={["React.js", "TypeScript", "Chakra UI", "Storybook", "Node.js", "MySQL"]}
          />
        </div>

        {/* Contact form */}
        <div id='contact'>
          <h1>Contact me</h1>
          <form method='post' onSubmit={handleSubmit}>
            <div id='FullNameContainer'>
              <label>Full Name *</label><br />
              <input value={formData.fullName} placeholder='Enter Your Name' onChange={handleChange} type='text' name='fullName' required />
            </div>
            <div className='emailConatainer'>
              <label>Email *</label><br />
              <input value={formData.email} placeholder='Enter Your Email' onChange={handleChange} type='text' name='email' required />
            </div>
            <div className='phoneContainer'>
              <label>Phone</label><br />
              <input value={formData.phone} placeholder='Enter Phone Number' onChange={handleChange} type='text' name='phone' />
            </div>

            <div id='emailAndPhoneContainer'>
              <div className='emailConatainer1'>
                <label>Email *</label><br />
                <input value={formData.email} placeholder='Enter Your Email' onChange={handleChange} type='text' name='email' required />
              </div>
              <div className='phoneContainer2'>
                <label>Phone</label><br />
                <input value={formData.phone} placeholder='Enter Phone Number' onChange={handleChange} type='text' name='phone' />
              </div>
            </div>

            <div id='selecionContainer'>
              <label>Needed Service *</label><br />
              <select value={formData.service} onChange={handleChange} name='service'>
                <option id='remove'>Please choose</option>
                <option>Build web solution</option>
                <option>Build mobile solution</option>
                <option>Integrate salesforce solution</option>
                <option>Response to job or internship demand</option>
              </select>
            </div>

            <div id='textAreaContainer'>
              <div>
                <label>Message</label> <br />
                <textarea value={formData.message} onChange={handleChange} placeholder='Your message here' name='message' />
              </div>
            </div>

            <div id='fileContainer'>
  <label>Attachment (optional)</label><br />
  
  {/* Hidden actual file input */}
  <input
    type="file"
    name="attachment"
    id="fileInput"
    onChange={handleChange}
    style={{ display: 'none' }}
  />

  {/* Custom button */}
  <label htmlFor="fileInput" className="customFileButton">
    {formData.attachment ? formData.attachment.name : "Choose file"}
  </label>
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

      {modalType === "success" ?
        <Modal identifier={'messageDialog1'} stateChange={setModalType}>form submitted successfully</Modal>
        : modalType === "fail" ?
          <Modal identifier={'messageDialog2'} stateChange={setModalType}>Error submitting form</Modal>
          : null
      }
    </div>
  );
}

export default App
