( function () {
  


let next_hm = document.getElementById('next');
let prev = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let items = document.querySelectorAll('.carousel .item');
let countItem = items.length;
let active = 1;
let other_1 = null;
let other_2 = null;
next_hm.onclick = () => {
    carousel.classList.remove('prev');
    carousel.classList.add('next');
    active =active + 1 >= countItem ? 0 : active + 1;
    other_1 =active - 1 < 0 ? countItem -1 : active - 1;
    other_2 = active + 1 >= countItem ? 0 : active + 1;
    changeSlider();
}
prev.onclick = () => {
    carousel.classList.remove('next');
    carousel.classList.add('prev');
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    other_1 = active + 1 >= countItem ? 0 : active + 1;
    other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
    changeSlider();
}
const changeSlider = () => {
    let itemOldActive = document.querySelector('.carousel .item.active');
    if(itemOldActive) itemOldActive.classList.remove('active');

    let itemOldOther_1 = document.querySelector('.carousel .item.other_1');
    if(itemOldOther_1) itemOldOther_1.classList.remove('other_1');

    let itemOldOther_2 = document.querySelector('.carousel .item.other_2');
    if(itemOldOther_2) itemOldOther_2.classList.remove('other_2');

    items.forEach(e => {
        e.querySelector('.image img').style.animation = 'none';
        // e.querySelector('.image figcaption').style.animation = 'none';
        void e.offsetWidth;
        e.querySelector('.image img').style.animation = '';
        // e.querySelector('.image figcaption').style.animation = '';
    })

    items[active].classList.add('active');
    items[other_1].classList.add('other_1');
    items[other_2].classList.add('other_2');

    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
        next_hm.click();
    }, 20000);
}
let autoPlay = setInterval(() => {
    next_hm.click();
}, 20000);



const flipContainer = document.getElementById('carousel_div');
let startX = 0;
const swipeThreshold = 50; // Minimum px difference to register a swipe

// Record the starting touch position
flipContainer.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

// Compare the starting and ending positions on touchend
flipContainer.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  const swipeDistance = endX - startX;

  if (swipeDistance > swipeThreshold) {
   
    console.log('right')


    carousel.classList.remove('prev');
    carousel.classList.add('next');
    active =active + 1 >= countItem ? 0 : active + 1;
    other_1 =active - 1 < 0 ? countItem -1 : active - 1;
    other_2 = active + 1 >= countItem ? 0 : active + 1;
    changeSlider();


  } else if (swipeDistance < -swipeThreshold) {
   
    console.log('left')

    carousel.classList.remove('next');
    carousel.classList.add('prev');
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    other_1 = active + 1 >= countItem ? 0 : active + 1;
    other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
    changeSlider();
  }
});
// Compare the starting and ending positions on touchend









// number counts

let allValues = document.querySelectorAll(".home_counter_value");

// Start the forEach loop for displaying the values
function home_count_fn(){
  allValues.forEach((singleValue) => {
  let startValue = 0;
  let endValue = parseInt(singleValue.getAttribute("data-value"));
  let duration = Math.floor(2000 / endValue);

  // Counter for increaing the values & display
  let counter = setInterval(function () {
    startValue += 1;
    singleValue.textContent = startValue;
    // Clearing the interval
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
}

// 1. Grab all the elements you want to watch
    const boxes = document.querySelectorAll('.home_counts_div');

    // 2. Create the observer
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
         
          console.log('it here')
          home_count_fn()
          
        }
      });
    }, {
      root: null,           // viewport
      threshold: 0.1        // 10% visible
    });

    // 3. Tell the observer which elements to watch
    boxes.forEach(box => observer.observe(box));




// end number count





// faq home

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');

      question.addEventListener('click', () => {
        const isOpen = answer.classList.contains('open');

        // Close all open answers
        document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
        document.querySelectorAll('.eye.close').forEach(a => a.classList.remove('active'));
        document.querySelectorAll('.eye.open').forEach(a => a.classList.add('active'));
        document.querySelectorAll('.faq-question').forEach(a => a.classList.remove('active'));
        

        // Toggle current item
        if (!isOpen) {
          answer.classList.add('open');
            const specials_close = question.querySelector('.eye.close');
            const specials_open = question.querySelector('.eye.open');
            question.classList.add('active')
            specials_open.classList.remove('active')
            specials_close.classList.add('active')


        }
      });
    });



// end faq home

})()