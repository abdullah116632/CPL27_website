"use client";

import { useEffect, useState } from "react";
import { FaListCheck } from "react-icons/fa6";

const RegistrationRulesNotice = () => {
  const [rules, setRules] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/registration-rules");
        const result = await response.json();
        setRules(result.rules || []);
      } catch {
        setRules([]);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  if (!loaded || !rules.length) return null;

  return <div className="mb-6 rounded-2xl border border-[#78b82e]/70 bg-[#031320]/85 p-5 text-sm text-white shadow-2xl backdrop-blur-md">
    <h2 className="mb-3 flex items-center gap-2 font-[Impact,Arial_Narrow,sans-serif] text-lg tracking-wide"><FaListCheck className="text-[#78b82e]" />REGISTRATION <span className="text-[#78b82e]">RULES</span></h2>
    <ol className="list-decimal space-y-2 pl-5 marker:font-bold marker:text-[#78b82e]">{rules.map((rule, index) => <li key={index}>{rule}</li>)}</ol>
  </div>;
};

export default RegistrationRulesNotice;
