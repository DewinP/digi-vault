import BankCard from "@/components/BankCard";
import HeaderBox from "@/components/HeaderBox";
import { Button } from "@/components/ui/button";
import { Ban, DollarSign } from "lucide-react";
import React from "react";

export default function Banks() {
  return (
    <section className="py-12 md:py-16 lg:py-20 w-full">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          <BankCard />
          <BankCard />
          <BankCard />
          <BankCard />
          <BankCard />
          <BankCard />
        </div>
      </div>
    </section>
  );
}
