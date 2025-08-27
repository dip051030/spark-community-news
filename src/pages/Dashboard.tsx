import Navigation from '@/components/Navigation';
import DashboardStats from '@/components/DashboardStats';
import DemographicsChart from '@/components/DemographicsChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import heroImage from '@/assets/hero-community.jpg';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Community Dashboard" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-primary-foreground">
            <h1 className="text-4xl font-bold mb-2">Community Dashboard</h1>
            <p className="text-lg opacity-90">Track your community's growth and engagement</p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <DashboardStats />
        <DemographicsChart />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="card-gradient shadow-card">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Recent Survey Responses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { question: "Community Event Satisfaction", responses: 156, avg: 4.2 },
                  { question: "Facility Quality Rating", responses: 142, avg: 4.0 },
                  { question: "Future Event Interest", responses: 189, avg: 4.5 },
                  { question: "Budget Allocation Approval", responses: 134, avg: 3.8 },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-accent">
                    <div>
                      <p className="font-medium text-sm">{item.question}</p>
                      <p className="text-xs text-muted-foreground">{item.responses} responses</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">{item.avg}/5</p>
                      <p className="text-xs text-muted-foreground">avg rating</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient shadow-card">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Budget Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { category: "Community Events", allocated: 5000, spent: 3200, color: "bg-primary" },
                  { category: "Facility Maintenance", allocated: 3000, spent: 2800, color: "bg-primary-glow" },
                  { category: "Educational Programs", allocated: 2500, spent: 1200, color: "bg-accent-foreground" },
                  { category: "Emergency Fund", allocated: 1950, spent: 0, color: "bg-success" },
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <p className="font-medium text-sm">{item.category}</p>
                      <p className="text-sm text-muted-foreground">
                        ${item.spent} / ${item.allocated}
                      </p>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${item.color}`}
                        style={{ width: `${(item.spent / item.allocated) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;