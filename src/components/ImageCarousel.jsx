import React, {useState} from 'react'
import {motion} from 'framer-motion'
import './styles/CarouselStyle.css'
import FloatingButton from './FloatingButton'
import IMG1 from '../assets/img001.jpg'
import IMG2 from '../assets/img002.jpg'
import IMG3 from '../assets/img003.jpg'
import IMG4 from '../assets/img004.jpg'
import IMG5 from '../assets/img005.jpg'
import IMG6 from '../assets/img006.jpg'
import IMG7 from '../assets/img007.jpg'

const images = [ IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7]

const ImageCarousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState (0)

    const handleNextImage = () =>{
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
    }

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex == 0 ? images.length - 1 : prevIndex - 1
        )
    }
    return (
        <>
            <div className='imageCarousel'>
            <motion.img 
                src= {images[currentImageIndex]}
                alt={`Imagem ${currentImageIndex + 1}`}
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
                transition={{ duration: 0.5}}
            />
            <div className='carouselControls'>
                <button onClick={handlePrevImage}> Anterior </button>
                <button onClick={handleNextImage}> Próxima  </button>
            </div>
        </div>
        <FloatingButton/>
        </>
        
    )
}

export default ImageCarousel