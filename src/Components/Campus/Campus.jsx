import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery-1.png'
import hero from '../../assets/hero.jpg'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <button className='btn dark-btn'>了解更多 <img src={white_arrow} alt="" /></button>
      <div className="row">

        <div className='gallery'>

          <img src={hero} alt="" />
          <div className="caption">
              
              <p>2020年12月团建</p>
          </div>
        </div>
        <div className='gallery'>
          <img src={gallery_1} alt="" />
          <div className="caption">
              <p>2021年11月团建</p>
          </div>

        </div>
        

      </div>

      <div className="row">

        <div className="gallery">
          
          <img src={gallery_2} alt="" />
          <div className="caption">
              
              <p>2023年4月团建</p>
          </div>
        </div>
        <div className="gallery">
          <img src={gallery_3} alt="" />
          <div className="caption">
              
              <p>2023年4月团建</p>
          </div>
        </div>

      </div>
      
      
    </div>
  )
}

export default Campus
