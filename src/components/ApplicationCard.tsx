import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ApplicationCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

const ApplicationCard = ({ id, title, description, image, icon: Icon }: ApplicationCardProps) => {
  return (
    <Card className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-500 hover:shadow-elevated hover:shadow-primary/20">
      <Link to={`/applications/${id}`}>
        <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-primary/20 backdrop-blur-sm rounded-lg border border-primary/30">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                {title}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {description}
            </p>
            <div className="flex items-center text-sm text-primary group-hover:translate-x-2 transition-transform duration-300">
              查看详情
              <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default ApplicationCard;
