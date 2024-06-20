import GalleryPage from '../../Components/Gallery/GalleryPage';


// impport custom css 

import './Gallery.css'



export default function galeryShowcase () {
    return (
        <div className='Gallery_content'>
            <div className='content_top'>
                <h1>Project Showcase</h1>
                <p>
                    <span> -👹 </span>
                    I challenged myself with several personal projects to showcase my skills and abilities.
                    This gallery highlights these projects. Click on any project to see a modal with its description and a link to the project.
                </p>
            </div>

            <div className='content_bottom'>

                <GalleryPage />
                
            </div>
        </div>
    )
}