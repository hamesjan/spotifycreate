import { useState } from "react";
import classes from "./Overview.module.css";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const Overview = () => {
  const [result, setResult] = useState("");

  const generateImage = async () => {
    const image = await openai.images.generate({
      prompt: "A cute baby sea otter",
    });

    setResult(image.data);
  };
  return (
    <div className="p-8">
      <button onClick={generateImage}>Generate Image</button>
      {result && <img src={result} alt="Generated" />}
    </div>
  );
};

export default Overview;
