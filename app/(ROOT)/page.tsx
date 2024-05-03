import HeaderBox from "@/components/HeaderBox";
import TransactionList from "@/components/TransactionsList";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

import { DollarSign } from "lucide-react";

const Home = () => {
  return (
    <section className="no-scrollbar flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll">
      <div className="no-scrollbar flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll">
        <HeaderBox
          title="Welcome back, John!"
          subtext="Here's what's happening with your store today"
        />

        <h1>Overview</h1>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>

        <TransactionList />
      </div>
    </section>
  );
};

export default Home;
