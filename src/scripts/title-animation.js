import { animate, svg, stagger } from 'animejs';

animate(svg.createDrawable('.line'), {
  draw: ['0 0', '0 1'],
  ease: 'inOutQuad',
  duration: 4000,
  delay: stagger(80),
  loop: false,
});