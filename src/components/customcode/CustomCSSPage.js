import React, { useState } from 'react'
import "./scss/customcss.scss"
const CustomCSSPage = () => {
  const [customCSS, setCustomCSS] = useState('');
  const [customJS, setCustomJS] = useState('');


  return (
    <section>
      <div className="customar_list_wrapper">
        <div className="customar_list">
          {/* container header start */}

          <div className="form_header">
            <div className="title">
              <h3 style={{textDecoration:'underline'}}>Customer CSS And JavaScript Code Editor</h3>
            </div>
          </div>
          {/* container header end */}


          {/* container sub header end */}

          {/* container  body start */}
          <div className='code_editor_css_js'>
            {/* Custom code here  */}
            <textarea  onChange={(e) => setCustomCSS(e.target.value)}
             placeholder='Style.css'></textarea>
          </div>
          {/* container body end */}
          <hr style={{marginTop:"1.5rem", backgroundColor:'black', height:'2px'}}></hr>
          <div style={{marginTop:"1.5rem"}} className='code_editor_css_js'>
            {/* Custom code here  */}
            <textarea 
            onChange={(e) => setCustomJS(e.target.value)} placeholder='Script.js'></textarea>
          </div>


        </div>
      </div>
    </section>
  )
}

export default CustomCSSPage