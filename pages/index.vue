<template lang="pug">
  .agc-home-page
    // Home Hero Section
    section.agc-hero
      .agc-hero-text
        h5
          |welcome to
        h1
          |Ag Capital Canada
        p.--body-large.u-white.u-ultralight
          |Helping great businesses grow.
      .agc-hero-image
      .agc-hero-panel
    // Our Approach Section
    section.agc-featured
      .agc-featured-blurb
        h2
          |Fostering Growth with Private Equity
        .agcap-title-line
        p
          |We provide capital to help owner-operators take their companies to the next, higher level. We also provide the three other key elements necessary for businesses to succeed: partnership, respect, and true expertise.
        a.agcap-btn(href="/approach" title="See our approach")
          |our approach
          i.fas.fa-caret-right
      .agc-featured-image.--greenhouse
    // About Us Section
    section.agc-featured
      .agc-featured-blurb.--right
        h2
          |Who We Are
        .agcap-title-line
        p
          |We’re a group of down-to-earth farmers, entrepreneurs and ag-business folks from across Canada. Our team offers a unique mix of industry perspectives and specialties, with shared values of entrepreneurialism, hard work and unwavering ethics.
        a.agcap-btn(href="/about" title="Learn about who we are")
          |about us
          i.fas.fa-caret-right
      .agc-featured-image.--left.--plants
    // Investment Section
    section.agc-home-invest
      .agc-featured-blurb.--solo
        h2
          |Our Investments
        .agcap-title-line
        p
          |We aim to discover, develop and nurture proven Canadian agricultural businesses that are already off to a strong start. Our blend of investment and mentorship will help agricultural innovators make a lasting impact.
        a.agcap-btn(href="/contact" title="Request investor info package")
          |Request investor info package
          i.fas.fa-caret-right
      .agc-featured-empty
    // Home Page Background Element
    .agc-home-bg
</template>
