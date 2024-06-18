import './ques.css';

const Question = () => {
  return (
      <div className="quescontainer">
          <div className="qtext">
              <p className="qttitle">Need Consultation?<br/>Contact us, we are ready to help</p>
              <div className="qtcontact">
                  <h3 className="qtctitle">Contact</h3>
                  <ul className="qtccon">
                      <li className="qtcclink qtccl1">JI, Jakarta Bandung, Jakarta</li>
                      <li className="qtcclink qtccl2">021 - 3943943</li>
                      <li className="qtcclink qtccl3">myproperty@gmail.com</li>
                  </ul>
              </div>
              <div className="qtcontact qtsocial">
                  <h3 className="qtctitle">Social Media</h3>
                  <ul className="qtccon qtcsocial">
                      <li className="qtcclink qtcs1"><a href="https://www.instagram.com/atp.guptaji/" className="nounder qtcslinka">@myproperty</a></li>
                      <li className="qtcclink qtcs2"><a href="https://www.linkedin.com/in/aryanthepain/" className="nounder qtcslinka">@myproperty</a></li>
                      <li className="qtcclink qtcs3"><a href="https://www.instagram.com/atp.guptaji/" className="nounder qtcslinka">My property</a></li>
                  </ul>
              </div>
          </div>
          <div className="quesform">
              <p className="qftitle">Any Question?</p>
              <form className="qform">
                  <input type="email" placeholder="Enter your email here" className="qfemail" required/>
                  <textarea placeholder="Enter your question here" className='qfques' required></textarea>
                  <input type="submit" value="SEND" className="qfsubmit" />
              </form>
          </div>
      </div>
  );
}

export default Question;
