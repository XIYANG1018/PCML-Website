import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

import Footer from '../Components/Footer/Footer'
import peopleSample from '../assets/people-sample.jpg'
import { FaEnvelope, FaIdBadge, FaArrowCircleRight} from 'react-icons/fa'



const XiaoyunScreen = () => {
  return (
    <div className='page'>
     <Navbar/>
     
     <div className="container">

     <div className='leader'>
          <div className="leader-right">

            <img src={peopleSample} alt="" className='leader-img'/>
            <a href='https://orcid.org/0000-0002-4600-0036'>
            </a>
            <p>
            <FaEnvelope className='icon'/> lxyevelynli@gmail.com
            </p>
            <h3>博士/助理教授/硕士生导师</h3>
            
          </div>
          <div className="leader-left">
            <h2>李晓云</h2>
            <h3>研究方向</h3>
            <hr></hr>
            <br></br>
            <p>疼痛慢性化的生理心理学机制、非侵入性神经调控技术的镇痛效果及机制、和疼痛共情的认知神经机制</p>

            <h3>教育/工作经历</h3>
            <hr></hr>
            <br></br>
            <p>2002年09月- 2007年07月 汕头大学医学院 临床医学专业 获学士学位</p>
            <p>2008年09月- 2009年12月 英国利物浦大学心理学院 心理学专业 获硕士学位</p>
            <p>2010年09月- 2014年12月 英国利物浦大学心理学院 心理专业 获博士学位</p>
            <p>2015年01 月-2015年07月 英国边山大学心理学系 研究助理</p>
            <p>2016年01 月-2018年05月 西南大学心理学部 博士后</p>
            <p>2018年06 月-2019年05月 深圳和而泰家居在线网络科技有限公司 实验研究员</p>
            <p>2019年06 月-2023年02月 深圳大学心理学院 副研究员</p>
            <p>2023年03 月-至今 深圳大学心理学院 助理教授</p>


            <h3>科研项目</h3>
            <hr></hr>
            <br></br>

            <p><strong>国家自然科学基金</strong></p>
            <p><FaArrowCircleRight className='icon'/>经颅交流电刺激对疼痛的调控效果和机制研究</p>
            <p><FaArrowCircleRight className='icon'/> 起止时间：2023年~ 2025年</p>


            <p><strong>国家自然科学基金</strong></p>
            <p><FaArrowCircleRight className='icon'/>人际互动视角下疼痛共情的脑间同步机制及调控研究</p>
            <p><FaArrowCircleRight className='icon'/> 起止时间：2023/01—2026/12</p>

            <p><strong>国家科技部科技创新2030 -“脑科学与类脑研究”重大项目青年科学家项目</strong></p>
            <p><FaArrowCircleRight className='icon'/>痛觉的神经表征、整合和认知调控</p>
            <p><FaArrowCircleRight className='icon'/> 起止时间：2022年~ 2027年</p>
    

            <h3>科研论文发表</h3>
            <hr></hr>
            <p><strong>2022</strong></p>

            <p>1. Li X., Yao J., Lin X., Chen S., Jin R., Peng W. (2022) Transcranial random noise stimulation over the left dorsolateral prefrontal cortex attenuates pain expectation and perception. Clinical Neurophysiology. 147：1-10.</p>
            <p>2. Peng W., Zhan Y., Jin R., Lou W., Li X.# (2022) Aftereffects of alpha transcranial alternating current stimulation over the primary sensorimotor cortex on cortical processing of pain. PAIN. doi: 10.1097/j.pain.0000000000002814.</p>

            <p>3. Li X. *, Lou W. *, Zhang W., Tong R.K.Y., Hu L., Peng W. (2022) Ongoing first-hand pain facilitates somatosensory resonance but inhibits affective sharing in empathy for pain. NeuroImage. 263:119599.</p>

            <p>4. Li X., Lin X., Yao J., Chen S., Hu Y., Liu J., Jin R. (2022) Effects of transcranial direct current stimulation on cold pain perception in healthy individuals. Frontiers In Molecular Neuroscience. 15:853509.</p>

            <p><strong>2021</strong></p>
            <p>1. Yao J. *, Li X. *, Zhang W, Lin X., Lyu X., Peng W. (2021) Analgesia induced by anodal tDCS and high-frequency tRNS over the motor cortex: Immediate and sustained effects on pain perception. Brain Stimulation. 14(5):1174-1183.</p>

            <p>2. Li X., Yao J., Zhang W., Chen S., Peng W. (2021) Effects of Transcranial Direct Current Stimulation on Experimental Pain Perception: A Systematic Review and Meta-Analysis. Clinical Neurophysiology. 132(9):2163-2175.</p>

            <p>3. Fang H.*, Li X.*, Zhang W., Fan B., Wu Y., Peng W. (2021) Single dose testosterone administration enhances novelty responsiveness and short-term habituation in healthy males. Hormones and Behavior. 131:104963.</p>

            <p><strong>2020</strong></p>

            <p>1. Li X.*, Liu Y.*, Ye Q., Lu X., Peng W. (2020) The linkage between first-hand pain sensitivity and empathy for others' pain: attention matters. Human Brain Mapping. 41(17):4815-4828.</p>

            <p>2.Li X., Hu L. (2016) The role of stress regulation on neural plasticity in pain chronification. Neural Plasticity. 2016:6402942.</p>

            <h3>教学工作</h3>
            <p>主讲心理学院本科生“人体解剖生理学”等课程</p>
            <h3>社会服务</h3>

            <p> 广东省康复医学会脑功能检测与调控康复分会担任分会理事</p>

            <br></br>
            <br></br>
          </div>

          
        </div>
        
     </div>
     <Footer/>
    </div>
  )
}

export default XiaoyunScreen