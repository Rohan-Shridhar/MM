# Marketing Management study notes

A responsive, static study website built with vanilla HTML, CSS, and JavaScript. It works by opening `index.html` directly in a browser; no installation or build step is required.

## Project structure

- `index.html` — course introduction and links to all eight weeks.
- `week1.html`–`week8.html` — weekly introduction, consolidated notes, original definition table, takeaways, and interactive practice quiz.
- `css/global.css` — shared visual tokens, responsive layout, accessibility states, table scrolling, reduced-motion support, and print styles.
- `js/quiz.js` — shared independent quiz state and interactions.

The original source pages remain in the repository root and are not overwritten. Weeks 3 and 6 had no quizzes in their original HTML notes; their 10-question quizzes were supplied separately by the engineer and are labeled as such. Some quiz terms are not elaborated in the original weekly summaries; the supplied wording, answer keys, and explanations are retained without adding lecture content. Week 8 supplies correct-answer labels but no explanations, so only its original answer information is revealed.

## Source content notes for review

- Week 3 explicitly describes its notes as an introduction/terminology set shared so far; additional lecture content was not supplied. A separate 10-question practice quiz has since been provided and added.
- Week 1 uses **STPD** (including Differentiation), while Weeks 7–8 use **STP**. Both source formulations are retained in their respective weeks.
- Week 2 varies the order of the 3 C’s between sections and uses Café Coffee Day as examples for both Customer Intimacy and Focus. The JC Electrical notes say supplier power is not detailed.
- Some source quiz items reference concepts not fully defined in their notes: Week 1’s business-performance consequence; Week 5’s named cognitive-dissonance stages; Week 7’s situational-environment factor, Starch consumer segments, and “1:2:1 Marketing” option; and Week 8’s organizational buying influence and international-market challenge. Week 7 also includes “Fulfilled” as an option while the supplied notes use “Actualizer” in a VALS-style example. Original question options, keys, and supplied explanations are preserved rather than rewritten.
- Week 2 gives the 3 C’s as Customer/Company/Competition in one section and Company/Customers/Competition in another. Its supplier-power case analysis is explicitly incomplete in the source.
- Week 1 labels the strategic process STPD, while later source weeks use STP. These source formulations are retained rather than normalized.
- The source Week 4 citation artifact was removed from the displayed study text. The malformed SWOT table markup in Week 2 was repaired without changing its four SWOT categories or case content.
- Spelling and hyphenation variants from the source (for example, “rebuy” / “re-buy”) remain where they form part of the original course wording.

Please verify these source-specific terms against the course materials before changing them; the site does not claim to resolve them.

## Run locally

Open `marketing-management/index.html` in a current browser. Because the site is static and uses relative links, the same directory can be deployed as a static site (including on Vercel) without a build command.

## Study and print

Use the table of contents and previous/next links to move between sections and weeks. Quiz state is local to the current page. `Answer All` reveals keys but does not add points to the student-earned score. Use the browser's Print / Save as PDF command for print-friendly notes.
