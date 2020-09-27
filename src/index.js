/* eslint-disable strict */
'use strict';

import menu from './modules/menu';
import mainSlider from './modules/mainSlider';
import gallerySlider from './modules/gallerySlider';
import carouselSlider from './modules/carouselSlider';
import fixedBlocks from './modules/fixedBlocks';
import sendForms from './modules/sendForms';
import validForms from './modules/validFoms';

validForms('.phone');
sendForms();
fixedBlocks();
carouselSlider();
gallerySlider();
mainSlider();
menu();