import { useState } from "react";

import { createRule } from "../services/automationApi";

export default function CreateRuleModal({ open, onClose, onSuccess }: any) {
  const [form, setForm] = useState({
    userId: 1,
    symbol: "",
    conditionType: "PRICE_GT",
    threshold: 0,
    action: "BUY",
    quantity: 1,
    active: true,
    strategy: "",
    stopLoss: 0,
    takeProfit: 0,
    actionType: "MARKET",
  });

  if (!open) return null;

  const submit = async () => {
    await createRule(form);

    onSuccess();

    onClose();
  };

  return (
    <div
      className="
      fixed
      inset-0
      bg-black/60
      flex
      items-center
      justify-center
      "
    >
      <div
        className="
        bg-[#0D1B2A]
        p-8
        rounded-3xl
        w-[500px]
        "
      >
        <h2
          className="
          text-2xl
          font-bold
          text-white
          mb-6
          "
        >
          Create Rule
        </h2>

        <input
          placeholder="Symbol"
          className="input"
          onChange={(e) =>
            setForm({
              ...form,
              symbol: e.target.value,
            })
          }
        />

        <input
          placeholder="Threshold"
          type="number"
          className="input mt-3"
          onChange={(e) =>
            setForm({
              ...form,
              threshold: Number(e.target.value),
            })
          }
        />

        <input
          placeholder="Quantity"
          type="number"
          className="input mt-3"
          onChange={(e) =>
            setForm({
              ...form,
              quantity: Number(e.target.value),
            })
          }
        />

        <div
          className="
          flex
          gap-4
          mt-6
          "
        >
          <button
            onClick={submit}
            className="
            bg-[#D4AF37]
            text-black
            px-5
            py-3
            rounded-xl
            "
          >
            Save Rule
          </button>

          <button
            onClick={onClose}
            className="
            border
            border-white/10
            text-white
            px-5
            py-3
            rounded-xl
            "
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
