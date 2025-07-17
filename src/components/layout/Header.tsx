
import { Bell, Search, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold text-slate-800">Bem-vindo de volta!</h2>
          <span className="text-sm text-slate-500">Acompanhe o progresso das suas campanhas</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input 
              placeholder="Buscar..." 
              className="pl-10 w-64 bg-slate-50 border-slate-200 focus:bg-white"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5 text-slate-600" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </Button>
          
          <Button variant="ghost" size="icon">
            <Settings className="w-5 h-5 text-slate-600" />
          </Button>
        </div>
      </div>
    </header>
  );
};
