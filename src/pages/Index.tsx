
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Dashboard } from "@/components/sections/Dashboard";
import { Results } from "@/components/sections/Results";
import { Creatives } from "@/components/sections/Creatives";
import { Calendar } from "@/components/sections/Calendar";
import { Communication } from "@/components/sections/Communication";
import { Documents } from "@/components/sections/Documents";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "results":
        return <Results />;
      case "creatives":
        return <Creatives />;
      case "calendar":
        return <Calendar />;
      case "communication":
        return <Communication />;
      case "documents":
        return <Documents />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto">
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default Index;
