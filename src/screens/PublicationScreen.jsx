import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './PublicationScreen.css'
import Title from '../Components/Title/Title'
import { FaCalendarCheck, FaLink } from 'react-icons/fa'
import Footer from '../Components/Footer/Footer'

const PublicationScreen = () => {
  return (
    <div className='page'>
        <Navbar />

        <div className='publication-container'>
        <Title subTitle='Our publication' title='文章发表'/>
          <h2><FaCalendarCheck className='icon' /> 2024</h2>
          <hr></hr>
          <br></br>
          


          <h2><FaCalendarCheck className='icon' /> 2023</h2>
          <hr></hr>
          <br></br>

          <p>1.Zhang, Y.H, Ye, Q., He, H., Jin, R.C, & Peng, W.W #(2023). Neurocognitive mechanisms underlying attention bias towards pain: evidence from a drift-diffusion model and event-related potentials. The journal of pain, S1526-5900(23)00366-8. (5-year-IF = 7.04; SCI -JCR-Q1) <a href='https://www.sciencedirect.com/science/article/pii/S1526590023003668'> <FaLink className='icon' /></a></p>
          <p>2.Zhuo, S.W, Zhang, Y.H, Lin, C.N, & Peng, W.W # (2023). Testosterone administration enhances the expectation and perception of painful and non-painful somatosensory stimuli. Psychoneuroendocrinology, 152, 106081. (5-year-IF = 5.35; SCI -JCR-Q2) <a href='https://www.sciencedirect.com/science/article/abs/pii/S0306453023000598'> <FaLink className='icon' /></a></p> 
          <p>3.Li, X.Y., Yao, J.J., Lin, X.X., Chen, S.X., Jin R.C.#, Peng, W.W. (2023) Transcranial random noise stimulation over the left dorsolateral prefrontal cortex attenuates pain expectation and perception. Clinical Neurophysiology. 147, 1–10. (5-year-IF = 4.72; SCI -JCR-Q2) <a href='https://www.sciencedirect.com/science/article/abs/pii/S1388245722009737'> <FaLink className='icon' /></a></p>
          <p>4.Li W.L., Lou W.T., Zhang W.Y., Tong, R. K. Y., Jin R.C., Peng W.W.# (2023). Gyrus rectus asymmetry predicts trait alexithymia, cognitive empathy, and social function in neurotypical adults. Cerebral Cortex bhac184. (5-year-IF = 6.00; SCI -JCR-Q2) <a href='https://academic.oup.com/cercor/article/33/5/1941/6585942'> <FaLink className='icon' /></a></p>
          <p>5.张文芸, 卓诗维, 郑倩倩, 关颖琳, 彭微微#. (2023). 自闭特质对疼痛共情的影响：疼痛负性情绪和认知的中介作用. 心理学报, 已录用 <a href='https://journal.psych.ac.cn/xlxb/article/2023/0439-755X/0439-755X-55-9-1501.shtml'> <FaLink className='icon' /></a></p>

          <h2><FaCalendarCheck className='icon' /> 2022</h2>
          <hr></hr>
          <br></br>
          <p>6.Li X.Y., Lou W.T., Zhang W.Y., Tong R. K. Y., Hu L., Peng W.W.# (2022). Ongoing first-hand pain facilitates somatosensory resonance but inhibits affective sharing in empathy for pain. NeuroImage, 119599. (5-year-IF = 8.01; SCI -JCR-Q1) <a href='https://www.sciencedirect.com/science/article/pii/S1053811922007145'> <FaLink className='icon' /></a></p>
          <p>7.Lin X.X., Zhuo S.W., Liu Z.A., Fan J.S., Peng W.W.# (2022). Autistic traits heighten sensitivity to rejection-induced social pain. Annals of the New York Academy of Sciences. 1517(1), 286–299. (5-year-IF = 6.58; SCI -JCR-Q1) <a href='https://nyaspubs.onlinelibrary.wiley.com/doi/epdf/10.1111/nyas.14880'> <FaLink className='icon' /></a></p>
          <p>8.Zhuo S.W., Zhang W.Y., Fan J.S., Wu, Y., Wu, W., Peng W.W.# (2022). Single-dose testosterone administration modulates instant empathic responses to others’ pain: an EEG study. Psychoneuroendocrinology 105768. (5-year-IF = 5.35; SCI -JCR-Q2) <a href='https://www.sciencedirect.com/science/article/abs/pii/S0306453022001093'> <FaLink className='icon' /></a></p>
          <p>9.Zhang W.Y., Zhuo S.W., Li X.Y., & Peng W.W.# (2022). Autistic Traits and Empathy for Others’ Pain Among the General Population: Test of the Mediating Effects of First-Hand Pain Sensitivity. Journal of Autism and Developmental Disorders, 1-15. (5-year-IF = 5.26; SSCI-JCR-Q2) <a href='https://link.springer.com/article/10.1007/s10803-022-05471-9'> <FaLink className='icon' /></a></p>
          <p>10.Peng W.W., Zhan Y.L., Jin R.C., Lou W.T., Li X.Y. (2022) Aftereffects of alpha transcranial alternating current stimulation over the primary sensorimotor cortex on cortical processing of pain. PAIN. 10.1097. (5-year-IF = 8.09; SCI -JCR-Q1) <a href='https://journals.lww.com/pain/abstract/2023/06000/aftereffects_of_alpha_transcranial_alternating.9.aspx'> <FaLink className='icon' /></a></p>



          <h2><FaCalendarCheck className='icon' /> 2021</h2>
          <hr></hr>
          <br></br>
          <p>11.Peng W.W, Lou, W.T., Huang, X.X., Ye, Q.., Tong, R. K. Y., & Cui, F. (2021). Suffer together, bond together: brain-to-brain synchronization and mutual affective empathy when sharing painful experiences. NeuroImage 238, 118249. (5-year-IF = 8.01; SCI -JCR-Q1) <a href='https://www.sciencedirect.com/science/article/pii/S1053811921005267'> <FaLink className='icon' /></a></p>
          <p>12.Yao J.J., Li X.Y., Zhang W.Y., Lin X.X., Lyu X.H., Peng W.W.# (2021) Analgesia induced by anodal tDCS and high-frequency tRNS over the motor cortex: Immediate and sustained effects on pain perception. Brain Stimulation 14(5), 1174-1183. (5-year-IF = 9.61; SCI -JCR-Q1) <a href='https://www.brainstimjrnl.com/article/S1935-861X(21)00149-2/fulltext'> <FaLink className='icon' /></a></p>
          <p>13.Li X.Y., Yao J.J., Zhang W.Y., Chen S.X., Peng, W.W.# (2021) Effects of Transcranial Direct Current Stimulation on Experimental Pain Perception: A Systematic Review and Meta-Analysis. Clinical Neurophysiology 132(9), 2163-2175. (5-year-IF = 4.72; SCI -JCR-Q2) <a href='https://www.sciencedirect.com/science/article/abs/pii/S1388245721006064'> <FaLink className='icon' /></a></p>
          <p>14.Fang H.H., Li X.Y., Fan B., Wu Y., Peng W.W.# (2021) Single dose testosterone administration enhances novelty responsiveness and short-term habituation in healthy males. Hormones and Behavior 131, 104963. (5-year-IF = 4.02;，JCR-Q2) <a href=''> <FaLink className='icon' /></a></p>
          <p>15.张文芸, 李晓云, 姚俊杰, 叶倩, 彭微微#. (2021). 自闭症谱系障碍个体的疼痛敏感性异常: 来自元分析的证据. 心理学报  53(6), 613. <a href='https://journal.psych.ac.cn/xlxb/CN/10.3724/SP.J.1041.2021.00613'> <FaLink className='icon' /></a></p>



          <h2><FaCalendarCheck className='icon' /> 2020</h2>
          <hr></hr>
          <br></br>
          <p>16.Yao M.L., Lei Y., Li P., Ye Q., Liu Y., Li X.Y., Peng W.W.# (2020) Shared sensitivity to physical pain and social evaluation. The Journal of Pain 21 (5-6): 677-688. (5-year-IF = 7.04; SCI -JCR-Q1) <a href='https://www.jpain.org/article/S1526-5900(19)30844-2/fulltext'> <FaLink className='icon' /></a></p>
          <p>17.Li X.Y., Liu Y., Ye Q., Lu X.J., Peng W.W.# (2020) The linkage between first-hand pain sensitivity and empathy for others' pain: attention matters. Human Brain Mapping 41(17), 4815–4828. (5-year-IF = 5.81; SCI -JCR-Q1) <a href='https://onlinelibrary.wiley.com/doi/10.1002/hbm.25160'> <FaLink className='icon' /></a></p>
          <p>18.Peng W.W., Zhan Y.L., Jiang Y.L., Nan W.Y., Cohen Kadosh R., Wan F., (2020) Individual variation in alpha neurofeedback training efficacy predicts pain modulation. NeuroImage: Clinical 102454 (5-year-IF = 5.69; SCI -JCR-Q2) <a href='https://www.sciencedirect.com/science/article/pii/S2213158220302916?via%3Dihub'> <FaLink className='icon' /></a></p>
          <p>19.Wu Y.J., Liu Y., Yao M.L., Li X.Y., Peng W.W.# (2020) Language contexts modulate instant empathic responses to others’ pain. Psychophysiology 57(8):e13562 (5-year-IF = 4.72; SCI/SSCI -JCR-Q1) <a href='https://onlinelibrary.wiley.com/doi/10.1111/psyp.13562'> <FaLink className='icon' /></a></p>
          <p>20.Ye Q., Li X.Y., Peng W.W.# (2020) Individual variation in pain sensitivity and implicit negative bias toward pain. Psychosomatic Medicine 82 (8): 796-804 (5-year-IF = 5.14; SCI/SSCI -JCR-Q1) <a href='https://journals.lww.com/psychosomaticmedicine/Abstract/2020/10000/Individual_Variation_in_Pain_Sensitivity_and.10.aspx#:~:text=Individual%20variation%20in%20pain%20sensitivity%20relates%20to%20implicit,benefit%20from%20techniques%20designed%20to%20alter%20implicit%20bias.'> <FaLink className='icon' /></a></p>
          <p>21.Lei Y., Mei Y., Dai Y.Q., Peng W.W.# (2020) Taxonomic relations evoke more fear than thematic relations after fear conditioning: an EEG study. Neurobiology of Learning and Memory 167:107099. (5-year-IF = 3.45; SCI/SSCI -JCR-Q2) <a href='https://www.sciencedirect.com/science/article/abs/pii/S1074742719301662?via%3Dihub'> <FaLink className='icon' /></a></p>
          <p>22.Fang H.H., Li X.Y., Wu Y., Peng W.W.# (2020)  Single dose testosterone administration modulates the temporal dynamics of distractor processing. Psychoneuroendocrinology 121, 104838 (5-year-IF = 5.35，SCI-JCR-Q1) <a href='https://www.sciencedirect.com/science/article/abs/pii/S0306453020302602?via%3Dihub'> <FaLink className='icon' /></a></p>





          <h2><FaCalendarCheck className='icon' /> 2019</h2>
          <hr></hr>
          <br></br>
          <p>23.Peng W.W.*, Tang Z.Y.*, Zhang F.R., Li H., Kong Y.Z., Iannetti G.D., Hu L. (2019) Neurobiological mechanisms of TENS-induced analgesia. NeuroImage 195: 396-408. (5-year-IF = 8.01; SCI -JCR-Q1) <a href='https://www.sciencedirect.com/science/article/pii/S1053811919302848?via%3Dihub'> <FaLink className='icon' /></a></p>
          <p>24.Peng W.W., Huang X.X., Liu Y., Cui F. (2019) Predictability modulates the anticipation and perception of pain in both self and others. Social Cognitive and Affective Neuroscience 14(7):747-757. (5-year-IF = 5.20; SCI/SSCI-JCR-Q1) <a href=''> <FaLink className='icon' /></a></p>
          <p>25.Liu Y., Meng J., Yao M.L., Ye Q., Fan B., Peng W.W.# (2019) Hearing other's pain is associated with sensitivity to physical pain: an ERP study. Biological Psychology 145:150-158. (5-year-IF = 3.97，SSCI -JCR-Q1) <a href=''> <FaLink className='icon' /></a></p>
          <p>26.Meng J., Shen L., Li Z.S., Peng W.W.# (2019) Top-down Effects on Empathy for Pain in Adults with Autistic Traits. Scientific Reports 9:8022. (5-year-IF = 5.52,SCI-JCR-Q1) <a href=''> <FaLink className='icon' /></a></p>
          <p>27.Peng W.W., Peng H.N., Lu J.Z., Fan B., Cui F. (2019) Others’ pain appraisals modulate the anticipation and experience of subsequent pain. Neuroscience 410:16-28. (5-year-IF =3.92; SCI -JCR-Q2) <a href=''> <FaLink className='icon' /></a></p>
          <p>28.Meng J., Shen L., Li Z.S., Peng W.W.# (2019) Top-down attention modulation on the perception of others' vocal pain: An event-related potential study. Neuropsychologia 133:107177. (5-year-IF = 3.56; SCI/SSCI -JCR-Q2) <a href=''> <FaLink className='icon' /></a></p>
          <p>29.Ye Q., Yan D., Yao M.L., Lou W.T.#, Peng W.W.# (2019) Hyperexcitability of cortical oscillations in patients with somatoform pain disorder: A resting state EEG study. Neural Plasticity 2687150. (5-year-IF = 4.65; SCI -JCR-Q2) <a href=''> <FaLink className='icon' /></a></p>
          <p>30.Peng W.W.*, Meng J.*, Lou Y.X., Li X.Y., Lei Y., Yan D. (2019) Reduced empathic pain processing in patients with somatoform pain disorder: evidence from behavioral and neurophysiological measures. International Journal of Psychophysiology 139:40-47. (5-year-IF = 3.52，SCI/SSCI-JCR-Q2) <a href=''> <FaLink className='icon' /></a></p>
          <p>31.Qiu F*, Peng W.W.*, Li M.M*, Zhang L.L., Zhu H., Tan, X.Y, Li H., Zhang, J (2019) Effects of physical exercise on negative emotional susceptibility in young adult females: An event-related potential study. Brain research 1722: 146382. (5-year-IF = 3.68 SCI-JCR-Q3) <a href=''> <FaLink className='icon' /></a></p>












          <h2><FaCalendarCheck className='icon' /> 2018</h2>
          <hr></hr>
          <br></br>
          <p>32.Peng W.W.*, Xia X.L.*, Yi M., Huang, G. Zhang Z.G., Iannetti G.D., Hu L. (2018) Brain oscillations reflecting pain-related behavior in freely-moving rats. PAIN 159(1): 106–118. (5-year-IF = 8.09; SCI -JCR-Q1) <a href=''> <FaLink className='icon' /></a></p>
          <p>33.张会娟, 彭微微#, 周丽丽, 吕雪靖, 魏华, 胡理# (2018) 安慰剂效应的心理机制及临床应用, 中国临床心理学杂志 26(3),467-471,453. <a href=''> <FaLink className='icon' /></a></p>
          
          <h2><FaCalendarCheck className='icon' /> 2017</h2>
          <hr></hr>
          <br></br>

          <p>34.Zhao K., Tang Z.Y., Guo Y.F., Peng W.W.#, Hu L.# (2017) Analgesia induced by self-initiated electrotactile sensation is mediated by top-down modulations. Psychophysiology 54(6):848-856. (5-year-IF = 4.72; SCI/SSCI -JCR-Q1) <a href=''> <FaLink className='icon' /></a></p>
          <p>35.Peng W.W.*, Guo X.L.*, Jin Q.Q., Wei H., Xia X. L., Zhang, Y., Huang, P. C., Wang, W. C., Li, S.L., Wang, J. S., Chen, J, Hu L. (2017) Biological mechanism of post-herpetic neuralgia: evidence from multiple patho-psychophysiological measures. European Journal of Pain 21(5):827-842. (5-year-IF = 4.17; SCI -JCR-Q2) <a href=''> <FaLink className='icon' /></a></p>
          <p>36.王小玲, 唐丹丹, 靳晴晴, 彭微微#, 胡理 (2017) 疼痛恐惧的神经机制及其消退. 心理科学进展 25(10): 1758-1768. <a href=''> <FaLink className='icon' /></a></p>
          <p>37.汤征宇, 汪汇泉, 夏晓磊, 汤艺, 彭微微#, 胡理 (2017) 经皮神经电刺激的镇痛机制及其临床应用. 生理学报 2017(3):1-22. <a href=''> <FaLink className='icon' /></a></p>

          <h2><FaCalendarCheck className='icon' /> 2012-2016</h2>
          
          <hr></hr>
          <br></br>

          <p>38.Xia X.L.*, Peng W.W.*, Iannetti G., Hu L. (2016) Laser-evoked cortical responses in freely-moving rats reflect the activation of C-fibre afferent pathways. NeuroImage 128: 209-17. (5-year-IF = 8.01; SCI -JCR-Q1)</p>
          <p>39.Peng W.W. & Tang D.D. (2016) Pain Related Cortical Oscillations: Methodological Advances and Potential Applications. Front. Comput. Neurosci 10:9. (5-year-IF =3.47，SCI-JCR-Q2)</p>
          <p>40.汤艺，唐丹丹，彭微微#，胡理 (2016) 以痛镇痛：条件性疼痛调节 科学通报 61(6):642-653.</p>
          <p>41.Peng W.W., Babiloni C., Mao Y.H., Hu Y. (2015) Subjective pain perception mediated by alpha rhythms. Biological Psychology 109:141-50. (5-year-IF = 3.97，SCI/SSCI -JCR-Q1)</p>
          <p>42.Peng W.W., Hu Y., Mao Y.H., Babiloni C. (2015) Widespread cortical alpha ERD companying visual oddball target stimuli is frequency but non-modality specific. Behavioural Brain Research 295:71-77. (5-year-IF = 3.48; SCI -JCR-Q2)</p>
          <p>43.Jia H.B.*, Peng W.W.*, Hu L. (2015) A novel approach to identify time-frequency oscillatory features in electrocortical signals Journal of Neuroscience Methods 253:18-27. (5-year-IF = 3.20，SCI-JCR-Q3)</p>
          <p>44.Peng W.W.*, Hu L.*, Zhang ZG, Hu Y. (2014) Changes of spontaneous oscillatory activity to tonic heat pain. Plos One 9:e91052. (5-year-IF = 4.07; SCI -JCR-Q1)</p>
          <p>45.Hu L.*, Peng W.W.*, Valentini E., Hu Y. (2013) Functional features of nociceptive-induced suppression of alpha band electroencephalographic oscillations. The Journal of Pain 14:89-99. (5-year-IF =7.04; SCI/-JCR-Q1)</p>
          <p>46.Peng W.W.*, Hu L.*, Zhang Z.G., Hu Y. (2012) Causality in the association between P300 and alpha event-related desynchronization. Plos One 7: e34163. (5-year-IF =4.07; SCI -JCR-Q1) </p>
        </div>

        <Footer />
    </div>
  )
}

export default PublicationScreen
