import React from 'react'
import NavbarStatic from '../Components/NavbarStatic/NavbarStatic'
import people1 from '../assets/people1.jpg'
import peopleSample from '../assets/people-sample.jpg'
import people2 from '../assets/2.jpg'
import people3 from '../assets/3.jpg'
import people4 from '../assets/4.jpg'
import people5 from '../assets/5.jpg'
import people6 from '../assets/6.jpg'
import people7 from '../assets/7.jpg'
import people8 from '../assets/8.jpg'
import people9 from '../assets/9.jpg'
import people10 from '../assets/10.jpg'
import people11 from '../assets/11.jpg'
import people12 from '../assets/12.jpg'
import './TeamScreen.css'
import white_arrow from '../assets/white-arrow.png'
import { FaEnvelope, FaIdBadge} from 'react-icons/fa'
import Title from '../Components/Title/Title'


const TeamScreen = () => {
  return (
    <>
        <NavbarStatic />
        <div className='leader'>
          <div className="leader-right">

            <img src={people1} alt="" className='leader-img'/>
            <a href='https://orcid.org/0000-0002-4600-0036'>
            <FaIdBadge className='icon'/> ORCID
            </a>
            <p>
            <FaEnvelope className='icon'/> www.peng0923@gmail.com
            </p>
            <button className='btn dark-btn'>了解更多 <img src={white_arrow} alt="" /></button>
          </div>
          <div className="leader-left">
            <h2>彭微微</h2>
            <h2>Principal Investigator
            </h2>
            <h3>研究方向</h3>
            <p>结合心理物理测量、脑电和功能磁共振技术，探索人类疼痛和共情的认知神经机制，在此基础上结合无创神经调控技术和心理行为干预建立面向疼痛缓解的调控系统和方法。</p>

            <h3>教育/工作经历</h3>
            <p>2006/09—2010/06 天津大学 精密仪器与光电子工程学院 生物医学工程 学士。</p>
            <p>2013/05—2014/04 意大利罗马大学(University of Rome Sapienza) 联合培养</p>
            <p>2010/09—2014/12 香港大学 李嘉诚医学院 生物医学工程 博士</p>
            <p>2014/12—2016/09 西南大学 心理学部 讲师/副教授</p>
            <p>2016/10—2022/06 深圳大学 心理学院 副教授</p>
            <p>2022/06—今 深圳大学 心理学院 教授/博士生导师</p>

            <h3>奖励和称号</h3>
            <p>广东省珠江计划青年拔尖人才（2018）</p>
            <p>深圳市孔雀高层次人才C类 （2017）</p>
            <p>深圳大学优秀青年项目“荔园优青 （2019&2022）</p>
            <p>深圳大学新锐研究生导师 （2020）</p>
            <p>深圳大学百篇优秀本科毕业论文（设计）指导教师 （2021&2023）</p>
            <p>深圳市优秀教师（2023）</p>
            <p>2022年度北京市科学技术奖自然科学奖二等奖（排名4/9）</p>
            <p>2023年度中国康复医学会科学技术奖一等奖（排名2/11）</p>
          </div>
        </div>
        <div className='leader'>
          <div className="leader-right">

            <img src={peopleSample} alt="" className='leader-img'/>
            <a href='https://orcid.org/0000-0002-4600-0036'>
            <FaIdBadge className='icon'/> ORCID
            </a>
            <p>
            <FaEnvelope className='icon'/> ?
            </p>
          </div>
          <div className="leader-left">
            <h2>李晓云</h2>
            <h2>Assistant Professor
            </h2>
            <h3>研究方向</h3>
            <p>?</p>

            <h3>教育/工作经历</h3>
          
          </div>
        </div>

        
        <Title subTitle='team members' title='团队成员'/>
        <div className='members-container'>
          <div className='members'>


            <img src={people2} alt="" className='member-img'/>
            <img src={people3} alt="" className='member-img'/>
            <img src={people4} alt="" className='member-img'/>
            <img src={people5} alt="" className='member-img'/>
            <img src={people6} alt="" className='member-img'/>
            <img src={people7} alt="" className='member-img'/>
            <img src={people8} alt="" className='member-img'/>
            <img src={people9} alt="" className='member-img'/>
            <img src={people10} alt="" className='member-img'/>
            <img src={people11} alt="" className='member-img'/>
            <img src={people12} alt="" className='member-img'/>
          </div>
        </div>
        


      

    </>
  )
}

export default TeamScreen
