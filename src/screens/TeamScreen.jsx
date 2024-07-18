import React from 'react'
import people1 from '../assets/people1.jpg'
import peopleSample from '../assets/people-sample.jpg'
import people2 from '../assets/2.jpg'

import people13 from '../assets/13.jpg'
import people14 from '../assets/14.jpg'
import people15 from '../assets/15.jpg'
import people16 from '../assets/16.jpg'

import lijia from '../assets/lijia.jpg'
import xia from '../assets/xia.jpeg'
import xiaoyun from '../assets/xiaoyun.jpeg'
import yangxilin from '../assets/yangxilin.jpg'
import zhaoyuxin from '../assets/zhaoyuxin.jpg'
import linxinxin from '../assets/linxinxin.jpg'
import penghuane from '../assets/penghuane.jpg'
import weng from '../assets/weng.jpeg'
import wangxin from '../assets/wangxin.jpg'
import chenshihao from '../assets/chenshihao.jpg'

import './TeamScreen.css'
import white_arrow from '../assets/white-arrow.png'
import { FaEnvelope, FaIdBadge, FaStar, FaArrowRight} from 'react-icons/fa'
import Title from '../Components/Title/Title'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

import { Link, Navigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'


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

        <Title subTitle='PHD/Postdoc' title='博士/博士后'/>

        <div className='students'>
        <div className='leader'>

          <div className="leader-right">
          <img src={weng} alt="" className='leader-img'/>

            <p>
            <FaEnvelope className='icon'/> lweng@szu.edu.cn
            </p>
            <h3>博士/博士后</h3>
          </div>
          <div className="leader-left">
            <h2>翁玲玲</h2>
            <p><FaStar className='icon' /> 2023年于荷兰莱顿大学心理学系获心理学博士学位，师从Andrea Evers教授。研究领域包括：疼痛，瘙痒，安慰剂和反安慰剂。在国内外重要期刊，如PAIN等上发表论文。</p>
            
            <h3>研究方向</h3>
            <p>安慰剂镇痛和反安慰剂痛敏的认知神经机制研究、反安慰剂痒觉过敏的机制研究</p>

            <h3>教育/工作经历</h3>
            <p>2008年9月-2012年7月 福建医科大学应用心理学 获学士学位</p>
            <p>2013年9月-2016年7月 西南大学应用心理学心理学专业 获硕士学位</p>
            <p>2017年10月–2023年10月 荷兰莱顿大学健康心理学 获博士学位</p>
            <p>2023年6月-至今 深圳大学心理学院 博士后</p>

            <h3>科研论文发表</h3>
            <p>Weng L*, Peerdeman K, Della Porta D, van Laarhoven A, Evers AWM. Can placebo and nocebo effects generalize within pain modalities and across somatosensory sensations? Pain. 2021;163(3):548-559. doi: 10.1097/j.pain.0000000000002390</p>
            <p>Weng L*, van Laarhoven AIM, Peerdeman KJ, Evers AWM. Induction and generalization of nocebo effects on itch. Exp Dermatol.  2022; 00:1–12. doi:10.1111/exd.14522</p>
            <p>Weng L*, van Laarhoven AIM, Peerdeman KJ, Evers AWM. Do individual psychological characteristics predict induction and generalization of nocebo and placebo effects on pain and itch? Front. Psychiatry. 2022; 13:838578. doi: 10.3389/fpsyt.2022.838578 </p>
            <p>Weng L*, Peerdeman K, van Laarhoven A, Evers AWM. A systematic review: Generalization of placebo and nocebo effects. (under revision)</p>
    
            <h3>社会服务</h3>
            <p>2017–至今 Leiden Institute for Brain and Cognition (LIBC), junior member</p>
            <p>2018–至今 Association for Researchers in Psychology and Health (ARPH), member</p>

          </div>
        </div>

        <div className='leader'>
          <div className='leader-right'>
          <img src={xia} alt="" className='leader-img'/>

            <p>
            <FaEnvelope className='icon'/> 1664688888@qq.com
            </p>
            <h3>博士/博士后</h3>
          </div>
          <div className='leader-left'>
            <h2>夏晓磊</h2>
            <p><FaStar className='icon' /> 2023年于中国科学院心理研究所获理学博士学位，师从胡理研究员。研究方向为疼痛认知神经科学，主要采用行为学、EEG和ECoG等技术研究人和大鼠的疼痛神经机制，擅长脑电实验设计和数据分析技术，使用脑电相关技术以第一作者/并列一作身份在疼痛领域顶尖杂志PAIN上发表论文2篇（含封面文章1篇）、在神经成像领域优秀期刊NeuroImage上发表论文1篇。参与编著脑电学术专著两部。参与3项国家自然科学基金项目。</p>
            
            <h3>研究方向</h3>
            <p>疼痛认知神经科学</p>


          </div>
        </div>


        <div className='leader'>
          <div className='leader-right'>
          <img src={people2} alt="" className='leader-img'/>

            <p>
            <FaEnvelope className='icon'/> ?
            </p>
            <h3>2021级博士研究生</h3>
          </div>
          <div className='leader-left'>
            <h2>张银花</h2>
            <p><FaStar className='icon' /> 本科毕业于新乡医学院心理学院，研究兴趣是探究大学生焦虑和手机依赖的关系。硕士毕业于深圳大学心理学院，研究主题是睾酮如何影响个体决策。闲暇时，喜欢读书，汲取知识和灵感，也喜欢打球，锻炼身体，放松心情。在科研和生活之间平衡，不仅追求科学真理，也享受简单快乐。希望通过自己的努力，为心理学研究做出贡献，同时呼吁更多人关注心理健康，重视疼痛管理。</p>
            
            <h3>研究方向</h3>
            <p>结合神经调控和情绪调节策略镇痛，通过科学手段帮助人们减轻与疼痛相关的痛苦</p>

            <h3>科研成果</h3>
            <p>Zhang, Y., Ye, Q., He, H., Jin, R., & Peng, W. (2023). Neurocognitive mechanisms underlying attention bias towards pain: Evidence from a drift-diffusion model and event-related potentials. The Journal of Pain, 24(7), 1307-1320.</p>
            <p>Wu, Y., Zhang, Y., Ou, J., Hu, Y., & Zilioli, S. (2020). Exogenous testosterone increases the audience effect in healthy males: evidence for the social status hypothesis. Proceedings of the Royal Society B, 287(1931), 20200976.</p>
            <p>Han, C., Zhang, Y., Lei, X., Li, X., Morrison, E. R., & Wu, Y. (2020). Single dose testosterone administration increases men’s facial femininity preference in a Chinese population. Psychoneuroendocrinology, 115, 104630.</p>
            <p>张银花, 李红, 吴寅. (2020). 计算模型在道德认知研究中的应用. 心理科学进展, 28(7), 1042-1055.</p>
            <p>李昊, 张银花, 李亚楠, 单泓博, & 李晏. (2018). 大学生焦虑在手机依赖与核心自我评价间的中介效应. 中国心理卫生杂志, v.32(008), 700-704.</p>
            <p>李昊, 李亚楠, & 张银花. (2018). 焦虑在大学生手机依赖与控制源间的中介作用. 中华行为医学与脑科学杂志(7), 650-654.</p>
          </div>
        </div>

        <div className='leader'>
          <div className='leader-right'>
          <img src={lijia} alt="" className='leader-img'/>

            <p>
            <FaEnvelope className='icon'/> ?
            </p>
            <h3>2022级博士研究生</h3>
          </div>
          <div className='leader-left'>
            <h2>李嘉</h2>
            <p><FaStar className='icon' /> 本科毕业于江西师范大学心理学院，研究方向是病理性自恋及其对心理健康的影响；研究生毕业于首都师范大学心理学院，研究方向是奖赏与利他行为及其神经机制。</p>
            
            <h3>研究方向</h3>
            <p>当前兴趣关注认知预期对主观疼痛感知的调控效应，旨在结合神经电生理技术和认知计算建模揭示认知预期调控主观疼痛感知的动态整合过程及其在神经上的时间和空间表征。使用的研究技术包括脑电图和脑磁图，研究方法包括微状态分析、多变量模式分析MVPA和线性混合模型LMM等。</p>
          </div>
        </div>

        <div className='leader'>
          <div className='leader-right'>
          <img src={linxinxin} alt="" className='leader-img'/>

            <p>
            <FaEnvelope className='icon'/> ?
            </p>
            <h3>2023级博士研究生</h3>
          </div>
          <div className='leader-left'>
            <h2>林鑫鑫</h2>
            <p><FaStar className='icon' /> 我于深圳大学获得硕士学位，主要研究方向集中在两个领域：一是经颅电刺激的镇痛效果及其机制，二是高自闭个体的疼痛敏感性。在经颅电刺激镇痛方面，我致力于结合多种实验室疼痛模型与多种神经影像技术，优化电流参数的同时深入刻画其镇痛机制，最终目标是将机理明确的经颅电刺激方案应用于临床慢性疼痛管理。在高自闭个体疼痛敏感性方面，我专注于探究自闭特质如何影响个体的疼痛敏感性，并在理解其作用机制的基础上，进一步探索有效的调控手段，以期改善该群体的心理健康状况。除了学术研究以外，我热爱一切有趣的人与事。Relax, noting is under control.</p>
            
            <h3>研究方向</h3>
            <p>经颅电刺激的镇痛效果及其机制, 高自闭个体的疼痛敏感性</p>
          </div>
        </div>

        <div className='leader'>
          <div className='leader-right'>
          <img src={chenshihao} alt="" className='leader-img'/>

            <p>
            <FaEnvelope className='icon'/> ?
            </p>
            <h3>2024级博士研究生</h3>
          </div>
          <div className='leader-left'>
            <h2>陈施豪</h2>
            <p><FaStar className='icon' /> 2017年于中国人民大学商学院获管理学学士学位，2023年于辽宁师范大学心理学院获教育学硕士学位。研究兴趣为疼痛认知神经科学，主要通过计算建模进行疼痛解码，以理解和预测疼痛对人类认知功能的影响。目前的研究内容包括解码疼痛神经表征，具体是利用行为学、EEG和计算模型研究非联结学习下的疼痛神经表征。通过分析疼痛对脑电、脑成像等生理活动的影响，探索疼痛如何干扰认知功能，改变人类行为和决策过程。研究内容有助于推动疼痛管理和治疗方法的创新，改善慢性疼痛患者的生活质量。</p>
            
            <h3>研究方向</h3>
            <p>疼痛认知神经科学, 解码疼痛神经表征</p>
          </div>
        </div>
        </div>

        
        <Title subTitle='current masters/undergraduates' title='在读硕士/本科生'/>


    <div className='students'>
        <div className='leader'>
          <div className='leader-right'>
          <img src={people15} alt="" className='leader-img'/>
          
            <p>
            <FaEnvelope className='icon'/> ?
            </p>
            <h3>2022级硕士研究生</h3>
          </div>
          <div className='leader-left'>
            <h2>胡玉祯</h2>
            <p><FaStar className='icon' /> 本科毕业于广东财经大学人力资源管理专业，现专注于疼痛的认知调控研究。我的研究兴趣主要集中在情绪调节、正念以及正念融合神经调控的镇痛机制方面。我的研究旨在探索这些方法在实际应用中的有效性，并为临床实践提供科学依据。
在学术研究之外，我注重全面发展的生活方式，运动和音乐是我生活中不可或缺的重要部分。运动方面，我喜欢参与各种球类运动，尤其是羽毛球、网球和壁球。这些运动不仅帮助我保持身体健康，还提升了我的专注力和团队合作能力。运动使我充满活力和干劲，能够以最佳状态投入到研究工作中。
此外，音乐是我心灵的寄托和灵感的源泉。唱歌是我最喜欢的休闲活动之一，通过音乐，我能够放松身心，激发创造力，找到平衡。在音乐的陪伴下，我的生活更加丰富多彩，也使我在工作中保持积极乐观的态度。</p>
            
            <h3>研究方向</h3>
            <p>情绪调节、正念以及正念融合神经调控的镇痛机制</p>
          </div>
        </div>

        <div className='leader'>
          <div className='leader-right'>
          <img src={people14} alt="" className='leader-img'/>
          
            <p>
            <FaEnvelope className='icon'/> ?
            </p>
            <h3>2022级硕士研究生</h3>
          </div>
          <div className='leader-left'>
            <h2>吴奇奇</h2>
            <p><FaStar className='icon' /> 2016年毕业于郑州大学工商管理专业，当前是深圳大学心理学学说研二在读，我目前的研究兴趣是研究非侵入性神经调控手段来缓解疼痛，希望能为加深疼痛的理解和开发非药物心理镇痛手段贡献一份力量。
当前我在做的项目是利用双耳节拍和经颅电刺激（tACS）技术来调节大脑神经振荡活动，减轻疼痛感受。这些研究不仅有助于理解大脑神经振荡的复杂机制，还可能带来实际的临床应用价值。
在日常生活中，我喜欢看书和打游戏，这些爱好不仅让我放松心情，还激发了我的创造力和思考能力。阅读广泛的书籍使我能够从不同的角度看待问题，而游戏则让我体验到团队合作和策略规划的乐趣。
如果有任何关于我研究的问题和需要我帮助的地方，随时与我联系。</p>
            
            <h3>研究方向</h3>
            <p>非侵入性神经调控手段缓解疼痛</p>
          </div>
        </div>


        <div className='leader'>
          <div className='leader-right'>
          <img src={people13} alt="" className='leader-img'/>
          
            <p>
            <FaEnvelope className='icon'/> ?
            </p>
            <h3>2022级硕士研究生</h3>
          </div>
          <div className='leader-left'>
            <h2>章雯婷</h2>
            <p><FaStar className='icon' /> 本科毕业于江西中医药大学应用心理学专业。在研究方面，我参与了共情的脑间同步机制的相关研究。目前我专注于研究自闭特质如何影响个体的疼痛预期构建过程。高自闭特质群体的身心健康问题不容忽视，高自闭个体表现出更高的焦虑、抑郁水平、以及更差的睡眠质量，关注普通人群中高自闭特质群体的心理健康十分重要。因此，我致力于通过研究，为提升个体的心理健康和社会适应能力贡献一份力量。
            除了学术研究，我的学习生活中也充满了丰富多彩的爱好。我热爱阅读，书籍是我最好的朋友，它们带我遨游在知识的海洋中，拓宽了我的视野，丰富了我的内心世界。无论是心理学专著、文学经典还是科普读物，我都乐于涉猎，从中汲取养分，不断提升自我。最后放一段我个人比较喜欢的话：盖士人读书，第一要有志，第二要有识，第三要有恒。有志则断不甘为下流；有识则知学问无尽，不敢以一得自足，如河伯之观海，如井蛙之窥天，皆无识者也；有恒则断无不成之事。此三者缺一不可。</p>
            
            <h3>研究方向</h3>
            <p>自闭特质如何影响个体的疼痛预期构建过程</p>
          </div>
        </div>





        <div className='leader'>
          <div className='leader-right'>
          <img src={penghuane} alt="" className='leader-img'/>
          
            <p>
            <FaEnvelope className='icon'/> ?
            </p>
            <h3>2023级硕士研究生</h3>
          </div>
          <div className='leader-left'>
            <h2>彭焕娥</h2>
            <p><FaStar className='icon' /> 本科毕业于广东医科大学。
MBTI：esfj 爱操心的妈系人格;
研究兴趣：积极心理干预疼痛;
在研课题：正念减压训练对疼痛认知偏向的影响；疼痛认知偏向的漂移扩散模型;
兴趣爱好：旅游、做饭、打桌球;
人生格言：人生没有白走的路，每一步都算数。</p>
            
            <h3>研究方向</h3>
            <p>自闭特质如何影响个体的疼痛预期构建过程</p>
          </div>
        </div>





        <div className='leader'>
          <div className='leader-right'>
          <img src={yangxilin} alt="" className='leader-img'/>
          
            <p>
            <FaEnvelope className='icon'/> ?
            </p>
            <h3>2023级硕士研究生</h3>
          </div>
          <div className='leader-left'>
            <h2>杨希琳</h2>
            <p><FaStar className='icon' /> 疼痛认知与调控实验室的研一学习分子，关注方向为疼痛与共情。菜鸟级喝茶选手，平时爱好在自然的宁静与热闹中放空自我，既观察感受当下的自然又让自己变得轻盈而踏实。欢迎大家一同交流知识与学术，也欢迎大家在繁忙学术之余一起喝茶唠嗑，一起放空自我感受自然。</p>
            
            <h3>研究方向</h3>
            <p>疼痛与共情</p>
          </div>
        </div>


        <div className='leader'>
          <div className='leader-right'>
          <img src={wangxin} alt="" className='leader-img'/>
          
            <p>
            <FaEnvelope className='icon'/> ?
            </p>
            <h3>2023级硕士研究生</h3>
          </div>
          <div className='leader-left'>
            <h2>王欣</h2>
            <p><FaStar className='icon' /> 本科毕业于燕山大学测控技术与仪器专业，毕业后从事过多种工作，最后跨考来到心理学，我感兴趣的方向是认知神经科学，目前在从事通过神经反馈训练来调控疼痛的相关研究。人的大脑非常复杂，我们的研究就是在一点一滴去揭秘大脑的功能机制，进一步能够发掘人类对大脑功能更有效的开发，虽然过程会困难重重，但意义深远。在平常工作之余会去健身，长期保持着健身的习惯，这也让我能够保持一个良好的日常情绪状态和身体状态。</p>
            
            <h3>研究方向</h3>
            <p>认知神经科学, 疼痛调控</p>
          </div>
        </div>



        
        <div className='leader'>
          <div className='leader-right'>
          <img src={zhaoyuxin} alt="" className='leader-img'/>
          
            <p>
            <FaEnvelope className='icon'/> ?
            </p>
            <h3>2023级硕士研究生</h3>
          </div>
          <div className='leader-left'>
            <h2>赵宇晰</h2>
            <p><FaStar className='icon' /> 95后实验室学徒，infp。
本科毕业于华侨大学，深圳大学心理学硕士在读。研究兴趣：探究认知因素（如预期）对疼痛感知的影响及其干预。目前研究项目是关于安慰剂/反安慰剂效应的泛化并利用经颅直流电刺激（tDCS）调节相关脑区的神经活动。
关于本人：
深圳大学著名心理学教授学生，诺贝尔文学奖得主所在国公民，熬夜赶活熊猫大师，周末步数＜100保持者。发散性思维神游者，非典型杂食读书人，刷专听曲菜鸟选手，电影鉴赏业余自封专家，阶段性感悟人生大师。</p>
            
            <h3>研究方向</h3>
            <p>认知因素（如预期）对疼痛感知的影响及其干预</p>
          </div>
        </div>
        </div>



    
       

        <Title subTitle='Graduated Master' title='已毕业硕士研究生'/>

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

        <Title subTitle='Graduated Bachelor' title='已毕业本科生（毕业设计）'/>
        
        <div className='members-container'>
          <div className='members'>
                
            <div className='member'>
            <div className='member-content'>
              
              <h3>付金龙</h3>
              <p>2020级本科生 心理学</p>
            </div></div>

            <div className='member'>
            <div className='member-content'>
              
              <h3>彭骏驰 </h3>
              <p>2020级本科生 心理学（师范）</p>
             
            </div></div>

            <div className='member'>
            <div className='member-content'>
              
              <h3>陈明晖 </h3>
              <p>2020级本科生 心理学（师范）</p>
             
            </div></div>

            <div className='member'>
            <div className='member-content'>
              
              <h3>谌粤龙 </h3>
              <p>2020级本科生 心理学（师范）</p>
              <p>深圳大学百篇优秀本科毕业论文获得者</p>
            </div></div>

            <div className='member'>
            <div className='member-content'>
              
              <h3>关颖琳 </h3>
              <p>2020级本科生 心理学</p>
              <p>深圳大学百篇优秀本科毕业论文获得者</p>
            </div></div>


            
            <div className='member'>
            <div className='member-content'>
              
              <h3>王榕</h3>
              <p>2019级本科生 心理学</p>
            </div></div>

            <div className='member'>
            <div className='member-content'>
              
              <h3>王岩子</h3>
              <p>2019级本科生 心理学</p>
              <p>深圳大学百篇优秀本科毕业论文获得者</p>
            </div></div>

            <div className='member'>
            <div className='member-content'>
              
              <h3>王婷</h3>
              <p>2019级本科生 心理学</p>
            </div></div>

            <div className='member'>
            <div className='member-content'>
              
              <h3>潘海峰</h3>
              <p>2019级本科生 心理学</p>
            </div></div>

            
            <div className='member'>
            <div className='member-content'>
              
              <h3>吴悠</h3>
              <p>2018级本科生 艺术设计学</p>
            </div></div>

            <div className='member'>
            <div className='member-content'>
              
              <h3>蔡志威</h3>
              <p>2018级本科生 金融学</p>
            </div></div>

            <div className='member'>
            <div className='member-content'>
              
              <h3>许嘉敏</h3>
              <p>2018级本科生 哲学</p>
            </div></div>

            <div className='member'>
            <div className='member-content'>
              
              <h3>陈海澜</h3>
              <p>2018级本科生 市场营销</p>
            </div></div>

            
            <div className='member'>
            <div className='member-content'>
              
              <h3>许嘉益</h3>
              <p>2018级本科生 音乐表演</p>
            </div></div>


            <div className='member'>
            <div className='member-content'>
              
              <h3>郭泽昆</h3>
              <p>2017级本科生 应用心理学</p>
            </div></div>

            <div className='member'>
            <div className='member-content'>
              
              <h3>蔡明南</h3>
              <p>2017级本科生 应用心理学</p>
            </div></div>

            <div className='member'>
            <div className='member-content'>
              
              <h3>陈惟楚</h3>
              <p>2017级本科生 应用心理学</p>
              <p>深圳大学百篇优秀本科毕业论文获得者</p>
            </div></div>


            <div className='member'>
            <div className='member-content'>
              
              <h3>侯依然</h3>
              <p>2017级本科生 应用心理学</p>
            </div></div>

            <div className='member'>
            <div className='member-content'>
              
              <h3>桑晓慧 </h3>
              <p>2016级本科生 应用心理学</p>
            </div></div>

            <div className='member'>
            <div className='member-content'>
              
              <h3>钟采芸</h3>
              <p>2016级本科生 应用心理学</p>
            </div></div>

            
            <div className='member'>
            <div className='member-content'>
              
              <h3>毛静轩</h3>
              <p>2015级本科生 美术学</p>
            </div></div>

            
            <div className='member'>
            <div className='member-content'>
              
              <h3>黄寂</h3>
              <p>2015级本科生 光电信息科学与工程</p>
            </div></div>
                        
            <div className='member'>
            <div className='member-content'>
              
              <h3>黄晓彤</h3>
              <p>2015级本科生 社会工作01</p>
            </div></div>

            <div className='member'>
            <div className='member-content'>
              
              <h3>吕志颖</h3>
              <p>2015级本科生 应用心理学</p>
            </div></div>


          </div>
        </div>

        <Footer />


    </div>
       
        


      

  
  )
}

export default TeamScreen
