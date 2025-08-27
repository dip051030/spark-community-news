import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const demographicsData = [
  { name: 'Male', value: 52, color: 'hsl(var(--primary))' },
  { name: 'Female', value: 45, color: 'hsl(var(--primary-glow))' },
  { name: 'Other', value: 3, color: 'hsl(var(--accent))' },
];

const ageData = [
  { name: '18-25', value: 28, color: 'hsl(var(--primary))' },
  { name: '26-35', value: 35, color: 'hsl(var(--primary-glow))' },
  { name: '36-45', value: 22, color: 'hsl(var(--accent))' },
  { name: '46+', value: 15, color: 'hsl(var(--muted-foreground))' },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card p-3 rounded-lg shadow-card border">
        <p className="text-sm">{`${payload[0].name}: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const DemographicsChart = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <Card className="card-gradient shadow-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Gender Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={demographicsData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {demographicsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="card-gradient shadow-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Age Groups</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={ageData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {ageData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default DemographicsChart;