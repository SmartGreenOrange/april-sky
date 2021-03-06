
export default {
  // retina_detect: false,
  background: {
    color: '#fff',
    opacity: 0,
    image: '',
    position: '50% 50%',
    repeat: 'no-repeat',
    size: 'cover',
  },
  particles: {
    number: {
      value: 40,
      density: {
        enable: false,
        value_area: 800,
      },
    },
    shape: {
      type: 'circle',
    },
    color: {
      value: 'random',
    },
    lineLinked: {
      enable: false,
      distance: 150,
      color: '#000',
      opacity: 0.4,
      width: 1,
    },
    opacity: {
      value: 0.4,
    },
    rotate: {
      value: 0,
      random: true,
      direction: 'counter-clockwise',
      animation: {
        enable: true,
        speed: 15,
        sync: false,
      },
    },
    size: {
      value: 10,
      random: {
        enable: true,
        minimumValue: 5,
      },
    },
    move: {
      speed: 2,
      random: false,
      outMode: 'bounce',
      enable: true,
      direction: 'none',
      straight: false,
      out_mode: 'out',
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  // particles: {
  //   number: {
  //     value: 0,
  //     density: {
  //       enable: false,
  //       value_area: 800,
  //     },
  //   },
  //   color: {
  //     value: '#000',
  //   },
  //   shape: {
  //     type: 'circle',
  //     stroke: {
  //       width: 0,
  //       color: '#000000',
  //     },
  //     polygon: {
  //       nb_sides: 55,
  //     },
  //     image: {
  //       src: 'https://cdn.matteobruni.it/images/particles/github.svg',
  //       width: 100,
  //       height: 100,
  //     },
  //   },
  //   opacity: {
  //     value: 0.5,
  //     random: false,
  //     anim: {
  //       enable: false,
  //       speed: 1,
  //       opacity_min: 0.1,
  //       sync: false,
  //     },
  //   },
  //   size: {
  //     value: 5,
  //     random: true,
  //     anim: {
  //       enable: false,
  //       speed: 40,
  //       size_min: 0.1,
  //       sync: false,
  //     },
  //   },
  //   line_linked: {
  //     enable: true,
  //     distance: 150,
  //     color: '#000',
  //     opacity: 0.4,
  //     width: 1,
  //   },
  //   move: {
  //     enable: true,
  //     speed: 2,
  //     direction: 'none',
  //     random: false,
  //     straight: false,
  //     out_mode: 'out',
  //     attract: {
  //       enable: false,
  //       rotateX: 600,
  //       rotateY: 1200,
  //     },
  //   },
  // },

  // ????????????
  // interactivity: {
  //   detect_on: 'canvas',
  //   events: {
  //     onhover: {
  //       enable: false,
  //       mode: 'repulse',
  //       parallax: {
  //         enable: false,
  //         force: 60,
  //         smooth: 10,
  //       },
  //     },
  //     onclick: {
  //       enable: false,
  //       mode: 'push',
  //     },
  //     resize: true,
  //   },
  //   modes: {
  //     grab: {
  //       distance: 400,
  //       line_linked: {
  //         opacity: 1,
  //       },
  //     },
  //     bubble: {
  //       distance: 400,
  //       size: 40,
  //       duration: 2,
  //       opacity: 0.8,
  //       speed: 3,
  //     },
  //     repulse: {
  //       distance: 200,
  //     },
  //     push: {
  //       particles_nb: 4,
  //     },
  //     // remove: {
  //     //   particles_nb: 2,
  //     // },
  //   },
  // },

  // absorbers: [
  //   {
  //     position: { x: 50, y: 50 },
  //     opacity: 0.5,
  //     size: {
  //       value: 50,
  //       limit: 50,
  //       random: {
  //         enable: true,
  //         minimumValue: 50,
  //       },
  //     },
  //   },
  // ],
  // emitters: [
  //   {
  //     direction: 'top',
  //     position: {
  //       x: 0,
  //       y: 100,
  //     },
  //     particles: {
  //       shape: {
  //         type: 'circle',
  //       },
  //       color: {
  //         value: 'random',
  //       },
  //       lineLinked: {
  //         enable: false,
  //         distance: 150,
  //         color: '#000',
  //         opacity: 0.4,
  //         width: 1,
  //       },
  //       opacity: {
  //         value: 0.3,
  //       },
  //       rotate: {
  //         value: 0,
  //         random: true,
  //         direction: 'counter-clockwise',
  //         animation: {
  //           enable: true,
  //           speed: 15,
  //           sync: false,
  //         },
  //       },
  //       size: {
  //         value: 10,
  //         random: {
  //           enable: true,
  //           minimumValue: 5,
  //         },
  //       },
  //       move: {
  //         speed: 5,
  //         random: false,
  //         outMode: 'bounce',
  //       },
  //     },
  //   },
  // ],
};
