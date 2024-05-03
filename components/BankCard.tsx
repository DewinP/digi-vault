import { Button } from "@/components/ui/button";
import { DollarSign } from "lucide-react";
import React from "react";

const BankCard = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Citibank</h3>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Savings
          </span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-500 dark:text-gray-400">
            Account Number
          </span>
          <span className="font-medium">3456 7890 1234</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-500 dark:text-gray-400">Balance</span>
          <span className="font-medium text-primary">$23,456.78</span>
        </div>
      </div>
      <Button className="self-end" size="sm" variant="link">
        remove bank
      </Button>
    </div>
  );
};

export default BankCard;
