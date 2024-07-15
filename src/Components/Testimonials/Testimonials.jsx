import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import project1 from '../../assets/project1.png'
import project1_1 from '../../assets/project1_1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
import project3_1 from '../../assets/project3_1.png'
import project5 from '../../assets/project5.png'
import project5_1 from '../../assets/project5_1.png'
import project4 from '../../assets/project4.png'
import project4_1 from '../../assets/project4_1.png'
import white_arrow from '../../assets/white-arrow.png'
import { Link, Navigate } from 'react-router-dom'


const Testimonials = () => {


const handleOnClick = (path) => {
    Navigate(path);
}

  return (
    <div className='testimonials'>
        
        
      
      <div className="slider">
        <div className="slide">
            <a href='https://onlinelibrary.wiley.com/doi/10.1002/hbm.25160'><h3>The linkage between first-hand pain sensitivity and empathy for others’ pain: attention matters</h3><h3>疼痛敏感性与疼痛共情以及内隐疼痛认知之间的联系</h3></a>
        
            
            <div >
                <img src={project4}></img>
                <img src={project4_1}></img>
            </div>
            <p>彭微微教授研究团队围绕疼痛敏感性的个体差异开展了系列研究，揭示了疼痛敏感性与疼痛共情以及内隐疼痛认知之间的联系。该项研究成果在Human Brain Mapping期刊（中科院SCI二区，SCI-JCR-2019：Q1, IF = 4.42）发表，论文第一作者为副研究员李晓云博士。研究结果表明，当注意力集中在疼痛时，人们对自身疼痛和他人疼痛的敏感性存在一致性。这可能是因为自身疼痛和他人疼痛存在相似的功能意义，如两者均可以激活威胁探测系统，避免环境中存在的或潜在的威胁。疼痛共情异常是多种临床疾病的症状，如精神分裂症和自闭症，这一研究的发现可能为理解某些临床患者的疼痛共情异常提供新思路。</p>
        
        </div>
       
        <div className="slide">
            <a href='https://www.jpain.org/article/S1526-5900(23)00366-8/fulltext'><h3>Neurocognitive Mechanisms Underlying Attention Bias Towards Pain: Evidence From a Drift-Diffusion Model and Event-Related Potentials</h3><h3>疼痛注意偏向的认知神经机制：基于漂移扩散模型和事件相关电位的证据</h3></a>
            
            <div>
                <img src={project1}></img>
                <img src={project1_1}></img>
            </div>
            <p>该研究于疼痛领域的顶级期刊《The Journal of Pain》发表，采用较高生态效度的空间线索任务范式，结合计算建模和事件相关电位方法，结合DDM和ERP技术刻画了健康个体对疼痛相关信息的注意偏向特点。疼痛的定向加速和解除困难分别体现于分层漂移扩散模型的非决策时间和漂移率，且分别与刺激驱动的自下而上加工过程和目标驱动的冲突监测过程有关。这一研究发现促进了我们理解疼痛注意偏向的认知神经机制，还有望为疼痛注意偏向的矫正提供了潜在的干预靶点。</p>
        </div>
           
        <div className="slide">
            <a href='https://www.sciencedirect.com/science/article/pii/S1053811922007145?via%3Dihub'><h3>Ongoing first-hand pain facilitates somatosensory resonance but inhibits affective sharing in empathy for pain</h3><h3>持续的亲身疼痛促进躯体感觉共鸣，抑制疼痛同理中的情感分享</h3></a>
        
        
        
            <div >
                <img src={project2}></img>
            </div>
            <p>根据共情的知觉-动作理论模型，自身疼痛与他人疼痛信息加工过程涉及相似的心理机制和神经表征。这提示观察者自身疼痛可能会影响对他人疼痛的共情反应。以往研究探讨了慢性疼痛患者疼痛共情反应的异常，然而研究结果存在较大的异质性。为此，本研究以健康个体为研究对象，采用了辣椒素诱发的持续性疼痛模型，探讨了共情者的自身疼痛如何影响对他人疼痛的共情过程。</p>
            <br></br>
            <p>这项研究阐述了观察者自身疼痛是如何影响对他人疼痛共情的行为和神经响应。持续的自身疼痛增加了与共情相关躯体感觉共振脑区的神经激活和神经同步性，但减少了与共情相关情感分享脑区的神经激活和神经同步性。这拓展了我们对自身疼痛和疼痛共情之间联系的理解，并提示精神疾病（如精神分裂症）或发展障碍（如自闭症）人群的共情障碍可能来源于自身疼痛的异常。</p>
        </div>
          


        <div className="slide">
            <a href='https://journal.psych.ac.cn/xlxb/article/2023/0439-755X/0439-755X-55-9-1501.shtml'><h3>自闭特质对疼痛共情的影响：疼痛负性情绪和认知的中介作用</h3>
            </a>
        
            <div >
                <img src={project3}></img>
                <img src={project3_1}></img>
            </div>
            <p>疼痛认知与调控实验室在国内心理学顶级期刊《心理学报》（2023年， 第55卷，第9期）发表题为自闭特质对疼痛共情的影响：疼痛负性情绪和认知的中介作用的研究论文。实验室已毕业硕士研究生张文芸为第一作者，彭微微教授为通讯作者。该论文对来自状态共情和特质共情的研究结果均支持高自闭特质与高情绪共情有关，且部分源于高自闭特质个体对疼痛存在更为负面的情绪和认知。本研究结果能促进理解ASD的生物学机制和开发干预策略，还有助于改善高自闭特质群体的心理健康和社会功能。如从自身疼痛异常的角度去解释高自闭特质和ASD群体的共情和社会功能的障碍。未来研究应该结合多种疼痛刺激模态和多维度疼痛评估系统刻画高自闭特质和ASD个体的疼痛加工特点，建立疼痛反应类型与共情障碍等核心症状之间的特异性关系。</p>
            <br></br>
            <p>该研究工作获得了国家自然科学基金，深圳市基础研究面上项目和广东省”脑科学与类脑研究”重大科技专项：自闭症诊疗方法研究的支持。</p>
        </div>
            
    
        <div className="slide">
            <a href='https://www.brainstimjrnl.com/article/S1935-861X(21)00149-2/fulltext'> <h3>Analgesia induced by anodal tDCS and high-frequency tRNS over the motor cortex: Immediate and sustained effects on pain perception</h3>
            <h3> 阳极tDCS和高频tRNS刺激运动皮层的镇痛效果</h3>
            </a>

            <div >
                <img src={project5}></img>
                <img src={project5_1}></img>
            </div>
            <p>彭微微教授课题组近期在国际神经科学领域顶级期刊《Brain Stimulation》发表题为Analgesia induced by anodal tDCS and high-frequency tRNS over the motor cortex: Immediate and sustained effects on pain perception的研究论文。《Brain Stimulation》为中科院1区期刊(2020年最新升级版)，2020年影响因子为8.955。课题组硕士研究生姚俊杰和副研究员李晓云为论文的第一作者，彭微微教授为论文的通讯作者，深圳大学为第一完成单位。该研究揭示了阳极tDCS刺激M1会诱发即时镇痛效果，且在刺激不确定的情境下表现出更好的镇痛效果。高频tRNS+DC-offset刺激M1会诱发即时和持续镇痛效果，且部分通过降低疼痛预期而实现，这可能是因为高频tRNS+DC-offset能较为持久地增强M1的皮层兴奋性。本研究为tDCS/tRNS神经调控技术在临床疼痛治疗中的应用提供了证据，并提示应考虑患者的疼痛预期，从而帮助优化神经调控的镇痛效果。</p>
            <br></br>
            <p>该研究工作得到国家自然科学基金(31871127)，广东省普通高校特色创新类项目 (2019KTSCX149)和深圳市基础研究自由探索项目(JCYJ20190808154413592)的支持。</p>
        </div>
            
      </div>

      <Link to='/publication' onClick={handleOnClick('/publication')}>
            <button className='btn dark-btn'>其他文章发表 <img src={white_arrow} alt="" /></button>
        </Link>
    </div>
  )
}

export default Testimonials
