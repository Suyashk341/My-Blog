const coachingData = [
  { name: "Alpha JEE Academy", exam: "JEE", city: "Kota", fees: "₹1.2L/year", rating: 4.6 },
  { name: "MedPath NEET Institute", exam: "NEET", city: "Delhi", fees: "₹1.1L/year", rating: 4.7 },
  { name: "CivilEdge UPSC Hub", exam: "UPSC", city: "Pune", fees: "₹95k/year", rating: 4.5 },
  { name: "ScoreFast SSC Center", exam: "SSC", city: "Hyderabad", fees: "₹52k/year", rating: 4.3 },
  { name: "RankRise JEE", exam: "JEE", city: "Delhi", fees: "₹1.4L/year", rating: 4.8 },
  { name: "BioMentor NEET", exam: "NEET", city: "Pune", fees: "₹98k/year", rating: 4.4 }
];

const resultsContainer = document.getElementById("results");
const examSelect = document.getElementById("exam");
const citySelect = document.getElementById("city");
const findBtn = document.getElementById("findBtn");
const leadForm = document.getElementById("leadForm");
const formMsg = document.getElementById("formMsg");

function renderCards(list) {
  if (!list.length) {
    resultsContainer.innerHTML = "<article><h3>No institutes found</h3><p class='meta'>Try a different exam or city filter.</p></article>";
    return;
  }

  resultsContainer.innerHTML = list
    .map(
      (item) => `
      <article>
        <h3>${item.name}</h3>
        <p class="meta">Exam: ${item.exam}</p>
        <p class="meta">City: ${item.city}</p>
        <p class="meta">Fees: ${item.fees}</p>
        <p class="rating">⭐ ${item.rating}</p>
      </article>
    `
    )
    .join("");
}

function filterData() {
  const selectedExam = examSelect.value;
  const selectedCity = citySelect.value;

  const filtered = coachingData.filter((item) => {
    const examMatch = selectedExam === "all" || item.exam === selectedExam;
    const cityMatch = selectedCity === "all" || item.city === selectedCity;
    return examMatch && cityMatch;
  });

  renderCards(filtered);
}

findBtn.addEventListener("click", filterData);

leadForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const goal = document.getElementById("goal").value;

  formMsg.textContent = `Thanks ${name}! Our counselling team will call you at ${phone} for ${goal} guidance.`;
  leadForm.reset();
});

renderCards(coachingData);
