import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, MessageSquare, Calendar, DollarSign } from 'lucide-react';

const stats = [
  {
    title: 'Total Survey Responses',
    value: '456',
    icon: Users,
    change: '+18%',
    changeType: 'positive' as const,
  },
  {
    title: 'Correct Predictions',
    value: '342',
    icon: MessageSquare,
    change: '+12%',
    changeType: 'positive' as const,
  },
  {
    title: 'Average Score',
    value: '4.2/6',
    icon: Calendar,
    change: '+0.3',
    changeType: 'positive' as const,
  },
  {
    title: 'Accuracy Rate',
    value: '75%',
    icon: DollarSign,
    change: '+5%',
    changeType: 'positive' as const,
  },
];

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="card-gradient shadow-card interactive-card border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground font-sans">
                {stat.title}
              </CardTitle>
              <div className="p-2 rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-3xl font-display font-bold text-foreground mb-2">{stat.value}</div>
              <p className="text-sm font-medium text-success flex items-center gap-1">
                <span className="text-success">↗</span>
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default DashboardStats;