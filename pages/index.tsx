import type { NextPage, GetServerSidePropsResult } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

type Recipe = {
  title: string;
  description?: string;
  ingredients?: Array<string>;
  steps?: Array<string>;
};

const recipes: Array<Recipe> = [
  {
    title: "Korv och mos",
    description: "Går alltid hem",
    ingredients: [
      "korv",
      "potatis",
      "mjölk",
      "smör",
      "vitpeppar",
      "salt",
      "ketchup",
      "senap",
    ],
    steps: [
      "Skala potatis",
      "Koka potatis",
      "Stek korv",
      "Värm smör, mjölk och vitpeppar",
      "Vispa potatismos",
      "Ät",
    ],
  },
  {
    title: "Köttbullar och potatismos",
  },
  {
    title: "Korv med bröd",
  },
  {
    title: "Bakpotatis",
  },
];

type RecipeIndex = {
  index: number;
};

const _getRandomIndex = () => Math.floor(Math.random() * recipes.length);

export const getServerSideProps = (): GetServerSidePropsResult<RecipeIndex> => {
  return {
    props: {
      index: _getRandomIndex(),
    },
  };
};

const Home: NextPage<RecipeIndex> = ({ index }) => {
  const [recipeIndex, setRecipeIndex] = useState(index);

  const recipe = recipes[recipeIndex];
  return (
    <div className={styles.container}>
      <Head>
        <title>Recept</title>
        <meta name="description" content="Vardagsrecept" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button
          onClick={() => {
            setRecipeIndex(_getRandomIndex());
          }}
        >
          NEJ, NÅT ANNAT!
        </button>
        <h3>{recipe.title}</h3>
        <ol>
          {recipe.steps &&
            recipe.steps?.map((step) => <li key={`step_${step}`}>{step}</li>)}
        </ol>
      </main>
    </div>
  );
};

export default Home;
