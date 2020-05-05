import React, {useEffect} from 'react'

import M from 'materialize-css';

const Line_Two = () => {
  useEffect(() => {
    let elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
}, [])

return (
<div className="parallax-container" style={{height: "auto"}}>
    <div className='parallax'><img src={process.env.PUBLIC_URL + '/bg1.jpg'} alt='lineone'/>
    </div>
</div>
)
}

export default Line_Two
