
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarIcon, Instagram, Youtube, Facebook, Plus, Filter } from "lucide-react";
import { useState } from "react";

export const Calendar = () => {
  const [viewMode, setViewMode] = useState("month");
  
  const posts = [
    {
      id: 1,
      title: "Post sobre Black Friday",
      platform: "Instagram",
      date: "2024-01-25",
      time: "14:00",
      status: "Programado",
      type: "Carrossel"
    },
    {
      id: 2,
      title: "Vídeo tutorial produto",
      platform: "YouTube",
      date: "2024-01-26",
      time: "10:00",
      status: "Em Aprovação",
      type: "Vídeo"
    },
    {
      id: 3,
      title: "Story promocional",
      platform: "Instagram",
      date: "2024-01-27",
      time: "16:30",
      status: "Publicado",
      type: "Story"
    },
    {
      id: 4,
      title: "Post educativo",
      platform: "Facebook",
      date: "2024-01-28",
      time: "09:00",
      status: "Programado",
      type: "Imagem"
    },
    {
      id: 5,
      title: "Reels tendência",
      platform: "Instagram",
      date: "2024-01-29",
      time: "18:00",
      status: "Rascunho",
      type: "Reels"
    }
  ];

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "Instagram": return <Instagram className="w-4 h-4" />;
      case "YouTube": return <Youtube className="w-4 h-4" />;
      case "Facebook": return <Facebook className="w-4 h-4" />;
      default: return <CalendarIcon className="w-4 h-4" />;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "Instagram": return "bg-pink-500";
      case "YouTube": return "bg-red-500";
      case "Facebook": return "bg-blue-600";
      default: return "bg-slate-500";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Programado": return "bg-blue-500";
      case "Publicado": return "bg-green-500";
      case "Em Aprovação": return "bg-yellow-500";
      case "Rascunho": return "bg-slate-500";
      default: return "bg-slate-500";
    }
  };

  // Generate calendar days for current month
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const calendarDays = [];
  
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const dayPosts = posts.filter(post => post.date === dateStr);
    calendarDays.push({ day, posts: dayPosts });
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Calendário de Postagens</h1>
          <p className="text-slate-600 mt-1">Acompanhe o cronograma de publicações nas redes sociais</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Select value={viewMode} onValueChange={setViewMode}>
            <SelectTrigger className="w-[120px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="month">Mês</SelectItem>
              <SelectItem value="week">Semana</SelectItem>
              <SelectItem value="list">Lista</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
          
          <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
            <Plus className="w-4 h-4 mr-2" />
            Nova Postagem
          </Button>
        </div>
      </div>

      {viewMode === "month" ? (
        /* Calendar View */
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Janeiro 2024</span>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">‹ Anterior</Button>
                <Button variant="outline" size="sm">Próximo ›</Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2 mb-4">
              {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map(day => (
                <div key={day} className="p-2 text-center font-medium text-slate-600 text-sm">
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((dayData, index) => (
                <div key={index} className="min-h-[100px] p-2 border border-slate-200 rounded-lg bg-white hover:bg-slate-50">
                  {dayData && (
                    <>
                      <div className="font-medium text-slate-800 mb-2">{dayData.day}</div>
                      <div className="space-y-1">
                        {dayData.posts.slice(0, 2).map(post => (
                          <div key={post.id} className="text-xs p-1 rounded bg-blue-100 text-blue-800 truncate">
                            {post.title}
                          </div>
                        ))}
                        {dayData.posts.length > 2 && (
                          <div className="text-xs text-slate-500">+{dayData.posts.length - 2} mais</div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : (
        /* List View */
        <div className="space-y-4">
          {posts.map(post => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg text-white ${getPlatformColor(post.platform)}`}>
                      {getPlatformIcon(post.platform)}
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-slate-800">{post.title}</h3>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-slate-600">
                        <span>{post.platform}</span>
                        <span>{post.date} às {post.time}</span>
                        <span>{post.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Badge className={`${getStatusColor(post.status)} text-white`}>
                      {post.status}
                    </Badge>
                    
                    <Button variant="outline" size="sm">
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <CalendarIcon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">24</div>
            <div className="text-sm text-slate-600">Posts este mês</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Instagram className="w-8 h-8 text-pink-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">15</div>
            <div className="text-sm text-slate-600">Instagram</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Youtube className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">6</div>
            <div className="text-sm text-slate-600">YouTube</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Facebook className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">3</div>
            <div className="text-sm text-slate-600">Facebook</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
