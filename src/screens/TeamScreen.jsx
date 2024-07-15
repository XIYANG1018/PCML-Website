import React from 'react'
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
import people13 from '../assets/13.jpg'
import people14 from '../assets/14.jpg'
import people15 from '../assets/15.jpg'
import people16 from '../assets/16.jpg'
import people17 from '../assets/17.jpg'
import xia from '../assets/xia.jpeg'
import xiaoyun from '../assets/xiaoyun.jpeg'
import weng from '../assets/weng.jpeg'

import './TeamScreen.css'
import white_arrow from '../assets/white-arrow.png'
import { FaEnvelope, FaIdBadge, FaStar, FaArrowRight} from 'react-icons/fa'
import Title from '../Components/Title/Title'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

import { Link, Navigate } from 'react-router-dom'
import ScrollToTopLink from '../Components/ScrollToTopLink'


const TeamScreen = () => {



  const handleOnClick = (path) => {
    Navigate(path);
    setTimeout(() => window.scrollTo(0, 0), 5);
  
  }

  return (
  
    <div className='page'>

    <Navbar />
        <div className='leader'>
          <div className="leader-right">

            <img src={people1} alt="" className='leader-img'/>
            <a href='https://orcid.org/0000-0002-4600-0036'>
            <FaIdBadge className='icon'/> ORCID
            </a>
            <p>
            <FaEnvelope className='icon'/> www.peng0923@gmail.com
            </p>
            <h3>博士/教授/博士生导师</h3>
            
            
          </div>
          <div className="leader-left">
            <h2>彭微微</h2>
            <h2>Principal Investigator
            </h2>
            <p><FaStar className='icon' /> 2010年获得天津大学生物医学工程学士学位，2015年获得香港大学生物医学工程博士学位。担任中国心理学会生理心理专业委员会委员、中国心理学会眼动心理研究专业委员会委员、中国心理学会脑电相关技术专业委员会委员、和广东省康复医学会脑功能检测与调控康复分会常务委员。已入选广东省珠江计划青年拔尖人才、深圳市海外高层次人才、深圳大学荔园优青项目等。</p>
            <p><FaStar className='icon' /> 致力于研究疼痛的认知神经机制和研发心理物理镇痛策略。相关研究成果以第一或通讯作者发表在PAIN、The Journal of Pain, Brain Stimulation和NeuroImage等国际高水平期刊，累计引用次数1000+。主持国家自然科学基金面上项目和青年项目、广东省普通高校特色创新类项目和多项深圳市基础研究项目。</p>
            <h3>研究方向</h3>
            <p>疼痛和共情的认知神经机制、疼痛评估方法的建立、心理物理镇痛策略开发</p>
          

            <h3>奖励和称号</h3>
            <p>广东省珠江计划青年拔尖人才（2018）</p>
            <p>深圳市孔雀高层次人才C类 （2017）</p>
            <p>深圳大学优秀青年项目“荔园优青 （2019&2022）</p>
            <p>深圳大学新锐研究生导师 （2020）</p>
            <p>深圳大学百篇优秀本科毕业论文（设计）指导教师 （2021&2023）</p>
            <p>深圳市优秀教师（2023）</p>
            <p>2022年度北京市科学技术奖自然科学奖二等奖（排名4/9）</p>
            <p>2023年度中国康复医学会科学技术奖一等奖（排名2/11）</p>
            <Link to='/weiweipeng' onClick={handleOnClick('/weiweipeng')} className='btn dark-btn'>了解更多 <img src={white_arrow} alt="" /></Link>
          </div>
          
          
        </div>
        <div className='leader'>
          <div className="leader-right">

            <img src={xiaoyun} alt="" className='leader-img'/>
            <a href='https://orcid.org/0000-0002-4600-0036'>
            </a>
            <p>
            <FaEnvelope className='icon'/> lxyevelynli@gmail.com
            </p>
            <h3>博士/助理教授/硕士生导师</h3>
            
          </div>
          <div className="leader-left">
            <h2>李晓云</h2>
            <p><FaStar className='icon' /> 深圳市海外高层次人才，2007年07月于汕头大学医学院获医学学士学位，2009年12月于英国利物浦大学心理学院获心理学博士学位。已主持及参与国家自然科学基金、省市级等科研项目10多项。在国内外重要期刊以及国际会议上发表SCI/EI检索论文20余篇获得中国发明专利4项，软件著作权1项。</p>
            
            <h3>研究方向</h3>
            <p>疼痛慢性化的生理心理学机制、非侵入性神经调控技术的镇痛效果及机制、和疼痛共情的认知神经机制</p>

            <h3>教育/工作经历</h3>
            <p>2002年09月- 2007年07月 汕头大学医学院 临床医学专业 获学士学位</p>
            <p>2008年09月- 2009年12月 英国利物浦大学心理学院 心理学专业 获硕士学位</p>
            <p>2010年09月- 2014年12月 英国利物浦大学心理学院 心理专业 获博士学位</p>
            <p>2015年01 月-2015年07月 英国边山大学心理学系 研究助理</p>
            <p>2016年01 月-2018年05月 西南大学心理学部 博士后</p>
            <p>2018年06 月-2019年05月 深圳和而泰家居在线网络科技有限公司 实验研究员</p>
            <p>2019年06 月-2023年02月 深圳大学心理学院 副研究员</p>
            <p>2023年03 月-至今 深圳大学心理学院 助理教授</p>
            {/* <h3>科研项目</h3>
            <p><FaStar className='icon' /> 经颅交流电刺激对疼痛的调控效果和机制研究（2023年~ 2025年，国家自然科学基金）</p>
            <p><FaStar className='icon' /> 人际互动视角下疼痛共情的脑间同步机制及调控研究（2023年~ 2026年，国家自然科学基金）</p>
            <p><FaStar className='icon' /> 痛觉的神经表征、整合和认知调控（2022年~ 2027年，国家科技部科技创新2030 -“脑科学与类脑研究”重大项目青年科学家项目）</p>
           */}
           <Link to='/xiaoyunli' onClick={handleOnClick('/xiaoyunli')} className='btn dark-btn'>了解更多 <img src={white_arrow} alt="" /></Link>
          </div>
        </div>

        <div className='postdoc-container'>
          

            
            
  
          <div className="postdoc">
          <img src={weng} alt="" className='leader-img'/>
            <a href='https://orcid.org/0000-0002-4600-0036'>
            </a>
            <p>
            <FaEnvelope className='icon'/> lweng@szu.edu.cn
            </p>
            <h3>博士/博士后</h3>
            <h2>翁玲玲</h2>
            <p><FaStar className='icon' /> 2023年于荷兰莱顿大学心理学系获心理学博士学位，师从Andrea Evers教授。研究领域包括：疼痛，瘙痒，安慰剂和反安慰剂。在国内外重要期刊，如PAIN等上发表论文。</p>
            
            <h3>研究方向</h3>
            <p>疼痛，瘙痒，安慰剂，反安慰剂</p>

          </div>


          <div className='postdoc'>
          <img src={xia} alt="" className='leader-img'/>
            <a href='https://orcid.org/0000-0002-4600-0036'>
            </a>
            <p>
            <FaEnvelope className='icon'/> 1664688888@qq.com
            </p>
            <h3>博士/博士后</h3>
            <h2>夏晓磊</h2>
            <p><FaStar className='icon' /> 2023年于中国科学院心理研究所获理学博士学位，师从胡理研究员。研究方向为疼痛认知神经科学，主要采用行为学、EEG和ECoG等技术研究人和大鼠的疼痛神经机制，擅长脑电实验设计和数据分析技术，使用脑电相关技术以第一作者/并列一作身份在疼痛领域顶尖杂志PAIN上发表论文2篇（含封面文章1篇）、在神经成像领域优秀期刊NeuroImage上发表论文1篇。参与编著脑电学术专著两部。参与3项国家自然科学基金项目。</p>
            
            <h3>研究方向</h3>
            <p>疼痛认知神经科学</p>
          </div>
        </div>

        
        <Title subTitle='current students' title='在读学生'/>
        <div className='members-container'>
          
          <div className='members'>

            <div className='member'>
              <img src={people2} alt="" className='member-img'/>
              <h3>张银花</h3>
              <p>2021级博士研究生</p>
            </div>
          <div className='member'>
              <img src={people3} alt="" className='member-img'/>
              <h3>李嘉</h3>
              <p>2022级博士研究生</p>
            </div>

            <div className='member'>
              <img src={people4} alt="" className='member-img'/>
              <h3>林鑫鑫</h3>
              <p>2023级博士研究生</p>
              <p>研究生国家奖学金获得者</p>
            </div>
            <div className='member'>
              <img src={peopleSample} alt="" className='member-img'/>
              <h3>陈施豪</h3>
              <p>2024级博士研究生</p>
            </div>



     

            <div className='member'>
              <img src={people13} alt="" className='member-img'/>
              <h3>章雯婷</h3>
              <p>2022级硕士研究生</p>
            </div>


            <div className='member'>
              <img src={people14} alt="" className='member-img'/>
              <h3>吴奇奇</h3>
              <p>2022级硕士研究生</p>
            </div>


            <div className='member'>
              <img src={people15} alt="" className='member-img'/>
              <h3>胡玉祯</h3>
              <p>2022级硕士研究生</p>
            </div>

            <div className='member'>
              <img src={peopleSample} alt="" className='member-img'/>
              <h3>杨希琳</h3>
              <p>2023级硕士研究生</p>
            </div>

            
            <div className='member'>
              <img src={peopleSample} alt="" className='member-img'/>
              <h3>彭焕娥</h3>
              <p>2023级硕士研究生</p>
            </div>

            
            <div className='member'>
              <img src={peopleSample} alt="" className='member-img'/>
              <h3>赵宇晰</h3>
              <p>2023级硕士研究生</p>
            </div>

            
            <div className='member'>
              <img src={peopleSample} alt="" className='member-img'/>
              <h3>王欣</h3>
              <p>2023级硕士研究生</p>
            </div>

            <div className='member'>
              <img src={people16} alt="" className='member-img'/>
              <h3>关颖琳</h3>
              <p>本科</p>
            </div>

            <div className='member'>
              <img src={people17} alt="" className='member-img'/>
              <h3>付金龙</h3>
              <p>本科</p>
            </div>

          </div>
        </div>
       

        <Title subTitle='graduates' title='已毕业学生'/>

        <div className='members-container'>
          <div className='members'>
          <div className='member'>
            <div className='member-content'>
              
              <h3>林臣南</h3>
              <p>2021级硕士研究生</p>
              <p>研究生国家奖学金获得者</p>
            </div>
            </div>
            


            <div className='member'>
            <div className='member-content'>
              
              <h3>郑倩倩</h3>
              <p> 2021级硕士研究生</p>
              <p>深圳大学优秀硕士毕业生</p>
            </div></div>

            <div className='member'>
            <div className='member-content'>
              
              <h3>金云馨</h3>
              <p>2021级硕士研究生</p>
            </div></div>

            
            <div className='member'>
            <div className='member-content'>
              
              <h3>郭泽昆</h3>
              <p>2021级硕士研究生</p>
            </div></div>

            
            <div className='member'>
            <div className='member-content'>
              
              <h3>卓诗维</h3>
              <p>2020级硕士研究生</p>
              <p>研究生国家奖学金获得者</p>
              <p>深圳大学百篇优秀硕士毕业论文获得者</p>
                <p>深圳大学优秀硕士毕业生</p>
            </div></div>

            <div className='member'>
            <div className='member-content'>
              
              <h3>范俊淞
              </h3>
              <p>2020级硕士研究生</p>
            </div></div>

            <div className='member'>
            <div className='member-content'>
              
              <h3>吕笑寒</h3>
              <p>2020级硕士研究生</p>
            </div></div>

            <div className='member'>
            <div className='member-content'>
              
              <h3>刘周安</h3>
              <p>2020级硕士研究生</p>
              <p>深圳大学百篇优秀硕士毕业论文获得者</p>
            </div></div>

            <div className='member'>
            <div className='member-content'>
              
              <h3>张文芸</h3>
              <p>2019级硕士研究生</p>
              <p>深圳大学优秀硕士毕业生</p>
            </div></div>


            <div className='member'>
            <div className='member-content'>
              
              <h3>姚俊杰</h3>
              <p>2019级硕士研究生</p>
              <p>研究生国家奖学金获得者</p>
              <p>深圳大学百篇优秀硕士毕业论文获得者</p>
            </div></div>


            <div className='member'>
            <div className='member-content'>
              
              <h3>湛毅林</h3>
              <p>2019级硕士研究生</p>
            </div></div>

            <div className='member'>
            <div className='member-content'>
              
              <h3>叶倩</h3>
              <p>2018级硕士研究生</p>
              <p>研究生国家奖学金获得者</p>
              <p>深圳大学优秀硕士毕业生</p>
            </div></div>

            <div className='member'>
            <div className='member-content'>
              
              <h3>姚漫霖</h3>
              <p>2017级硕士研究生</p>
              <p>深圳大学优秀硕士毕业生</p>
            </div></div>

            <div className='member'>
            <div className='member-content'>
              
              <h3>刘洋</h3>
              <p>2017级硕士研究生</p>
             
            </div></div>

          </div>
        </div>

        <Footer />


    </div>
       
        


      

  
  )
}

export default TeamScreen
