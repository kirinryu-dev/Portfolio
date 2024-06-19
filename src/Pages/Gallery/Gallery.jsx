import GalleryPage from '../../Components/Gallery/GalleryPage';


// impport custom css 

import './Gallery.css'



export default function galeryShowcase () {
    return (
        <div className='Gallery_content'>
            <div className='content_top'>
                <h1>Project Showcase Gallery</h1>
                <p>
                 Quam libero deleniti ab atque ducimus ut enim eligendi cum vero alias voluptate illum magnam ea nemo, nostrum suscipit quas inventore expedita facilis saepe dolorem excepturi deserunt fuga est. Sed, dicta totam temporibus itaque accusantium ipsa libero et dolorum! Velit similique eos nemo facilis, repudiandae id inventore! Neque molestiae reiciendis voluptas id! Nisi et sapiente quos voluptatum tempora perspiciatis officia aliquam, quod omnis nostrum deserunt harum neque eos, inventore vitae cum ut molestias accusamus obcaecati ipsa! Voluptatem illo praesentium veritatis!

                </p>
            </div>

            <div className='content_bottom'>
                <GalleryPage />
            </div>
        </div>
    )
}