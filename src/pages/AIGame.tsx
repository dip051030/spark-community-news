import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ThumbsUp, ThumbsDown, Brain, Zap, AlertTriangle, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const aiNewsData = [
  {
    id: 1,
    title: "AI-Powered Medical Diagnosis Saves Lives",
    description: "New AI system helps doctors detect cancer 40% earlier than traditional methods, potentially saving thousands of lives annually.",
    impact: "positive",
    category: "Healthcare",
    accuracy: 94,
    sources: 12
  },
  {
    id: 2,
    title: "Job Displacement Concerns Rise with Automation",
    description: "Manufacturing sector faces potential 30% job reduction as AI-powered robots become more sophisticated and cost-effective.",
    impact: "negative",
    category: "Employment",
    accuracy: 78,
    sources: 8
  },
  {
    id: 3,
    title: "AI Tutoring System Improves Student Performance",
    description: "Personalized AI tutoring shows 25% improvement in student test scores across multiple school districts nationwide.",
    impact: "positive",
    category: "Education",
    accuracy: 89,
    sources: 15
  },
  {
    id: 4,
    title: "Privacy Concerns Grow with AI Surveillance",
    description: "Cities implementing AI-powered surveillance systems raise questions about citizen privacy and potential misuse of personal data.",
    impact: "negative",
    category: "Privacy",
    accuracy: 82,
    sources: 20
  },
  {
    id: 5,
    title: "Climate Change Predictions Enhanced by AI",
    description: "Advanced AI models provide more accurate climate forecasting, helping communities prepare for extreme weather events.",
    impact: "positive",
    category: "Environment",
    accuracy: 91,
    sources: 18
  },
  {
    id: 6,
    title: "AI Bias in Hiring Algorithms Exposed",
    description: "Study reveals significant bias against minorities in AI-powered recruitment systems used by major corporations.",
    impact: "negative",
    category: "Social Justice",
    accuracy: 86,
    sources: 11
  }
];

const AIGame = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userChoices, setUserChoices] = useState<Record<number, 'positive' | 'negative'>>({});
  const [showResults, setShowResults] = useState(false);

  const currentNews = aiNewsData[currentIndex];

  const handleChoice = (choice: 'positive' | 'negative') => {
    const newChoices = { ...userChoices, [currentNews.id]: choice };
    setUserChoices(newChoices);

    if (choice === currentNews.impact) {
      setScore(score + 1);
    }

    if (currentIndex < aiNewsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setUserChoices({});
    setShowResults(false);
  };

  const getScoreColor = () => {
    const percentage = (score / aiNewsData.length) * 100;
    if (percentage >= 80) return 'text-success';
    if (percentage >= 60) return 'text-warning';
    return 'text-destructive';
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <div className="container mx-auto px-4 py-8">
          <Card className="max-w-2xl mx-auto card-gradient shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold mb-4">Game Complete! 🎉</CardTitle>
              <div className={`text-4xl font-bold ${getScoreColor()}`}>
                {score} / {aiNewsData.length}
              </div>
              <p className="text-muted-foreground mt-2">
                You correctly identified the impact of {score} out of {aiNewsData.length} AI news stories
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {aiNewsData.map((news) => (
                  <div key={news.id} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{news.title}</p>
                      <Badge variant="outline" className="mt-1">{news.category}</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      {news.impact === 'positive' ? 
                        <ThumbsUp className="w-4 h-4 text-success" /> : 
                        <ThumbsDown className="w-4 h-4 text-destructive" />
                      }
                      {userChoices[news.id] === news.impact ? 
                        <CheckCircle className="w-4 h-4 text-success" /> :
                        <AlertTriangle className="w-4 h-4 text-destructive" />
                      }
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center pt-4">
                <Button onClick={resetGame} variant="hero" size="lg">
                  Play Again
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">AI Impact Game</h1>
          <p className="text-xl text-primary-foreground opacity-90">
            Test your ability to identify positive vs negative AI impacts
          </p>
          <div className="mt-4 flex items-center justify-center space-x-4">
            <Badge variant="secondary" className="text-sm">
              Question {currentIndex + 1} of {aiNewsData.length}
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Score: {score}
            </Badge>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-3xl mx-auto card-gradient shadow-elegant">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <Badge variant="outline">{currentNews.category}</Badge>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Brain className="w-4 h-4" />
                <span>Accuracy: {currentNews.accuracy}%</span>
                <span>•</span>
                <span>{currentNews.sources} sources</span>
              </div>
            </div>
            <CardTitle className="text-xl font-bold mb-4">
              {currentNews.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {currentNews.description}
            </p>
            
            <div className="text-center">
              <p className="font-medium mb-6">What type of impact does this AI development have?</p>
              <div className="flex justify-center space-x-4">
                <Button
                  onClick={() => handleChoice('positive')}
                  variant="success"
                  size="lg"
                  className="flex items-center space-x-2"
                >
                  <ThumbsUp className="w-5 h-5" />
                  <span>Positive Impact</span>
                </Button>
                <Button
                  onClick={() => handleChoice('negative')}
                  variant="destructive"
                  size="lg"
                  className="flex items-center space-x-2"
                >
                  <ThumbsDown className="w-5 h-5" />
                  <span>Negative Impact</span>
                </Button>
              </div>
            </div>
            
            <div className="mt-8 p-4 rounded-lg bg-accent">
              <div className="flex items-center text-sm text-muted-foreground">
                <Zap className="w-4 h-4 mr-2" />
                <span>Think carefully about the societal implications before making your choice!</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AIGame;