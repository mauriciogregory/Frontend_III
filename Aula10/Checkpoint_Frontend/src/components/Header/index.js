import logo from '../../assets/img/logo.png';
import './index.css';

function handler(id){
    document.getElementById(id).scrollIntoView();
}

export default function Header() {
  return (
    <header className='nav navbar'>
      <img src={logo} width={100}/>
      <ul className="menu">
        {/* {} */}
        <li className="item-menu" onClick={() => handler('about')}>About</li>
        <li className="item-menu" onClick={ () => handler('project')}>Projects</li>
        <li className="item-menu" onClick={() => handler('skill')}>Skills</li>
        <li className="item-menu" onClick={ () => handler('social')}>Social</li>
      </ul>
    </header>
  );
}
