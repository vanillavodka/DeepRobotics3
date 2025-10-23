import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
}

const NewsCard = ({ id, title, excerpt, date, category, image }: NewsCardProps) => {
  return (
    <Card className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-500 hover:shadow-elevated hover:shadow-primary/20">
      <Link to={`/news/${id}`} className="block">
        {image && (
          <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary border border-primary/30 rounded">
              {category}
            </span>
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="h-3 w-3 mr-1" />
              {date}
            </div>
          </div>
          
          <h3 className="text-lg font-bold text-foreground group-hover:text-gradient transition-all duration-300 mb-2 line-clamp-2">
            {title}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {excerpt}
          </p>
          
          <div className="flex items-center text-sm text-primary group-hover:translate-x-2 transition-transform duration-300">
            阅读全文
            <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default NewsCard;
