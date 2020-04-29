import React from 'react';
import './ImageLinkForm.css'




    function onInputChange(input) {
        console.log(input)
    }
const ImageLinkForm = () => {
    return (
       <div>
           <p className=' f4 ma3'>
            This will detect the celebrity from the picture
           </p>
           <div className=' center '>
               <div className=' form  center pa4 br3  shadow-4'>
                    <input className='f5  w-70 center' type='text'/>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' 
                    onClick={onInputChange} style={{borderRadius:200}}>Detect</button>
                </div>
           </div>
       </div> 
    )
}

export default ImageLinkForm;