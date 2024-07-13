import React from 'react'
import './Publication.css'
import about_img from '../../assets/logo.png'


const About = ({setPlayState}) => {
  return (
    <div className='publication'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        
      </div>
      <div className="about-right">
        <h3>ABOUT OUR LAB</h3>
        <h2>关于我们的实验室</h2>
        <p>本实验室成立于XXXX年XX月XX日，彭微微教授担任本课题组的负责人，目前课题组还包括助理教授李晓云、博士后翁玲玲、2名博士生、13名研究生和3名本科生。</p>
        <p>课题组采用生理心理学和认知神经科学的方法，利用心理物理测量、神经影像学技术、神经电生理、神经调控以及药理调控等多种手段，对健康人群和疼痛患者进行全面研究，以了解疼痛的认知神经机制，建立客观准确的疼痛评估系统，并开发基于心理物理法的镇痛策略，希望为临床治疗提供新的视角和有效手段。</p>
      </div>
    </div>
  )
}

export default About
