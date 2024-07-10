// first we are getting all scrolling content
const scrollingContents = document.querySelectorAll('.scrolling-content');

// add an event listener for each scrolling content
scrollingContents.forEach(scrollingContent => {
  scrollingContent.addEventListener('scroll', function () {

    // this keyword refers to our scrolling content
    // we are passing node as a parameter
    handleScrollingEvent(this);
  });
});



// create a scrolling event handler function to handle scrolling events
function handleScrollingEvent(element) {
  const scrollPercentage = getScrollPercentageOfElement(element);

  // getting parent of scrolling content which is card content
  const parent = element.closest('.card-content');
  if (parent) {
    // getting scroll progress element
    const scrollProgress = parent.querySelector('.scroll-progress');

    // here I am checking if element is really exist ? it will help me dealing with errors
    if (scrollProgress) {
      scrollProgress.setAttribute('style', 'width: ' + scrollPercentage + '%;');
    }
  }
}


// create a function to get the percentage of an element
function getScrollPercentageOfElement(element) {
  return element.scrollTop / (element.scrollHeight - element.clientHeight) * 100;
}