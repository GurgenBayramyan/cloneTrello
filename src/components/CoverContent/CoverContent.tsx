import React, { FC } from 'react'
import style from './CoverContent.module.scss'
import { ICoverProps } from './CoverContentTypes'


const CoverContent:FC<ICoverProps> = ({onClose}) => {
  return (
    <div onClick={(e)=>e.stopPropagation()} className={style.changecover}>
            <div className={style.changecover_header}>
                <p>Cover</p>
                <span onClick={onClose}>X</span>
            </div>
            <h5>Colors</h5>
            <div className={style.changecover_colors}>
                <div className={style.rowOne}>
                    <div style={{background:"silver"}}></div>
                    <div style={{background:"maroon"}}></div>
                    <div style={{background:"red"}}></div>
                    <div style={{background:"purple"}}></div>
                    <div style={{background:"lime"}}></div>
                </div>
                <div className={style.rowTwo}>
                    <div style={{background:"navy"}}></div>
                    <div style={{background:"teal"}}></div>
                    <div style={{background:"aqua"}}></div>
                    <div style={{background:"rchartreuse"}}></div>
                    <div style={{background:"gold"}}></div>
                </div>
            </div>
            <h5>Attachments</h5>
            <div className={style.standartDiv}>
                <p>Upload a cover Image</p>
            </div>
            <p className={style.standartParagraf}>Tip:Drag an image on to the card to upload it.</p>
            <h5>Photos from Unsplash</h5>
            <div className={style.backgroundsBlock}>
                <div className={style.backgroundsBlock_rowOne}>
                    <div style={{background:`url(https://media.istockphoto.com/id/524702892/photo/blue-backgraund.jpg?s=1024x1024&w=is&k=20&c=84PRGITG9VTpc7_Fw_uedZzhhkRwXAA8auZNk6iCI4o=)`}}></div>
                    <div style={{background:`url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbvCRsj7NHZUG-zlw95M6qAszRQMakp_lTmQ&usqp=CAU)`}} ></div>
                    <div style={{background:`url(https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm222batch5-kul-03.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=08fbfb223887d33030e97becaf4e20dc)`}}></div>
                </div>
                <div className={style.backgroundsBlock_rowTwo}>
                    <div style={{background:`url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7NN5kH4oRzvd9-BR79GlkGeTKTOwI-WgFuQ&usqp=CAU)`}} ></div>
                    <div style={{background:`url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9n_5mGGICvKLQUV40oRIUNEGRgX6FJ1rL7A&usqp=CAU)`}} ></div>
                    <div style={{background:`url(https://thumbs.dreamstime.com/b/abstract-backgraund-design-element-graphics-artworks-purple-pink-chaotic-lines-colorful-background-digital-graphic-artwork-281772075.jpg)`}} ></div>
                </div>
            </div>
            <div className={style.standartDiv}>
                <span>Search for photos</span>
            </div>
            <span className={style.befforEnd}>Byusing images from Unsplash,you agree to their <i>License</i> and <i>Terms of Service</i></span>
    </div>
  )
}

export default CoverContent