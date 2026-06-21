import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import RuleCard from "../components/RuleCard";

import CreateRuleModal from "../components/CreateRuleModal";

import { useAutomationRules } from "../hooks/useAutomationRules";

import { runAutomation } from "../services/automationApi";

export default function Automation() {
  const { rules, loading, refresh } = useAutomationRules();

  const [open, setOpen] = useState(false);

  const execute = async () => {
    const result = await runAutomation();

    alert(result);

    refresh();
  };

  return (
    <div className="flex bg-[#071120] min-h-screen">
      <Sidebar />

      <div className="ml-72 flex-1 p-8">
        <Topbar />

        <div
          className="
          flex
          justify-between
          mb-8
          "
        >
          <h1
            className="
            text-3xl
            text-white
            font-bold
            "
          >
            Automation Rules
          </h1>

          <div className="flex gap-4">
            <button
              onClick={() => setOpen(true)}
              className="
              bg-[#D4AF37]
              px-5
              py-3
              rounded-xl
              text-black
              font-semibold
              "
            >
              Create Rule
            </button>

            <button
              onClick={execute}
              className="
              bg-green-600
              px-5
              py-3
              rounded-xl
              text-white
              "
            >
              Run Automation
            </button>
          </div>
        </div>

        {loading ? (
          <p className="text-white">Loading...</p>
        ) : (
          <div
            className="
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
            "
          >
            {rules.map((rule) => (
              <RuleCard key={rule.id} rule={rule} />
            ))}
          </div>
        )}

        <CreateRuleModal
          open={open}
          onClose={() => setOpen(false)}
          onSuccess={refresh}
        />
      </div>
    </div>
  );
}
