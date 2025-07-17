
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  Eye, 
  MousePointer, 
  Video, 
  Calendar,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

export const Dashboard = () => {
  const kpis = [
    {
      title: "ROAS",
      value: "4.2x",
      change: "+12%",
      trend: "up",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "CPC Médio",
      value: "R$ 0,85",
      change: "-8%",
      trend: "down",
      icon: MousePointer,
      color: "text-blue-600"
    },
    {
      title: "Impressões",
      value: "45.2K",
      change: "+23%",
      trend: "up",
      icon: Eye,
      color: "text-purple-600"
    },
    {
      title: "Vídeos Entregues",
      value: "8",
      change: "+2",
      trend: "up",
      icon: Video,
      color: "text-orange-600"
    }
  ];

  const recentActivities = [
    {
      type: "video",
      title: "Novo vídeo para aprovação",
      description: "Campanha Black Friday - Versão 2",
      time: "2 horas atrás",
      status: "pending"
    },
    {
      type: "campaign",
      title: "Relatório semanal disponível",
      description: "Semana 15-21/01 - Meta Ads",
      time: "1 dia atrás",
      status: "completed"
    },
    {
      type: "message",
      title: "Nova mensagem da equipe",
      description: "Ajustes no cronograma de janeiro",
      time: "2 dias atrás",
      status: "new"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* KPIs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          const TrendIcon = kpi.trend === "up" ? ArrowUpRight : ArrowDownRight;
          
          return (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-600">
                  {kpi.title}
                </CardTitle>
                <Icon className={`w-5 h-5 ${kpi.color}`} />
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-slate-800">{kpi.value}</div>
                    <div className={`flex items-center text-sm mt-1 ${
                      kpi.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}>
                      <TrendIcon className="w-4 h-4 mr-1" />
                      {kpi.change}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span>Atividades Recentes</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className={`w-3 h-3 rounded-full mt-2 ${
                  activity.status === "pending" ? "bg-yellow-500" :
                  activity.status === "completed" ? "bg-green-500" : "bg-blue-500"
                }`}></div>
                <div className="flex-1">
                  <h4 className="font-medium text-slate-800">{activity.title}</h4>
                  <p className="text-sm text-slate-600 mt-1">{activity.description}</p>
                  <span className="text-xs text-slate-400 mt-2 block">{activity.time}</span>
                </div>
                <Badge variant={
                  activity.status === "pending" ? "secondary" :
                  activity.status === "completed" ? "default" : "outline"
                }>
                  {activity.status === "pending" ? "Pendente" :
                   activity.status === "completed" ? "Concluído" : "Novo"}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Serviços Contratados</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <p className="font-medium text-green-800">Tráfego Pago</p>
                <p className="text-sm text-green-600">Meta & Google Ads</p>
              </div>
              <Badge className="bg-green-600">Ativo</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div>
                <p className="font-medium text-purple-800">Criação de Vídeos</p>
                <p className="text-sm text-purple-600">8 vídeos/mês</p>
              </div>
              <Badge className="bg-purple-600">Ativo</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div>
                <p className="font-medium text-blue-800">Social Media</p>
                <p className="text-sm text-blue-600">Gestão de redes</p>
              </div>
              <Badge className="bg-blue-600">Ativo</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
