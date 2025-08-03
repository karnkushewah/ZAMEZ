const games = [
  {
    name: "Counter-Strike 2",
    description: "Competitive FPS with tactical gameplay.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg",
    link: "https://store.steampowered.com/app/730/CounterStrike_2/"
  },
  {
    name: "Dota 2",
    description: "A competitive MOBA with rich strategy.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg",
    link: "https://store.steampowered.com/app/570/Dota_2/"
  },
  {
    name: "PUBG: BATTLEGROUNDS",
    description: "Battle Royale shooter.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/578080/header.jpg",
    link: "https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/"
  },
  {
    name: "Team Fortress 2",
    description: "Classic team-based shooter.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/440/header.jpg",
    link: "https://store.steampowered.com/app/440/Team_Fortress_2/"
  },
  {
    name: "Warframe",
    description: "Sci-fi cooperative shooter.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/230410/header.jpg",
    link: "https://store.steampowered.com/app/230410/Warframe/"
  },
  {
    name: "Destiny 2",
    description: "Epic sci-fi FPS MMORPG.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1085660/header.jpg",
    link: "https://store.steampowered.com/app/1085660/Destiny_2/"
  },
  {
    name: "Apex Legends",
    description: "Battle Royale with unique legends.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg",
    link: "https://store.steampowered.com/app/1172470/Apex_Legends/"
  },
  {
    name: "ARK: Survival Evolved",
    description: "Survival with dinosaurs.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/346110/header.jpg",
    link: "https://store.steampowered.com/app/346110/ARK_Survival_Evolved/"
  },
  {
    name: "Terraria",
    description: "2D adventure sandbox.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg",
    link: "https://store.steampowered.com/app/105600/Terraria/"
  },
  {
    name: "Rust",
    description: "Survival with PvP and base-building.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/252490/header.jpg",
    link: "https://store.steampowered.com/app/252490/Rust/"
  },
  {
    name: "The Witcher 3: Wild Hunt",
    description: "Epic RPG with stunning visuals.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg",
    link: "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/"
  },
  {
    name: "Cyberpunk 2077",
    description: "Futuristic RPG in Night City.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg",
    link: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/"
  },
  {
    name: "Red Dead Redemption 2",
    description: "Western-themed open world.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg",
    link: "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/"
  },
  {
    name: "GTA V",
    description: "Crime-filled sandbox adventure.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg",
    link: "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/"
  },
  {
    name: "Hogwarts Legacy",
    description: "Magic-filled RPG in wizarding world.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/990080/header.jpg",
    link: "https://store.steampowered.com/app/990080/Hogwarts_Legacy/"
  },
  {
    name: "Elden Ring",
    description: "Open-world fantasy RPG.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg",
    link: "https://store.steampowered.com/app/1245620/ELDEN_RING/"
  },
  {
    name: "Hades",
    description: "Action roguelike with Greek mythology.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg",
    link: "https://store.steampowered.com/app/1145360/Hades/"
  },
  {
    name: "Among Us",
    description: "Social deception party game.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/945360/header.jpg",
    link: "https://store.steampowered.com/app/945360/Among_Us/"
  },
  {
    name: "Fall Guys",
    description: "Fun obstacle course multiplayer.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1097150/header.jpg",
    link: "https://store.steampowered.com/app/1097150/Fall_Guys/"
  },
  {
    name: "VALORANT",
    description: "Tactical FPS from Riot (Web only).",
    image: "https://cdn1.dotesports.com/wp-content/uploads/2022/06/28100936/valorant-new-art.jpg",
    link: "https://playvalorant.com/"
  }
];

const container = document.getElementById("game-container");
const searchInput = document.getElementById("search");

function displayGames(gameList) {
  container.innerHTML = "";
  gameList.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.innerHTML = `
      <img src="${game.image}" alt="${game.name}">
      <h3>${game.name}</h3>
      <p>${game.description}</p>
      <a href="${game.link}" target="_blank">Download</a>
    `;
    container.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchTerm)
  );
  displayGames(filteredGames);
});

displayGames(games);
