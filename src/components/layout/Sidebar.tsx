
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  TrendingUp, 
  Video, 
  Calendar as CalendarIcon, 
  MessageSquare, 
  FileText,
  Building2
} from "lucide-react";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "results", label: "Resultados", icon: TrendingUp },
  { id: "creatives", label: "Criativos", icon: Video },
  { id: "calendar", label: "Calendário", icon: CalendarIcon },
  { id: "communication", label: "Comunicação", icon: MessageSquare },
  { id: "documents", label: "Documentos", icon: FileText },
];

export const Sidebar = ({ activeSection, setActiveSection }: SidebarProps) => {
  return (
    <aside className="w-64 bg-white shadow-xl border-r border-slate-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800">Central do Cliente</h1>
            <p className="text-sm text-slate-500">Agência Digital</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={cn(
                "w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200",
                isActive 
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg" 
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-800"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* User Info */}
      <div className="p-4 border-t border-slate-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">JS</span>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-800">João Silva</p>
            <p className="text-xs text-slate-500">Gestor de Marketing</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
