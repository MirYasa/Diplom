/* eslint-disable strict */
'use strict';

import menu from './modules/menu';
import mainSlider from './modules/mainSlider';
import gallerySlider from './modules/gallerySlider';
import carouselSlider from './modules/carouselSlider';
import calculator from './modules/calculator';
import fixedBlocks from './modules/fixedBlocks';
import sendForms from './modules/sendForms';
import validForms from './modules/validFoms';

validForms();
sendForms();
fixedBlocks();
calculator();
carouselSlider();
gallerySlider();
mainSlider();
menu();