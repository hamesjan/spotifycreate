import { useState } from "react";
import classes from "./Overview.module.css";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const Overview = () => {
  const [result, setResult] = useState("");

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: "a cat sitting in a tree",
      n: 1,
      size: "512x512",
    });

    setResult(res.data.data[0].url);
  };

  return (
    <div className="p-8">
      <button onClick={generateImage}>Generate Image</button>
      {result && <img src={result} alt="Generated" />}
    </div>
  );
};

export default Overview;
