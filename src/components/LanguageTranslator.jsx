import { useEffect, useState } from "react";
import LanguageInput from "./LanguageInput";
import TextInput from "./TextInput";
import axios from "axios";
import "../App.css";

function LanguageTranslator() {
  const [languages, setLanguages] = useState([]);
  const [fromLanguage, setFromLanguage] = useState("");
  const [toLanguage, setToLanguage] = useState("");
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  async function getLanguages() {
    const url = "https://text-translator2.p.rapidapi.com/getLanguages";

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "4bd6365e42msh7ebf43a615ad500p1e410cjsn2673f641b4cd",
        "x-rapidapi-host": "text-translator2.p.rapidapi.com",
      },
    };

    try {
      const response = await axios(url, options);
      const result = response.data;
      setLanguages(result.data.languages);
    } catch (error) {
      console.error("Error fetching languages:", error);
    }
  }

  async function translateText() {
    const data = new FormData();
    data.append("source_language", fromLanguage);
    data.append("target_language", toLanguage);
    data.append("text", text);

    const options = {
      method: "POST",
      url: "https://text-translator2.p.rapidapi.com/translate",
      headers: {
        "x-rapidapi-key": "4bd6365e42msh7ebf43a615ad500p1e410cjsn2673f641b4cd",
        "x-rapidapi-host": "text-translator2.p.rapidapi.com",
      },
      data: data,
    };

    try {
      const response = await axios.request(options);
      const translated = response.data.data.translatedText;
      setTranslatedText(translated);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getLanguages();
  }, []);

  return (
    <>
      <div className="wrapper">
        
    
        <h1>Language Translator</h1>
        <div className="wrapper-2">
        <div className="selectWrapper">
          <LanguageInput
            label="Translate from:"
            language={languages}
            selectedLanguage={fromLanguage}
            setSelectedLanguage={setFromLanguage}
          />
          <LanguageInput
            label="Translate to:"
            language={languages}
            selectedLanguage={toLanguage}
            setSelectedLanguage={setToLanguage}
          />
        </div>

        <div className="wrapper3">

        <div className="inputArea">
          <TextInput
            label="Enter Text:"
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
        </div>
        <div className="output">
        <TextInput label="Translated Text:" value={translatedText} readOnly />
        </div>
            </div>


        <button onClick={translateText}>Translate</button>
        </div>
      </div>
    </>
  );
}

export default LanguageTranslator;
