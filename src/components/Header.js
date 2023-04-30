import {Link} from 'react-router-dom';
import {useEffect} from 'react';

import '../styles/Header.css';

export default function Header() {

    useEffect(() => {
        if (window.innerWidth<700) {
            const dropdown = document.getElementById('dropdown');
            dropdown.setAttribute('hidden', true);
        }
        const dropdown = document.getElementById('dropdown');
        const img = document.getElementById('logo');
        Array.from(dropdown.children).forEach((element) => {
            element.addEventListener('click', ()=>{
                if (window.innerWidth < 700){
                    dropdown.setAttribute('hidden', true)
                    img.style.transform = 'rotate(-180deg)'
                    img.style.transitionDuration = '360ms'
                }
            })
            
        });
    }, [])
    window.addEventListener('resize', (e)=>{
        const dropdown = document.getElementById('dropdown');
        const img = document.getElementById('logo');
        if (window.innerWidth<700) {
            dropdown.setAttribute('hidden', true);
            img.style.transform = 'rotate(180deg)'
            img.style.transitionDuration = '1000ms'
        }else{
            dropdown.removeAttribute('hidden')
            img.style.transform = 'rotate(-180deg)'
            img.style.transitionDuration = '1000ms'

        }
    })
    

    

    function handleDropdownClick(e) {
        e.preventDefault();
        if (window.innerWidth<700) {
            const dropdown = document.getElementById('dropdown');
            const img = document.getElementById('logo');
            if (dropdown) {
                if (dropdown.hasAttribute('hidden')){
                    dropdown.removeAttribute('hidden')
                    if (img) {
                        img.style.transform = 'rotate(180deg)'
                        img.style.transitionDuration = '360ms'
                    }
                }else {
                    dropdown.setAttribute('hidden', true)
                    if (img) {
                        img.style.transform = 'rotate(-180deg)'
                        img.style.transitionDuration = '360ms'
                    }
                }
            }
        }
    }
    return (
        <>
            <div className='header'>
                <nav> 
                    <a onClick={handleDropdownClick} ><img id='logo' src='./logo512.png' alt='logo'/></a>
                    <ul id='dropdown'> 
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/contact'>Other Details</Link></li>
                    </ul> 

                </nav>
            </div>
        </>
    )
}