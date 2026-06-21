import api from "./api";

export interface AutomationRule {
  id: number;
  userId: number;
  symbol: string;
  conditionType: string;
  threshold: number;
  action: string;
  quantity: number;
  active: boolean;
  strategy: string;
  stopLoss: number;
  takeProfit: number;
  actionType: string;
}

export const getRules = async () => {
  const res = await api.get<AutomationRule[]>("/automation/rules");
  return res.data;
};

export const createRule = async (rule: Omit<AutomationRule, "id">) => {
  const res = await api.post("/automation/rule", rule);

  return res.data;
};

export const runAutomation = async () => {
  const res = await api.post("/automation/run");

  return res.data;
};
