import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

import Footer from '../Components/Footer/Footer'
import people1 from '../assets/people1.jpg'
import { FaEnvelope, FaIdBadge, FaArrowCircleRight} from 'react-icons/fa'



const LeaderScreen = () => {
  return (
    <div className='page'>
     <Navbar/>
     
     <div className="container">

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
            <h3>研究方向</h3>
            <hr></hr>
            <br></br>
            <p>疼痛和共情的认知神经机制、疼痛评估方法的建立、心理物理镇痛策略开发</p>

            <h3>教育/工作经历</h3>
            <hr></hr>
            <br></br>
            <p>2006/09—2010/06 天津大学 精密仪器与光电子工程学院 生物医学工程 学士。</p>
            <p>2013/05—2014/04 意大利罗马大学(University of Rome Sapienza) 联合培养</p>
            <p>2010/09—2014/12 香港大学 李嘉诚医学院 生物医学工程 博士</p>
            <p>2014/12—2016/09 西南大学 心理学部 讲师/副教授</p>
            <p>2016/10—2022/06 深圳大学 心理学院 副教授</p>
            <p>2022/06—今 深圳大学 心理学院 教授/博士生导师</p>

            <h3>奖励和称号</h3>
            <hr></hr>
            <br></br>
            <p>广东省珠江计划青年拔尖人才（2018）</p>
            <p>深圳市孔雀高层次人才C类 （2017）</p>
            <p>深圳大学优秀青年项目“荔园优青 （2019&2022）</p>
            <p>深圳大学新锐研究生导师 （2020）</p>
            <p>深圳大学百篇优秀本科毕业论文（设计）指导教师 （2021&2023）</p>
            <p>深圳市优秀教师（2023）</p>
            <p>2022年度北京市科学技术奖自然科学奖二等奖（排名4/9）</p>
            <p>2023年度中国康复医学会科学技术奖一等奖（排名2/11）</p>


            <h3>在研科研项目</h3>
            <hr></hr>
            <br></br>

            <p><strong>国家自然科学基金面上项目 (32271105), 主持</strong></p>
            <p><FaArrowCircleRight className='icon'/>人际互动视角下疼痛共情的脑间同步机制及调控研究</p>
            <p><FaArrowCircleRight className='icon'/> 起止时间：2023/01—2026/12</p>


            <p><strong>科技创新2030 -“脑科学与类脑研究”重大项目青年科学家项目, 参与</strong></p>
            <p><FaArrowCircleRight className='icon'/>人际互动视角下疼痛共情的脑间同步机制及调控研究</p>
            <p><FaArrowCircleRight className='icon'/> 起止时间：2023/01—2026/12</p>


            <p><strong>深圳市基础研究面上项目(JCYJ20230808105805012), 主持</strong></p>
            <p><FaArrowCircleRight className='icon'/>面向疼痛缓解的神经反馈系统关键技术研究</p>
            <p><FaArrowCircleRight className='icon'/> 起止时间：2023/12—2026/11</p>




            <h3>已结题科研项目</h3>
            <hr></hr>
            <br></br>


            <p><strong>国家自然科学基金面上项目 (31871127)，主持</strong></p>
            <p><FaArrowCircleRight className='icon'/>自发/诱发疼痛中的神经振荡同步性及其对疼痛的调控机制研究</p>
            <p><FaArrowCircleRight className='icon'/> 起止时间：2019/01—2022/12</p>


            
            <p><strong>科技创新2030 -“脑科学与类脑研究”重大项目青年科学家项目, 参与</strong></p>
            <p><FaArrowCircleRight className='icon'/>疼痛相关的神经振荡特征提取及其调控</p>
            <p><FaArrowCircleRight className='icon'/> 起止时间：2016/01—2018/12</p>


            <p><strong>国家自然科学基金青年项目 (31500921)，主持</strong></p>
            <p><FaArrowCircleRight className='icon'/>疼痛敏感性个体差异的神经机制研究</p>

            <p><strong>广东省普通高校特色创新类项目(2019KTSCX149)，主持</strong></p>
            <p><FaArrowCircleRight className='icon'/>自闭症谱系障碍个体对自身和他人疼痛感知的异常及其认知神经机制研究</p>
            <p><FaArrowCircleRight className='icon'/> 起止时间：2020/05—2022/04</p>


            <p><strong>深圳市科技计划基础研究自由探索项目(JCYJ20170818093231953) ，主持</strong></p>
            <p><FaArrowCircleRight className='icon'/>tDCS缓解疼痛的方案优化及其认知神经机制研究</p>
            <p><FaArrowCircleRight className='icon'/> 起止时间：2018/05—2021/03</p>


            <h3>科研论文发表</h3>
            <p><em>*：并列第一；#：通讯作者</em></p>
            <hr></hr>
            <p><strong>2023</strong></p>

            <p>1. Lou, W.T., Li, X.Y., Jin, R.C.#, Peng, W.W. (2023) Time-Varying Phase Synchronization of Resting-State fMRI Reveals a Shift Toward Self-referential Processes During Sustained Pain. PAIN. Accepted. (5-year-IF = 8.09; SCI -JCR-Q1)</p>
            <p>2. Lin, C.N., Zhuo, S.W., Zheng, Q.Q., Li, X.Y., Peng, W.W.# (2023). The relationship between oxytocin and empathy for others’ pain: Testing the mediating effect of first-hand pain sensitivity. Physiology & Behavior, 114266. (5-year-IF = 3.30; SCI -JCR-Q1)</p>

            <p>3. Qiu, S., Lyu, X.H., Zheng, Q.Q., He, H., Jin, R.C., & Peng, W.W (2023). Temporal dynamics of electroencephalographic microstates during sustained pain. Cerebral Cortex, bhad143. (5-year-IF = 6.00; SCI -JCR-Q2)</p>

            <p>4. Zhang, Y.H, Ye, Q., He, H., Jin, R.C, & Peng, W.W # (2023). Neurocognitive mechanisms underlying attention bias towards pain: evidence from a drift-diffusion model and event-related potentials. The Journal of Pain, 24 (7): 1307-1320. (5-year-IF = 7.04; SCI -JCR-Q1)</p>

            <p>5. Zhuo, S.W, Zhang, Y.H, Lin, C.N, & Peng, W.W # (2023). Testosterone administration enhances the expectation and perception of painful and non-painful somatosensory stimuli. Psychoneuroendocrinology, 152, 106081. (5-year-IF = 5.35; SCI -JCR-Q2)</p>

            <p>6. Li, X.Y., Yao, J.J., Lin, X.X., Chen, S.X., Jin R.C.#, Peng, W.W. (2023) Transcranial random noise stimulation over the left dorsolateral prefrontal cortex attenuates pain expectation and perception. Clinical Neurophysiology. 147, 1–10. (5-year-IF = 4.72; SCI -JCR-Q2)</p>

            <p>7. Li W.L., Lou W.T., Zhang W.Y., Tong, R. K. Y., Jin R.C., Peng W.W.# (2023). Gyrus rectus asymmetry predicts trait alexithymia, cognitive empathy, and social function in neurotypical adults. Cerebral Cortex bhac184. (5-year-IF = 6.00; SCI -JCR-Q2)</p>

            <p>8. Peng W.W., Zhan Y.L., Jin R.C., Lou W.T., Li X.Y. (2023) Aftereffects of alpha transcranial alternating current stimulation over the primary sensorimotor cortex on cortical processing of pain. PAIN. 164(6):1280-1290 (5-year-IF = 8.09; SCI -JCR-Q1)</p>

            <p>9. 张文芸, 卓诗维, 郑倩倩, 关颖琳, 彭微微#. (2023). 自闭特质对疼痛共情的影响：疼痛负性情绪和认知的中介作用. 心理学报, 55 (9): 1501-1517.</p>


            <p><strong>2022</strong></p>
            <p>1. Li X.Y., Lou W.T., Zhang W.Y., Tong R. K. Y., Hu L., Peng W.W.# (2022). Ongoing first-hand pain facilitates somatosensory resonance but inhibits affective sharing in empathy for pain. NeuroImage, 119599. (5-year-IF = 8.01; SCI -JCR-Q1)</p>

            <p>2. Lin X.X., Zhuo S.W., Liu Z.A., Fan J.S., Peng W.W.# (2022). Autistic traits heighten sensitivity to rejection-induced social pain. Annals of the New York Academy of Sciences. 1517(1), 286–299. (5-year-IF = 6.58; SCI -JCR-Q1)</p>

            <p>3. Zhuo S.W., Zhang W.Y., Fan J.S., Wu, Y., Wu, W., Peng W.W.# (2022). Single-dose testosterone administration modulates instant empathic responses to others’ pain: an EEG study. Psychoneuroendocrinology 105768. (5-year-IF = 5.35; SCI -JCR-Q2)</p>

            <p>4. Zhang W.Y., Zhuo S.W., Li X.Y., & Peng W.W.# (2022). Autistic Traits and Empathy for Others’ Pain Among the General Population: Test of the Mediating Effects of First-Hand Pain Sensitivity. Journal of Autism and Developmental Disorders, 1-15. (5-year-IF = 5.26; SSCI-JCR-Q2)</p>


            <p><strong>2021</strong></p>
            <p>1. Peng W.W, Lou, W.T., Huang, X.X., Ye, Q.., Tong, R. K. Y., & Cui, F. (2021). Suffer together, bond together: brain-to-brain synchronization and mutual affective empathy when sharing painful experiences. NeuroImage 238, 118249. (5-year-IF = 8.01; SCI -JCR-Q1)</p>

            <p>2. Yao J.J., Li X.Y., Zhang W.Y., Lin X.X., Lyu X.H., Peng W.W.# (2021) Analgesia induced by anodal tDCS and high-frequency tRNS over the motor cortex: Immediate and sustained effects on pain perception. Brain Stimulation 14(5), 1174-1183. (5-year-IF = 9.61; SCI -JCR-Q1)</p>

            <p>3. Li X.Y., Yao J.J., Zhang W.Y., Chen S.X., Peng, W.W.# (2021) Effects of Transcranial Direct Current Stimulation on Experimental Pain Perception: A Systematic Review and Meta-Analysis. Clinical Neurophysiology 132(9), 2163-2175. (5-year-IF = 4.72; SCI -JCR-Q2).</p>

            <p>4. Fang H.H., Li X.Y., Fan B., Wu Y., Peng W.W.# (2021) Single dose testosterone administration enhances novelty responsiveness and short-term habituation in healthy males. Hormones and Behavior 131, 104963. (5-year-IF = 4.02;，JCR-Q2)</p>

            <p>5. 张文芸, 李晓云, 姚俊杰, 叶倩, 彭微微#. (2021). 自闭症谱系障碍个体的疼痛敏感性异常: 来自元分析的证据. 心理学报  53(6), 613.</p>


            <p><strong>2020</strong></p>



            <p>1.Yao M.L., Lei Y., Li P., Ye Q., Liu Y., Li X.Y., Peng W.W.# (2020) Shared sensitivity to physical pain and social evaluation. The Journal of Pain 21 (5-6): 677-688. (5-year-IF = 7.04; SCI -JCR-Q1)</p>

            <p>2.Li X.Y., Liu Y., Ye Q., Lu X.J., Peng W.W.# (2020) The linkage between first-hand pain sensitivity and empathy for others’ pain: attention matters. Human Brain Mapping 41(17), 4815–4828. (5-year-IF = 5.81; SCI -JCR-Q1)</p>

            <p>3.Peng W.W., Zhan Y.L., Jiang Y.L., Nan W.Y., Cohen Kadosh R., Wan F., (2020) Individual variation in alpha neurofeedback training efficacy predicts pain modulation. NeuroImage: Clinical 102454 (5-year-IF = 5.69; SCI -JCR-Q2)</p>

            <p>4.Wu Y.J., Liu Y., Yao M.L., Li X.Y., Peng W.W.# (2020) Language contexts modulate instant empathic responses to others’ pain. Psychophysiology 57(8):e13562 (5-year-IF = 4.72; SCI/SSCI -JCR-Q1)</p>

            <p>5.Ye Q., Li X.Y., Peng W.W.# (2020) Individual variation in pain sensitivity and implicit negative bias toward pain. Psychosomatic Medicine 82 (8): 796-804 (5-year-IF = 5.14; SCI/SSCI -JCR-Q1)</p>

            <p>6.Lei Y., Mei Y., Dai Y.Q., Peng W.W.# (2020) Taxonomic relations evoke more fear than thematic relations after fear conditioning: an EEG study. Neurobiology of Learning and Memory 167:107099. (5-year-IF = 3.45; SCI/SSCI -JCR-Q2)</p>

            <p>7.Fang H.H., Li X.Y., Wu Y., Peng W.W.# (2020) Single dose testosterone administration modulates the temporal dynamics of distractor processing. Psychoneuroendocrinology 121, 104838 (5-year-IF = 5.35，SCI-JCR-Q1)</p>


            <p><strong>2019</strong></p>

            <p>1.Peng W.W., Tang Z.Y., Zhang F.R., Li H., Kong Y.Z., Iannetti G.D., Hu L. (2019) Neurobiological mechanisms of TENS-induced analgesia. NeuroImage 195: 396-408. (5-year-IF = 8.01; SCI -JCR-Q1)</p>

            <p>2.Peng W.W., Huang X.X., Liu Y., Cui F. (2019) Predictability modulates the anticipation and perception of pain in both self and others. Social Cognitive and Affective Neuroscience 14(7):747-757. (5-year-IF = 5.20; SCI/SSCI-JCR-Q1)</p>

            <p>3.Liu Y., Meng J., Yao M.L., Ye Q., Fan B., Peng W.W.# (2019) Hearing other’s pain is associated with sensitivity to physical pain: an ERP study. Biological Psychology 145:150-158. (5-year-IF = 3.97，SSCI -JCR-Q1)</p>

            <p>4.Meng J., Shen L., Li Z.S., Peng W.W.# (2019) Top-down Effects on Empathy for Pain in Adults with Autistic Traits. Scientific Reports 9:8022. (5-year-IF = 5.52,SCI-JCR-Q1)</p>

            <p>5.Peng W.W., Peng H.N., Lu J.Z., Fan B., Cui F. (2019) Others’ pain appraisals modulate the anticipation and experience of subsequent pain. Neuroscience 410:16-28. (5-year-IF =3.92; SSCI -JCR-Q2)</p>

            <p>6.Meng J., Shen L., Li Z.S., Peng W.W.# (2019) Top-down attention modulation on the perception of others’ vocal pain: An event-related potential study. Neuropsychologia 133:107177. (5-year-IF = 3.56; SCI/SSCI -JCR-Q2)</p>

            <p>7.Ye Q., Yan D., Yao M.L., Lou W.T.#, Peng W.W.# (2019) Hyperexcitability of cortical oscillations in patients with somatoform pain disorder: A resting state EEG study. Neural Plasticity 2687150. (5-year-IF = 4.65; SCI -JCR-Q2)</p>

            <p>8.Peng W.W., Meng J., Lou Y.X., Li X.Y., Lei Y., Yan D. (2019) Reduced empathic pain processing in patients with somatoform pain disorder: evidence from behavioral and neurophysiological measures. International Journal of Psychophysiology 139:40-47. (5-year-IF = 3.52，SCI/SSCI-JCR-Q2)</p>

            <p>9.Qiu F, Peng W.W., Li M.M*, Zhang L.L., Zhu H., Tan, X.Y, Li H., Zhang, J (2019) Effects of physical exercise on negative emotional susceptibility in young adult females: An event-related potential study. Brain research 1722: 146382. (5-year-IF = 3.68 SCI-JCR-Q3)</p>


            <p><strong>2018</strong></p>

            <p>1.Peng W.W., Xia X.L., Yi M., Huang, G. Zhang Z.G., Iannetti G.D., Hu L. (2018) Brain oscillations reflecting pain-related behavior in freely-moving rats. PAIN 159(1): 106–118. (5-year-IF = 8.09; SCI -JCR-Q1)</p>

            <p>2.张会娟, 彭微微#, 周丽丽, 吕雪靖, 魏华, 胡理# (2018) 安慰剂效应的心理机制及临床应用, 中国临床心理学杂志 26(3),467-471,453.</p>

            <p><strong>2017</strong></p>

            <p>1.Zhao K., Tang Z.Y., Guo Y.F., Peng W.W.#, Hu L.# (2017) Analgesia induced by self-initiated electrotactile sensation is mediated by top-down modulations. Psychophysiology 54(6):848-856. (5-year-IF = 4.72; SCI/SSCI -JCR-Q1)</p>

            <p>2.Peng W.W., Guo X.L., Jin Q.Q., Wei H., Xia X. L., Zhang, Y., Huang, P. C., Wang, W. C., Li, S.L., Wang, J. S., Chen, J, Hu L. (2017) Biological mechanism of post-herpetic neuralgia: evidence from multiple patho-psychophysiological measures. European Journal of Pain 21(5):827-842. (5-year-IF = 4.17 ; SCI -JCR-Q2)</p>

            <p>3.王小玲, 唐丹丹, 靳晴晴, 彭微微#, 胡理 (2017) 疼痛恐惧的神经机制及其消退. 心理科学进展 25(10): 1758-1768.</p>

            <p>4.汤征宇, 汪汇泉, 夏晓磊, 汤艺, 彭微微#, 胡理 (2017) 经皮神经电刺激的镇痛机制及其临床应用. 生理学报 2017(3):1-22.</p>

            <p><strong>2012-2016</strong></p>

            <p>1.Xia X.L., Peng W.W., Iannetti G., Hu L. (2016) Laser-evoked cortical responses in freely-moving rats reflect the activation of C-fibre afferent pathways. NeuroImage 128: 209-17. (5-year-IF = 8.01; SCI -JCR-Q1)</p>

            <p>2.Peng W.W. & Tang D.D. (2016) Pain Related Cortical Oscillations: Methodological Advances and Potential Applications. Front. Comput. Neurosci 10:9. (5-year-IF =3.47，SCI-JCR-Q2)</p>

            <p>3.汤艺，唐丹丹，彭微微#，胡理 (2016) 以痛镇痛：条件性疼痛调节。科学通报 61(6):642-653.</p>

            <p>4.Peng W.W., Babiloni C., Mao Y.H., Hu Y. (2015) Subjective pain perception mediated by alpha rhythms. Biological Psychology 109:141-50. (5-year-IF = 3.97，SCI/SSCI -JCR-Q1)</p>

            <p>5.Peng W.W., Hu Y., Mao Y.H., Babiloni C. (2015) Widespread cortical alpha ERD companying visual oddball target stimuli is frequency but non-modality specific. Behavioural Brain Research 295:71-77. (5-year-IF = 3.48; SCI -JCR-Q2)</p>

            <p>6.Jia H.B., Peng W.W., Hu L. (2015) A novel approach to identify time-frequency features in electrocotical signals. Journal of Neuroscience Methods 253:18-27. (5-year-IF = 3.20，SCI-JCR-Q3)</p>

            <p>7.Peng W.W., Hu L., Zhang ZG, Hu Y. (2014) Changes of spontaneous oscillatory activity to tonic heat pain. Plos One 9:e91052. (5-year-IF = 4.07; SCI -JCR-Q1)</p>

            <p>8.Hu L., Peng W.W., Valentini E., Hu Y. (2013) Functional features of nociceptive-induced suppression of alpha band electroencephalographic oscillations. The Journal of Pain 14:89-99. (5-year-IF =7.04; SCI/-JCR-Q1)</p>

            <p>9.Peng W.W., Hu L., Zhang Z.G., Hu Y. (2012) Causality in the association between P300 and alpha event-related desynchronization. Plos One 7: e34163. (5-year-IF =4.07; SCI -JCR-Q1)</p>



            <h3>参与论著</h3>

            <p>1.彭微微（2020）脑电数据的预处理与降噪，《脑电信号处理与特征提取》的第四章节，科学出版社出版</p>
            <p>2.Peng W.W. (2019) EEG Preprocessing and Denoising. 5th Chapter in Book: EEG Signal Processing and Feature Extraction. Springer Nature Singapore Pte Ltd.</p>

            <h3>专利</h3>

            <p>1.彭微微; 吕笑寒; 郭泽昆; 李晓云; 李文龙; 叶倩 ; 疼痛认知偏向的评估和矫正系统、方法, 2021- 9-09, 中国, 202111058347.8 (发明专利)</p>
            <p>2.彭微微; 李晓云; 李文龙; 姚漫霖 ; 基于多维度测量的疼痛敏感性评估系统和方法, 2021-3-12, 中国, 202110269385.1 (发明专利)</p>

            <h3>软件著作权</h3>
            <p>1.彭微微; 李晓云; 李文龙; 吕笑寒; 郭泽昆 ; 疼痛认知偏向测试平台V1.0, 2022SR0945520, 原始取得, 全部权利, 2021-12-08</p>
            <h3>社会服务</h3>

            <p><FaArrowCircleRight className='icon'/>中国心理学会生理心理专业委员会委员</p>
            <p><FaArrowCircleRight className='icon'/>中国心理学会眼动心理研究专业委员会委员</p>
            <p><FaArrowCircleRight className='icon'/>广东省康复医学会脑功能检测与调控康复分会常务委员</p>
            <p><FaArrowCircleRight className='icon'/>疼痛神经影像与转化研究中心成员</p>
            <p><FaArrowCircleRight className='icon'/>国家自然科学基金评审专家</p>
            <p><FaArrowCircleRight className='icon'/>Frontiers in Molecular Neuroscience、International Journal of Environmental Research and Public Health等期刊客座编辑</p>
            <p><FaArrowCircleRight className='icon'/>Current Biology、Human Brain Mapping和中国科学等多个学术期刊审稿人</p>

            <br></br>
            <br></br>
          </div>

          
        </div>
        
     </div>
     <Footer/>
    </div>
  )
}

export default LeaderScreen