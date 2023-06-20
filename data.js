const articles = [
  {
    id: 1,
    title: "the WET Codbase",
    date: new Date(2020, 9, 4),
    length: 11,
    snippet: `I'm baby ramps kombucha gluten-free ennui swag tattooed street art. Marfa biodiesel letterpress blue bottle subway tile, pop-up pok pok of.`,
  },
  {
    id: 2,
    title: "goodby, clean code",
    date: new Date(2019, 10, 22),
    length: 5,
    snippet: `Biodiesel artisan seitan plaid sriracha copper mug venmo shabby chic. Kickstarter raclette kombucha, yr post-ironic jianbing try-hard flexitarian vaporware normcore.`,
  },
  {
    id: 3,
    title: "my decade in review",
    date: new Date(2018, 7, 11),
    length: 5,
    snippet: `Direct trade shabby chic four dollar toast, tilde actually try-hard bicycle rights aesthetic forage. Meditation keytar asymmetrical tacos artisan truffaut. Pabst jean shorts roof party scenester.`,
  },
  {
    id: 4,
    title: "what are the react team principles",
    date: new Date(2015, 5, 4),
    length: 5,
    snippet: `Selvage street art hammock affogato VHS. Mustache shaman literally wayfarers schlitz. Direct trade four loko narwhal VHS pop-up, chartreuse trust fund typewriter street art swag thundercats art party.`,
  },
];

const navBar = document.querySelector(".nav-bar");
const button = document.querySelector(".button");
const sectionArticles = document.querySelector(".articles");

function displayArticles(articles) {
  const newArticles = articles.map(function (item) {
    const { title, date, length, snippet } = item;
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
    }).format(date);
    return `
          <article class="card">

              <div class="info">
                <header>
                  <h4>${title}</h4>

                  <p>${formattedDate}
                 ${length} read time</p>
                 </header>
                <p class="desc">
                ${snippet}
                </p>
              </div>
          </article>
        `;
  });
  sectionArticles.innerHTML = newArticles.join("");
}

displayArticles(articles);

button.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});
