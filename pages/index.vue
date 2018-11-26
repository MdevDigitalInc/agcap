<template lang="pug">
  .agc-home-page
    // Home Hero Section
    section.agc-hero
      .agc-hero-text
        h5
          |welcome to
        h1
          |Ag Capital Canada
        p.--body-large.u-white
          |Helping great businesses grow.
      img.agc-hero-image(src="http://placekitten.com/g/1440/640" alt="todo")
      .agc-hero-panel
    // Our Approach Section
    section.agc-home-approach
      .agc-approach-text
        h2
          |Fostering Growth with Private Equity
        .agcap-title-line
        p
          |We provide capital to help owner-operators take their companies to the next, higher level. We also provide the three other key elements necessary for businesses to succeed: partnership, respect, and true expertise.
        a.agcap-btn(href="/approach" tilte="See our approach")
          |our approach
          i.fas.fa-caret-right
      .agc-approach-image
        img(src="http://placekitten.com/g/1122/450" alt="todo")
    // About Us Section
    section.agc-home-about
      .agc-about-image
        img(src="http://placekitten.com/g/1122/450" alt="todo")
      .agc-about-text
        h2
          |Who We Are
        .agcap-title-line
        p
          |We’re a group of down-to-earth farmers, entrepreneurs and ag-business folks from across Canada. Our team offers a unique mix of industry persepctives and specialties, with shared values of entrepreneurialism, hard work and unwavering ethics.
        a.agcap-btn(href="/about" tilte="Learn about who we are")
          |about us
          i.fas.fa-caret-right
    // Investment Section
    section.agc-home-invest
      .agc-invest-text
        h2
          |Our Investments
        .agcap-title-line
        p
          |We aim to discover, develop and nurture proven Canadian agricultural businesses that are already off to a strong start. Our blend of investment and mentorship will help agricultural innovators make a lasting impact.
        a.agcap-btn(href="/typography" tilte="Request investor info package")
          |Request investor info package
          i.fas.fa-caret-right
      .agc-invest-image
        //- There isn't one!
    // Home Page Background Element
    .agc-home-bg
</template>
