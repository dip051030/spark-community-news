import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, User, Eye } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: "Community Center Renovation Project Completed",
    excerpt: "Our community center has been successfully renovated with new facilities including a modern gym, updated meeting rooms, and improved accessibility features.",
    author: "Sarah Johnson",
    publishedAt: "2024-01-15",
    readTime: "3 min read",
    views: 245,
    category: "Infrastructure",
    status: "featured"
  },
  {
    id: 2,
    title: "New Youth Education Program Launches",
    excerpt: "We're excited to announce the launch of our new youth education program focusing on digital literacy and environmental awareness.",
    author: "Mike Chen",
    publishedAt: "2024-01-12",
    readTime: "2 min read",
    views: 189,
    category: "Education",
    status: "new"
  },
  {
    id: 3,
    title: "Community Garden Project Seeks Volunteers",
    excerpt: "Join us in creating a sustainable community garden that will provide fresh produce for local families and educational opportunities for children.",
    author: "Emma Davis",
    publishedAt: "2024-01-10",
    readTime: "4 min read",
    views: 156,
    category: "Environment",
    status: "urgent"
  },
  {
    id: 4,
    title: "Annual Community Festival Planning Update",
    excerpt: "Get the latest updates on our annual community festival planning, including vendor applications, volunteer opportunities, and entertainment lineup.",
    author: "David Wilson",
    publishedAt: "2024-01-08",
    readTime: "5 min read",
    views: 298,
    category: "Events",
    status: "regular"
  },
  {
    id: 5,
    title: "Healthcare Initiative Provides Free Checkups",
    excerpt: "In partnership with local healthcare providers, we're offering free health checkups for community members throughout February.",
    author: "Dr. Lisa Martinez",
    publishedAt: "2024-01-05",
    readTime: "3 min read",
    views: 203,
    category: "Health",
    status: "important"
  },
  {
    id: 6,
    title: "Transportation Improvement Survey Results",
    excerpt: "Thank you to everyone who participated in our transportation survey. Here are the results and our planned improvements based on your feedback.",
    author: "Alex Thompson",
    publishedAt: "2024-01-03",
    readTime: "6 min read",
    views: 167,
    category: "Transportation",
    status: "regular"
  }
];

const getBadgeVariant = (status: string) => {
  switch (status) {
    case 'featured': return 'default';
    case 'new': return 'secondary';
    case 'urgent': return 'destructive';
    case 'important': return 'outline';
    default: return 'outline';
  }
};

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">Community News</h1>
          <p className="text-xl text-primary-foreground opacity-90">
            Stay updated with the latest community developments and initiatives
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article) => (
            <Card key={article.id} className="card-gradient shadow-card hover:shadow-elegant transition-smooth cursor-pointer">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={getBadgeVariant(article.status)} className="mb-2">
                    {article.category}
                  </Badge>
                  {article.status === 'featured' && (
                    <Badge variant="default">Featured</Badge>
                  )}
                </div>
                <CardTitle className="text-lg leading-tight hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-3 h-3 mr-1" />
                    {article.views}
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    Published {new Date(article.publishedAt).toLocaleDateString()}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Want to stay updated with more community news?</p>
          <div className="space-x-4">
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Subscribe to Newsletter
            </button>
            <button className="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
              Submit News Tip
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default News;