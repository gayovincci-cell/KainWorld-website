// ===========================
// EXPLORE FOODS
// ===========================

function exploreFoods() {
    document.getElementById("foods").scrollIntoView({
        behavior: "smooth"
    });
}


// =========================
// FOOD SEARCH
// =========================

function searchFoods() {

    // Get what the visitor typed
    const searchInput = document.getElementById("foodSearch");

    // Convert search text to lowercase
    const searchText = searchInput.value.toLowerCase();

    // Get all food cards
    const foodCards = document.querySelectorAll(".food-card");

    // Check every food card
    foodCards.forEach(function(card) {

        // Get the food name
        const foodName = card.querySelector("h3").textContent.toLowerCase();

        // Show the card if it matches
        if (foodName.includes(searchText)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}

// ===========================
// FOOD DETAILS / RECIPE POPUP
// ===========================

    const recipes = {

    "Chicken Adobo": {
        description:
            "A classic Filipino dish of chicken braised in soy sauce, vinegar, garlic, and spices.",

        cookingTime:
            "45 minutes",

        origin:
            "Philippines",

        ingredients: [
            "1 kg chicken",
            "½ cup soy sauce",
            "½ cup vinegar",
            "4 cloves garlic, crushed",
            "1 cup water",
            "2 bay leaves",
            "1 tsp black pepper",
            "1 tbsp cooking oil"
        ],

        instructions: [
            "Marinate the chicken in soy sauce and garlic for 15 minutes.",
            "Heat cooking oil in a pan and brown the chicken on all sides.",
            "Add the remaining marinade, vinegar, water, bay leaves, and black pepper.",
            "Bring the mixture to a boil.",
            "Lower the heat and simmer for about 30 minutes.",
            "Continue cooking until the sauce becomes slightly thick.",
            "Serve hot with steamed rice."
        ]
    },


    "Sinigang": {
        description:
            "A comforting Filipino sour soup made with pork, vegetables, and a flavorful tamarind broth.",

        cookingTime:
            "1 hour",

        origin:
            "Philippines",

        ingredients: [
            "500 g pork",
            "1.5 liters water",
            "1 cup tamarind soup base",
            "1 tomato, sliced",
            "1 onion, sliced",
            "100 g radish",
            "100 g string beans",
            "1 cup kangkong",
            "2 tbsp fish sauce"
        ],

        instructions: [
            "Place pork and water in a large pot.",
            "Bring to a boil and remove any impurities from the surface.",
            "Add onion and tomato.",
            "Simmer until the pork becomes tender.",
            "Add radish and string beans.",
            "Add the tamarind soup base and fish sauce.",
            "Add kangkong during the final few minutes.",
            "Serve hot with steamed rice."
        ]
    },


    "Lumpia": {
        description:
            "Crispy Filipino spring rolls filled with seasoned meat and vegetables.",

        cookingTime:
            "40 minutes",

        origin:
            "Philippines",

        ingredients: [
            "500 g ground pork",
            "25 lumpia wrappers",
            "1 medium carrot, finely chopped",
            "1 medium onion, finely chopped",
            "3 cloves garlic, minced",
            "1 tsp salt",
            "½ tsp black pepper",
            "2 cups cooking oil"
        ],

        instructions: [
            "Combine ground pork, carrot, onion, garlic, salt, and pepper.",
            "Place a small amount of filling onto each wrapper.",
            "Roll the wrapper tightly and seal the edge with water.",
            "Heat cooking oil in a deep pan.",
            "Fry the lumpia in batches until golden brown and crispy.",
            "Drain excess oil using paper towels.",
            "Serve with your favorite dipping sauce."
        ]
    },


    "Lechon": {
        description:
            "A famous Filipino roasted pork dish known for its crispy skin and flavorful meat.",

        cookingTime:
            "4–6 hours",

        origin:
            "Philippines",

        ingredients: [
            "1 whole pig (6–8 kg)",
            "20 cloves garlic",
            "5 stalks lemongrass",
            "2 tbsp salt",
            "1 tbsp black pepper",
            "10 bay leaves"
        ],

        instructions: [
            "Clean and prepare the whole pig.",
            "Stuff the cavity with garlic, lemongrass, and bay leaves.",
            "Season the inside and outside with salt and pepper.",
            "Secure the pig properly on a roasting spit.",
            "Roast slowly over charcoal for several hours.",
            "Rotate continuously for even cooking.",
            "Continue roasting until the skin becomes golden and crispy.",
            "Rest briefly before chopping and serving."
        ]
    },


    "Sisig": {
        description:
            "A savory Filipino dish made with chopped pork, onions, chili, and calamansi.",

        cookingTime:
            "45 minutes",

        origin:
            "Pampanga, Philippines",

        ingredients: [
            "500 g pork",
            "1 medium onion, finely chopped",
            "3 tbsp calamansi juice",
            "2 chili peppers, chopped",
            "2 tbsp soy sauce",
            "2 tbsp mayonnaise",
            "½ tsp black pepper"
        ],

        instructions: [
            "Boil or grill the pork until fully cooked.",
            "Grill the pork until lightly charred.",
            "Chop the pork into small pieces.",
            "Sauté the onion and chili peppers.",
            "Add the chopped pork and soy sauce.",
            "Cook for several minutes while stirring.",
            "Add calamansi juice and mayonnaise.",
            "Mix well and serve hot."
        ]
    },


    "Halo-Halo": {
        description:
            "A colorful Filipino dessert made with shaved ice, milk, fruits, sweet beans, and delicious toppings.",

        cookingTime:
            "15 minutes",

        origin:
            "Philippines",

        ingredients: [
            "2 cups shaved ice",
            "½ cup sweet beans",
            "½ cup ube",
            "1 cup mixed fruits",
            "½ cup evaporated milk",
            "1 piece leche flan"
        ],

        instructions: [
            "Place sweet beans at the bottom of a tall glass.",
            "Add ube and mixed fruits.",
            "Fill the glass with shaved ice.",
            "Pour evaporated milk over the ice.",
            "Top with leche flan.",
            "Add your preferred toppings.",
            "Mix everything together before eating."
        ]
    },

    "Kare-Kare": {
        description:
            "A rich Filipino stew made with tender meat, vegetables, and a savory peanut sauce.",
        cookingTime:
            "2 hours",

        origin:
            "Philippines",

        ingredients: [
            "Beef — 1 kg",
            "Peanut butter — ½ cup",
            "Eggplant — 2 pieces",
            "String beans — 200 g",
            "Bok choy — 3 pieces",
            "Ground rice — ¼ cup"
        ],

        instructions: [
            "Boil the beef until tender.",
            "Prepare the peanut sauce using peanut butter and ground rice.",
            "Add the tender beef to the sauce.",
            "Add the eggplant, string beans, and bok choy.",
            "Simmer until the vegetables are cooked.",
            "Serve hot with bagoong on the side."
        ]
    },

        "Chicken Inasal": {
        description:
            "A popular Filipino grilled chicken marinated with vinegar, calamansi, garlic, and spices.",
        cookingTime:
            "1 hours 30 minutes",

        origin:
            "Bacolood, Philippines",

        ingredients: [
            "Chicken — 1 kg",
            "Calamansi juice — ½ cup",
            "Vinegar — ¼ cup",
            "Garlic — 6 cloves",
            "Annatto oil — ¼ cup",
            "Brown sugar — 2 tbsp"
        ],

        instructions: [
            "Combine calamansi juice, vinegar, garlic, and brown sugar.",
            "Marinate the chicken for at least 1 hour.",
            "Prepare the grill over medium heat.",
            "Grill the chicken while turning regularly.",
            "Brush with annatto oil while grilling.",
            "Cook until the chicken is fully cooked and lightly charred."
        ]
    },

        "Bulalo": {
        description:
            "A comforting Filipino beef soup made with tender beef shank, bone marrow, and vegetables.",
        
        cookingTime:
            "3 hours",

        ingredients: [
            "Beef shank — 1 kg",
            "Water — 8 cups",
            "Corn — 2 pieces",
            "Potatoes — 2 pieces",
            "Cabbage — ½ head",
            "Fish sauce — 2 tbsp"

        ],

        instructions: [
            "Place the beef shank in a large pot with water.",
            "Bring to a boil and remove the scum from the surface.",
            "Simmer until the beef becomes tender.",
            "Add the corn and potatoes.",
            "Add the cabbage near the end of cooking.",
            "Season with fish sauce and serve hot."
    ],
        origin: 
            "Batangas, Philippines"
    },

        "Leche Flan": {
    description: "A smooth Filipino custard dessert made with egg yolks, condensed milk, and caramelized sugar.",
    cookingTime: "1 hour 15 minutes",
    ingredients: [
        "Egg yolks — 10 pieces",
        "Condensed milk — 1 can",
        "Evaporated milk — 1 can",
        "White sugar — 1 cup",
        "Vanilla extract — 1 tsp"
    ],
    instructions: [
        "Melt the sugar in a pan until it becomes golden caramel.",
        "Pour the caramel into a flan mold.",
        "Mix the egg yolks, condensed milk, evaporated milk, and vanilla.",
        "Pour the mixture into the caramel-lined mold.",
        "Cover the mold and steam for about 45 minutes.",
        "Cool completely before removing from the mold.",
        "Serve chilled."
    ],
    origin: "Philippines"
},

};

function showFoodDetails(foodName) {

    const recipe = recipes[foodName];

    if (!recipe) {
        console.log("Recipe not found:", foodName);
        return;
    }

    // Food name
    document.getElementById("modalFoodName").textContent =
        foodName;

    // Description
    document.getElementById("modalFoodDescription").textContent =
        recipe.description;

    // Cooking time
    document.getElementById("modalCookingTime").textContent =
        recipe.cookingTime;

    // Origin
    document.getElementById("modalFoodOrigin").textContent =
        recipe.origin;


    // Ingredients
    const ingredients =
        document.getElementById("modalFoodIngredients");

    ingredients.innerHTML = "";

    recipe.ingredients.forEach(function(item) {

        const li = document.createElement("li");

        li.textContent = item;

        ingredients.appendChild(li);

    });


    // Cooking instructions
    const instructions =
        document.getElementById("modalFoodInstructions");

    instructions.innerHTML = "";

    recipe.instructions.forEach(function(step) {

        const li = document.createElement("li");

        li.textContent = step;

        instructions.appendChild(li);

    });


    // Show popup
    document.getElementById("foodModal").classList.add("show");

}


// ===========================
// CLOSE FOOD DETAILS
// ===========================

function closeFoodDetails() {

    document
        .getElementById("foodModal")
        .classList.remove("show");


}


// ===========================
// ABOUT MESSAGE
// ===========================

function showAboutMessage() {

    alert(
        "KainWorld shares Filipino food, recipes and culture with people around the world! 🇵🇭❤️"
    );
}

function filterFoods(category) {

    const foodCards = document.querySelectorAll(".food-card");
    const categoryButtons = document.querySelectorAll(".category-btn");

    foodCards.forEach(function(card) {

        const cardCategory = card.getAttribute("data-category");

        if (category === "all" || cardCategory === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

    categoryButtons.forEach(function(button) {
        button.classList.remove("active");
    });

    event.target.classList.add("active");
}

// =========================
// ABOUT POPUP
// =========================

function openAboutPopup() {

    document.getElementById("aboutPopup").style.display = "flex";

}

function closeAboutPopup() {

    document.getElementById("aboutPopup").style.display = "none";

}