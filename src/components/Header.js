import React from 'react';
import '../styles/Header.css';

function Header() {
    return(
        <header>
     
                 <nav>
                    <ul>
                        <li><a href="mailto:jacobdeines@gmail.com"><i className="fas fa-envelope"></i></a></li>
          <li><a href="https://github.com/JakeDeines" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
          <li><a href={`${process.env.PUBLIC_URL}/Jacob Deines Resume (1).pdf`} target="_blank" rel="noopener noreferrer"><i className="fas fa-file-alt"></i></a></li>                   
          <li><a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
          </ul>
                 </nav>
        </header>
    );
}

export default Header;