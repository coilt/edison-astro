import { gsap, Linear } from '/node_modules/gsap/all'

export function Counter() {
  const counter = gsap.utils.toArray('.number-counter')
  counter.forEach((countNumber) => {
    gsap.fromTo(
      countNumber,
      { innerText: countNumber.innerText },
      {
        innerText: () =>
          Math.floor(parseFloat(countNumber.getAttribute('data-target'))),
        duration: 1,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: countNumber,
          start: 'top 90%',
        },
      },
    )
  })
}
