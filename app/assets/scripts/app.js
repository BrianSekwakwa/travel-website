import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';

let mobile = new MobileMenu;
let revealOurFeatures = new RevealOnScroll($('.feature-item'), '85%');
let revealTestimonials = new RevealOnScroll($('.testimonial'), '60%');
let stickyHeader = new StickyHeader;

