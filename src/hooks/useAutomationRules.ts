import { useEffect, useState } from "react";

import { getRules } from "../services/automationApi";
import type { AutomationRule } from "../services/automationApi";

export function useAutomationRules() {
  const [rules, setRules] = useState<AutomationRule[]>([]);

  const [loading, setLoading] = useState(true);

  const fetchRules = async () => {
    try {
      const data = await getRules();
      setRules(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRules();
  }, []);

  return {
    rules,
    loading,
    refresh: fetchRules,
  };
}
