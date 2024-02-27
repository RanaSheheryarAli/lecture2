
 async function updatePercentage() {
  for (let i = 0; i <= 94; i++) {
    document.getElementById("persent").innerHTML = i + "%";
    await sleep(80); // Wait for 100 milliseconds (0.1 seconds) before the next iteration
  }
} 
async function updatePercentage2() {
  for (let i = 0; i <= 124; i++) {
    document.getElementById("persent2").innerHTML = i ;
    await sleep(80); // Wait for 100 milliseconds (0.1 seconds) before the next iteration
  }
} 
async function updatePercentage3() {
  for (let i = 0; i <= 2304; i++) {
    document.getElementById("persent3").innerHTML = i;
    await sleep(0); // Wait for 100 milliseconds (0.1 seconds) before the next iteration
  }
} 
async function updatePercentage4() {
  for (let i = 0; i <= 32; i++) {
    document.getElementById("persent4").innerHTML = i ;
    await sleep(100); // Wait for 100 milliseconds (0.1 seconds) before the next iteration
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // If the target element is intersecting (becomes visible)
          // Call the asynchronous function to update the percentage
          updatePercentage();
          updatePercentage2();
          updatePercentage3();
          updatePercentage4();
          // Stop observing once it becomes visible (optional)
          observer.unobserve(entry.target);
        }
      });
    }
     // Create an Intersection Observer instance
     const observer = new IntersectionObserver(handleIntersect, {
      root: null, // Use the viewport as the root
      threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe the target element
    const targetElement = document.getElementById("targetElement");
    observer.observe(targetElement);

