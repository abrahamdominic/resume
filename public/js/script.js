// Query Selection 
const btn_About = document.querySelector('#btn_about');
const btn_skills = document.querySelector('#btn_skills');
const downArrow = document.querySelector('.downArrow')
const upArrow = document.querySelector('#scrollToTop');
const know_me = document.querySelector('.know_me');
const about_section = document.querySelector('.about_section');
const skills_section = document.querySelector('#skills_section');

// Event Listeners
btn_About.addEventListener('click', () => {
  about_section.scrollIntoView({ behavior: 'smooth' })
})

btn_skills.addEventListener('click', () => {
  skills_section.scrollIntoView({ behavior: 'smooth' })
})

know_me.addEventListener('click', () => {
  about_section.scrollIntoView({ behavior: 'smooth' })
})

upArrow.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
