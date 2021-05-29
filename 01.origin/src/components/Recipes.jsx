// Importing "react" is still required when using methods from it
import { useState } from "react";

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

// ES7 Object spread example
const elvenGauntletsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 1,
};

const Recipes = () => {
  const [recipe, setRecipe] = useState(elvenShieldRecipe);

  return (
    <div>
      <h3>目前裝備</h3>
      <button onClick={() => setRecipe(elvenShieldRecipe)}>精靈盾</button>
      <button onClick={() => setRecipe(elvenGauntletsRecipe)}>
        精靈護手
      </button>

      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
