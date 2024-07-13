import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

      // ------Enter your web3forms access key below-------
      
      formData.append("access_key", "-----Enter your web3forms key----");
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
        setResult(res.message);
        event.target.reset();
      } else {
        console.log("Error", res);
        setResult(res.message);
      }
    };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>欢迎联系我们 <img src={msg_icon} alt="" /></h3>
        <p>我们的实验室致力于推动疼痛治疗科学的前沿，解决重大问题，并在创新中不断突破。我们相信协同合作是实现这一目标的关键。</p> 
        <br></br>
        <p>我们诚挚邀请您加入我们的合作网络，共同探索未知领域，分享知识和资源。我们相信通过协同努力，我们可以创造出超越个体努力的成果，为科学领域带来更多的突破和创新。</p>

      <br></br><p>如果您对与我们实验室的合作感兴趣，或者有任何问题和建议，请随时与我们联系。</p>
        <ul>
            <li><img src={mail_icon} alt="" />
            ww.peng0923@gmail.com</li>
            <li><img src={phone_icon} alt="" />(555) 867-5309</li>
            <li><img src={location_icon} alt="" />深圳大学沧海校区致理楼L3-1226<br/></li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>姓名</label>
            <input type="text" name='name' placeholder='请填写您的姓名' required/>
            <label>电话</label>
            <input type="tel" name='phone' placeholder='请填写您的电话' required/>
            <label>内容</label>
            <textarea name="message" rows="6" placeholder='请填写内容' required></textarea>
            <button type='submit' className='btn dark-btn'>提交 <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
