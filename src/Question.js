import './ques.css';

const Question = () => {
    return (
      <div class="quescontainer">
        <div class="qtext">
          <p class="qttitle>Need Consultation?<br>Contact us, we are ready to help
          </p>
          <div class="qtcontact">
            <h3 class="qtctitle">Contact</h3>
            <ul class="qtccon">
                <li class="qtcclink qtccl1">JI, Jakarta Bandung, Jakarta</li>
                <li class="qtcclink qtccl2">021 - 3943943</li>
                <li class="qtcclink qtccl3">myproperty@gmail.com</li>
            </ul>
          </div>
          <div class="qtcontact qtsocial">
            <h3 class="qtctitle">Social Media</h3>
            <ul class="qtccon qtcsocial">
                <li class="qtcclink qtcs1"><a href="https://www.instagram.com/atp.guptaji/" class="nounder qtcslinka">@myproperty</a></li>
                <li class="qtcclink qtcs2"><a href="https://www.linkedin.com/in/aryanthepain/" class="nounder qtcslinka">@myproperty</a></li>
                <li class="qtcclink qtcs3"><a href="https://www.instagram.com/atp.guptaji/" class="nounder qtcslinka">My property</a></li>
            </ul>
          </div>
    </div>
        </div>
        <div class="quesform">
        <p class="qftitle">Any Question?</p>
        <form class="qform">
            <input type="email" name="" id="" placeholder="Enter your email here" class="qfemail">
            <input type="text" name="" id="" placeholder="Enter your question here" class="qfques">
            <input type="submit" value="SEND" class="qfsubmit" >
        </form>
        </div>
      </div>
    );
}
 
export default Question;
