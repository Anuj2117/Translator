import React from "react";

function LanguageInput({ label, language, selectedLanguage, setSelectedLanguage }) {
    return (
        <div>
            <label htmlFor="languages">{label}</label>
            <select 
                name="language" 
                id="languages" 
                value={selectedLanguage} 
                onChange={(e) => setSelectedLanguage(e.target.value)}
            >
                <option value="">Select language</option>
                {language.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default LanguageInput;
