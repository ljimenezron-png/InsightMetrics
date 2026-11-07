"use strict";
// Navigation on smaller screens
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-navigation');
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('is-open', !expanded);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}));

// Expandable overview of the five service areas
const servicesButton = document.querySelector('#toggle-services');
const servicesDetail = document.querySelector('#services-detail');
servicesButton.addEventListener('click', () => {
  const opening = servicesDetail.hidden;
  servicesDetail.hidden = !opening;
  servicesButton.setAttribute('aria-expanded', String(opening));
  servicesButton.textContent = opening ? 'Hide service details' : 'Explore service details';
});

// Interactive seven-stage methodology
const stageDescriptions = [
  'Clarify mission, goals, intended outcomes, and the decisions the evidence should support.',
  'Design strategies, evaluation plans, programs, processes, or information systems suited to the context.',
  'Define indicators, operational measures, instruments, and appropriate criteria for success.',
  'Gather relevant data through feasible, responsible, and organized collection processes.',
  'Examine patterns, relationships, trends, and limitations using appropriate analytical methods.',
  'Interpret evidence against objectives, standards, context, and evaluation criteria.',
  'Translate findings into decisions, action priorities, follow-up measurement, and learning.'
];
const stageButtons = [...document.querySelectorAll('.step-button')];
const stageTitle = document.querySelector('#stage-title');
const stageDescription = document.querySelector('#stage-description');
stageButtons.forEach(button => button.addEventListener('click', () => {
  const index = Number(button.dataset.stage);
  stageButtons.forEach(item => {
    const active = item === button;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  stageTitle.textContent = button.textContent;
  stageDescription.textContent = stageDescriptions[index];
}));

// Back-to-top button
const topButton = document.querySelector('#back-to-top');
function updateTopButton() { topButton.classList.toggle('is-visible', window.scrollY > 450); }
window.addEventListener('scroll', updateTopButton, {passive:true});
updateTopButton();
topButton.addEventListener('click', () => window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'}));
