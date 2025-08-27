import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, MessageSquare, Calendar, DollarSign } from 'lucide-react';

const stats = [
  {
    title: 'Total Attendees',
    value: '1,234',
    icon: Users,
    change: '+12%',
    changeType: 'positive' as const,
  },
  {
    title: 'Survey Responses',
    value: '892',
    icon: MessageSquare,
    change: '+8%',
    changeType: 'positive' as const,
  },
  {
    title: 'Events This Month',
    value: '15',
    icon: Calendar,
    change: '+3',
    changeType: 'positive' as const,
  },
  {
    title: 'Budget Collected',
    value: '$12,450',
    icon: DollarSign,
    change: '+23%',
    changeType: 'positive' as const,
  },
];

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="card-gradient shadow-card transition-smooth hover:shadow-elegant">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-success mt-1">
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