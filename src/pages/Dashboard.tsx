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
            <h1 className="text-4xl font-bold mb-2">AI Survey Dashboard</h1>
            <p className="text-lg opacity-90">Track community sentiment about AI developments</p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <DashboardStats />
        <DemographicsChart />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="card-gradient shadow-card">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">AI Impact Survey Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { category: "Healthcare AI", positive: 89, negative: 11, total: 156 },
                  { category: "Employment Impact", positive: 34, negative: 66, total: 142 },
                  { category: "Education Technology", positive: 78, negative: 22, total: 189 },
                  { category: "Privacy & Surveillance", positive: 25, negative: 75, total: 134 },
                ].map((item, index) => (
                  <div key={index} className="p-3 rounded-lg bg-accent">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-medium text-sm">{item.category}</p>
                      <p className="text-xs text-muted-foreground">{item.total} responses</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-success"
                          style={{ width: `${item.positive}%` }}
                        />
                      </div>
                      <p className="text-xs text-success font-medium">{item.positive}%</p>
                      <p className="text-xs text-destructive font-medium">{item.negative}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient shadow-card">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Top Survey Responses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: "Medical AI Diagnosis", sentiment: "Positive", accuracy: 94, participants: 145 },
                  { title: "Job Automation Impact", sentiment: "Negative", accuracy: 78, participants: 132 },
                  { title: "AI Educational Tools", sentiment: "Positive", accuracy: 89, participants: 168 },
                  { title: "Surveillance Systems", sentiment: "Negative", accuracy: 82, participants: 124 },
                ].map((item, index) => (
                  <div key={index} className="p-3 rounded-lg bg-muted">
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-medium text-sm">{item.title}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.sentiment === 'Positive' 
                          ? 'bg-success/10 text-success' 
                          : 'bg-destructive/10 text-destructive'
                      }`}>
                        {item.sentiment}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{item.participants} participants</span>
                      <span>{item.accuracy}% consensus</span>
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