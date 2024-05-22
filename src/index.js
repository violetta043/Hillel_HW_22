import $ from "jquery"; 
import {getButton} from './button/button';
import image from './assets/Kitty3.jpeg'; 

import './index.css';


getButton();

const picture = document.createElement('img'); 

picture.setAttribute('src', image);
document.querySelector('body').appendChild(picture);


