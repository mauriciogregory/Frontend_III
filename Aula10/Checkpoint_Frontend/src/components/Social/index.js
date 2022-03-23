import './index.css';
// import { FiInstagram } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa'; 

export default function Social(){
    return(
        <div className='social' id='social'>
            {/* <FiInstagram className='instagram' /> */}
            <FaLinkedin className='linkedin'/>
            <FaGithub className='github' />
            <FaMailBulk className='email' />
        </div>

    )
}