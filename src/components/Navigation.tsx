import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BarChart3, Newspaper, GamepadIcon } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="hero-gradient shadow-elegant sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-3xl font-display font-bold text-primary-foreground tracking-tight">
            CommunityHub
          </Link>
          
          <div className="flex items-center space-x-2">
            <Button
              asChild
              variant={isActive('/') ? 'secondary' : 'ghost'}
              size="sm"
              className="transition-bounce"
            >
              <Link to="/">
                <BarChart3 className="w-4 h-4 mr-2" />
                Dashboard
              </Link>
            </Button>
            
            <Button
              asChild
              variant={isActive('/news') ? 'secondary' : 'ghost'}
              size="sm"
              className="transition-bounce"
            >
              <Link to="/news">
                <Newspaper className="w-4 h-4 mr-2" />
                News
              </Link>
            </Button>
            
            <Button
              asChild
              variant={isActive('/ai-game') ? 'secondary' : 'ghost'}
              size="sm"
              className="transition-bounce"
            >
              <Link to="/ai-game">
                <GamepadIcon className="w-4 h-4 mr-2" />
                AI News Game
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;